# Learning Note: 7 reasons not to use SELECT * in SQL Queries
[#PostgreSQL]() [#SQL]() [#Database-optimisation]() 

Learning source: [dzone.com](https://dzone.com/articles/why-you-should-not-use-select-in-sql-query-1)

# 1. Unnecessary I/O
- You may fetch the data you don't need
- It makes queries slower (although not significantly)

# 2. Increased Network Traffic
- It takes more network bandwidth to deliver the data you don't need and may ignore

# 3. More Application Memory
- Redundant data occupies a certain amount of memory, affecting an application's performance.

# 4. Dependency on the order of columns on Resultset
Imagine we have 2 tables
`Profession`
|id   |name            |payrate       |
|-----|----------------|--------------|
|1    |Builder         |$25           |
|2    |Driver          |$26           |
|3    |Accoutant       |$27           |
|4    |Developer       |$28           |

`Staff`
|id   |name            | profession_id|
|-----|----------------|--------------|
|1    |John            |1             |
|2    |Jane            |1             |
|3    |Jean            |2             |
|4    |Smith           |3             |

I want to get all details of a staff member, so I have the following query:
```sql
CREATE FUNCTION get_staff_details(this_staff_id INTEGER)
    RETURNS TABLE(id               INTEGER,
                  profession_id    INTEGER,
                  name             TEXT,
                  profession_name  TEXT,
                  payrate          DECIMAL)
    AS $BODY$
    BEGIN
        RETURN QUERY
            (SELECT s.*, p.name AS profession_name, p.payrate
               FROM staff s
               LEFT JOIN profession p ON p.id = s.profession_id
              WHERE s.id = this_staff_id);
    END;
    $BODY$
LANGUAGE plpgsql;
```
In this case, the function will error because I put columns `profession_id` and `name` in the returned table in the wrong order.

Another case that the function will also error is when we want to extend the table `staff` by adding new columns, the columns are mismatched between the query and the returned table.

# 5. Break VIEWs while adding new columns to a table
When you use SELECT * in views, then you create subtle bugs if a new column has been added and the old one is removed from the table. Why? Because your view will not break but start returning an incorrect result.

# 6. Conflicts in a JOIN query
When you use SELECT * in a JOIN query, you can introduce complications when multiple tables have columns with the same name e.g. status, active, name, etc. Now, go back to the tables in my previous example, you will possibly get an error if you use `SELECT *` in a `JOIN` query

# 7. Accidentally copying wrong data from one table to another
If you've ever used `INSERT INTO ... VALUES (SELECT * FROM)`, you'll know what I mean :). Please take a look at [this](https://dba.stackexchange.com/questions/2973/how-to-insert-values-into-a-table-from-a-select-query-in-postgresql) for more details

I'm done here! See you next time!

