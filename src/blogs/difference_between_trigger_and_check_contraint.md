# CHECK CONSTRAINT vs. TRIGGER for data validation
#### [#postgresql]() [#trigger]() [#check-constraint]()

### `CHECK CONSTRAINT`
> A [check constraint] is the most generic constraint type. It allows you to specify that the value in a certain column must satisfy a Boolean (truth-value) expression.
### `TRIGGER`
> A [trigger] can be specified to fire
> -- Before an operation is attempted on a row (before constraints are checked and the INSERT, UPDATE, or DELETE is attempted)
> -- After an operation has completed (after constraints are checked and the INSERT, UPDATE, or DELETE has completed)
> -- Instead of an operation (in the case of inserts, updates or deletes on a view).

> If the trigger fires before or instead of the event, the trigger can skip the operation for the current row, or change the row being inserted (for INSERT and UPDATE operations only). If the trigger fires after the event, all changes, including the effects of other triggers, are "visible" to the trigger. [See more](https://www.postgresql.org/docs/9.1/sql-createtrigger.html)

### When should you use a `TRIGGER` instead of a `CHECK CONSTRAINT`?

PostgreSQL does **NOT** support **`CHECK CONSTRAINTS` that reference table data other than the new or updated row being checked**. While a `CHECK CONSTRAINT` that violates this rule may appear to work in simple tests, it cannot guarantee that the database will not reach a state in which the constraint condition is false (due to subsequent changes of the other row(s) involved). **This would cause a database dump and reload to fail**. The reload could fail even when the complete database state is consistent with the constraint, due to rows not being loaded in an order that will satisfy the constraint. If possible, use `UNIQUE`, `EXCLUDE`, or `FOREIGN KEY` constraints to express cross-row and cross-table restrictions.

If what you desire is a one-time check against other rows at row insertion, rather than a continuously-maintained consistency guarantee, a custom trigger can be used to implement that. (This approach avoids the dump/reload problem because **pg_dump does not reinstall triggers until after reloading data, so that the check will not be enforced during a dump/reload**.)

To understand the problem better, let's take a look at a simple example that I borrow from this [blog](https://vladmihalcea.com/postgresql-trigger-consistency-check/) of Vlad Mihalcea:
- The IT department has a budget of $200,000

|id          |budget            |name            |
|------------|------------------|----------------|
|1           |200000            |IT              |

- The department currently has 2 employees: John and Jane

|id   |name            |salary        | department_id|
|-----|----------------|--------------|--------------|
|1    |John            |60000         |1             |
|2    |Jane            |80000         |1             |

```sql
CREATE TABLE department (
    id      SERIAL  PRIMARY KEY
  , budget  INT     NOT NULL CHECK (budget > 0)
  , name    TEXT    NOT NULL
);

CREATE TABLE employee (
    id      SERIAL  PRIMARY KEY
  , name    TEXT    NOT NULL
  , salary  INT NOT NULL CHECK (salary > 0)
  , department_id INTEGER REFERENCES department(id)
);

INSERT INTO department (budget, name)
  VALUES (200000, 'IT');

INSERT INTO employee (name, salary, department_id)
  VALUES ('John', 60000, 1), ('Jane', 80000, 1);
```

In order to ensure that the department does not go over the budget, we have to keep track of the total salary of the entire IT department. Hence, we can try to add a check constraint to the `employee` table (note that this is the case that will create an issue in the database).

```sql
CREATE FUNCTION is_below_budget(this_department_id INTEGER)
  -- Returns true if the department's total salary is equal or less than the budget
    RETURNS BOOLEAN AS $BODY$
    DECLARE
        below_budget BOOLEAN;
    BEGIN
        WITH it_department AS (SELECT department_id, SUM(salary) AS total_salary
                                 FROM employee
                                GROUP BY department_id)
        SELECT itd.total_salary < d.budget
          FROM it_department itd
          JOIN department d ON d.id = itd.department_id
         WHERE itd.department_id = this_department_id
          INTO below_budget;

        RETURN below_budget;
    END;
    $BODY$
    LANGUAGE plpgsql;

ALTER TABLE employee
ADD CONSTRAINT check_department_budget CHECK (is_below_budget(department_id));
```

Now, we test the `CHECK CONSTRAINT` by adding a new employee with a salary of $70,000 which makes the total salary over the budget. In this case, we expect the database to raise an error.

```sql
INSERT INTO employee (name, salary, department_id)
  VALUES ('Bob', 70000, 1);
```

Strange enough! we can see that the database allows us to insert the new record without any error. Let's try another operation by updating salary of John to $100,000.
```sql
UPDATE employee
   SET salary = 100000
 WHERE id = 1;
```
Now, we see an error message as follows:
> SQL Error [23514]: ERROR: new row for relation "employee" violates check constraint "check_department_budget"
  Detail: Failing row contains (1, John, 100000, 1).

In this case, the `CHECK CONSTRAINT` does not work as we expected and also cause an issue when restoring data from a `pg_dump` (as mentioned at the beginning of this part)

Hence, to avoid those issues, we will implement a trigger to validate after an `INSERT` or `UPDATE`

```sql
ALTER TABLE employee
    DROP CONSTRAINT check_department_budget;

CREATE OR REPLACE FUNCTION check_department_budget()
  RETURNS TRIGGER AS $$
DECLARE
  allowed_budget BIGINT;
  new_budget     BIGINT;
BEGIN
  SELECT INTO allowed_budget budget
  FROM department
  WHERE id = NEW.department_id;

  SELECT INTO new_budget SUM(salary)
  FROM employee
  WHERE department_id = NEW.department_id;

  IF new_budget > allowed_budget
  THEN
    RAISE EXCEPTION 'Overbudget department [id:%] by [%]',
    NEW.department_id,
    (new_budget - allowed_budget);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_department_budget_trigger
    AFTER INSERT OR UPDATE ON employee
    FOR EACH ROW EXECUTE PROCEDURE check_department_budget();
```

Now, we can test that the trigger works perfectly when we try to insert/update invalid data into `employee` table. To understand more about how the trigger work, please look at [here](https://vladmihalcea.com/postgresql-trigger-consistency-check/)

```sql
INSERT INTO employee (name, salary, department_id)
    VALUES ('Jacob', 200000, 1);
```

## In summary
- A `CHECK CONSTRAINT` is useful in case you want to validate some values of a row that is inserted/updated in a table.
- DO NOT use a `CHECK CONSTRAINT` that references table data other than the new or updated row being checked.
- DO NOT use a `CHECK CONSTRAINT` that references a user-defined function.
- If you want to check data across several tables while inserting/updating, a `TRIGGER` should be used.

## Other resources that are worth taking a look
- [Trigger behavior - Postgresql documentation](https://www.postgresql.org/docs/current/trigger-definition.html)
- [Disable all constraints and table checks while restoring a dump](https://dba.stackexchange.com/questions/75613/disable-all-constraints-and-table-checks-while-restoring-a-dump/75635#75635)


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [check constraint]: <https://www.postgresql.org/docs/14/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS>
   [trigger]: <https://www.postgresql.org/docs/9.1/sql-createtrigger.html>
