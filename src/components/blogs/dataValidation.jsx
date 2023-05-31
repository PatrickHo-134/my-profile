import { Component } from "react";

export default class Blog20220130 extends Component {
  render() {
    return (
      <div>
        <h1 className="code-line" data-line-start={0} data-line-end={1}>
          <a id="CHECK_CONSTRAINT_vs_TRIGGER_for_data_validation_0" />
          CHECK CONSTRAINT vs. TRIGGER for data validation
        </h1>
        <h4 className="code-line" data-line-start={1} data-line-end={2}>
          <a id="postgresql_trigger_checkconstraint_1" />
          <a href>#postgresql</a> <a href>#trigger</a>{" "}
          <a href>#check-constraint</a>
        </h4>
        <h3 className="code-line" data-line-start={3} data-line-end={4}>
          <a id="CHECK_CONSTRAINT_3" />
          <code>CHECK CONSTRAINT</code>
        </h3>
        <blockquote>
          <p className="has-line-data" data-line-start={4} data-line-end={5}>
            A{" "}
            <a href="https://www.postgresql.org/docs/14/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS">
              check constraint
            </a>{" "}
            is the most generic constraint type. It allows you to specify that
            the value in a certain column must satisfy a Boolean (truth-value)
            expression.
          </p>
        </blockquote>
        <h3 className="code-line" data-line-start={5} data-line-end={6}>
          <a id="TRIGGER_5" />
          <code>TRIGGER</code>
        </h3>
        <blockquote>
          <p className="has-line-data" data-line-start={6} data-line-end={10}>
            A{" "}
            <a href="https://www.postgresql.org/docs/9.1/sql-createtrigger.html">
              trigger
            </a>{" "}
            can be specified to fire
            <br />
            – Before an operation is attempted on a row (before constraints are
            checked and the INSERT, UPDATE, or DELETE is attempted)
            <br />
            – After an operation has completed (after constraints are checked
            and the INSERT, UPDATE, or DELETE has completed)
            <br />– Instead of an operation (in the case of inserts, updates or
            deletes on a view).
          </p>
        </blockquote>
        <blockquote>
          <p className="has-line-data" data-line-start={11} data-line-end={12}>
            If the trigger fires before or instead of the event, the trigger can
            skip the operation for the current row, or change the row being
            inserted (for INSERT and UPDATE operations only). If the trigger
            fires after the event, all changes, including the effects of other
            triggers, are “visible” to the trigger.{" "}
            <a href="https://www.postgresql.org/docs/9.1/sql-createtrigger.html">
              See more
            </a>
          </p>
        </blockquote>
        <h3 className="code-line" data-line-start={13} data-line-end={14}>
          <a id="When_should_you_use_a_TRIGGER_instead_of_a_CHECK_CONSTRAINT_13" />
          When should you use a <code>TRIGGER</code>
          instead of a <code>CHECK CONSTRAINT</code>?
        </h3>
        <p className="has-line-data" data-line-start={15} data-line-end={16}>
          PostgreSQL does <strong>NOT</strong> support
          <strong>
            <code>CHECK CONSTRAINTS</code> that reference table data other than
            the new or updated row being checked
          </strong>
          . While a <code>CHECK CONSTRAINT</code> that violates this rule may
          appear to work in simple tests, it cannot guarantee that the database
          will not reach a state in which the constraint condition is false (due
          to subsequent changes of the other row(s) involved).{" "}
          <strong>This would cause a database dump and reload to fail</strong>.
          The reload could fail even when the complete database state is
          consistent with the constraint, due to rows not being loaded in an
          order that will satisfy the constraint. If possible, use{" "}
          <code>UNIQUE</code>,<code>EXCLUDE</code>, or <code>FOREIGN KEY</code>{" "}
          constraints to express cross-row and cross-table restrictions.
        </p>
        <p className="has-line-data" data-line-start={17} data-line-end={18}>
          If what you desire is a one-time check against other rows at row
          insertion, rather than a continuously-maintained consistency
          guarantee, a custom trigger can be used to implement that. (This
          approach avoids the dump/reload problem because{" "}
          <strong>
            pg_dump does not reinstall triggers until after reloading data, so
            that the check will not be enforced during a dump/reload
          </strong>
          .)
        </p>
        <p className="has-line-data" data-line-start={19} data-line-end={20}>
          To understand the problem better, let’s take a look at a simple
          example that I borrow from this{" "}
          <a href="https://vladmihalcea.com/postgresql-trigger-consistency-check/">
            blog
          </a>{" "}
          of Vlad Mihalcea:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={20} data-line-end={22}>
            The IT department has a budget of $200,000
          </li>
        </ul>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>budget</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>200000</td>
              <td>IT</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li className="has-line-data" data-line-start={26} data-line-end={28}>
            The department currently has 2 employees: John and Jane
          </li>
        </ul>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>salary</th>
              <th>department_id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>60000</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>80000</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <pre>
          <code
            className="has-line-data"
            data-line-start={34}
            data-line-end={53}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> department ({"\n"}
              {"    "}
              <span className="hljs-keyword">id</span>
              {"      "}
              <span className="hljs-built_in">SERIAL</span>
              {"  "}PRIMARY <span className="hljs-keyword">KEY</span>
              {"\n"}
              {"  "}, budget{"  "}
              <span className="hljs-built_in">INT</span>
              {"     "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>{" "}
              <span className="hljs-keyword">CHECK</span> (budget &gt;{" "}
              <span className="hljs-number">0</span>){"\n"}
              {"  "}, <span className="hljs-keyword">name</span>
              {"    "}
              <span className="hljs-built_in">TEXT</span>
              {"    "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>
              {"\n"});
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> employee ({"\n"}
              {"    "}
              <span className="hljs-keyword">id</span>
              {"      "}
              <span className="hljs-built_in">SERIAL</span>
              {"  "}PRIMARY <span className="hljs-keyword">KEY</span>
              {"\n"}
              {"  "}, <span className="hljs-keyword">name</span>
              {"    "}
              <span className="hljs-built_in">TEXT</span>
              {"    "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>
              {"\n"}
              {"  "}, salary{"  "}
              <span className="hljs-built_in">INT</span>{" "}
              <span className="hljs-keyword">NOT</span>{" "}
              <span className="hljs-literal">NULL</span>{" "}
              <span className="hljs-keyword">CHECK</span> (salary &gt;{" "}
              <span className="hljs-number">0</span>){"\n"}
              {"  "}, department_id{" "}
              <span className="hljs-built_in">INTEGER</span>{" "}
              <span className="hljs-keyword">REFERENCES</span> department(
              <span className="hljs-keyword">id</span>){"\n"});
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> department (budget,{" "}
              <span className="hljs-keyword">name</span>){"\n"}
              {"  "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-number">200000</span>,{" "}
              <span className="hljs-string">'IT'</span>);
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> employee (
              <span className="hljs-keyword">name</span>, salary, department_id)
              {"\n"}
              {"  "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-string">'John'</span>,{" "}
              <span className="hljs-number">60000</span>,{" "}
              <span className="hljs-number">1</span>), (
              <span className="hljs-string">'Jane'</span>,{" "}
              <span className="hljs-number">80000</span>,{" "}
              <span className="hljs-number">1</span>);
            </span>
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={54} data-line-end={55}>
          In order to ensure that the department does not go over the budget, we
          have to keep track of the total salary of the entire IT department.
          Hence, we can try to add a check constraint to the{" "}
          <code>employee</code> table (note that this is the case that will
          create an issue in the database).
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={57}
            data-line-end={80}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">FUNCTION</span>{" "}
              is_below_budget(this_department_id{" "}
              <span className="hljs-built_in">INTEGER</span>){"\n"}
              {"  "}
              <span className="hljs-comment">
                -- Returns true if the department's total salary is equal or
                less than the budget
              </span>
              {"\n"}
              {"    "}
              <span className="hljs-keyword">RETURNS</span>{" "}
              <span className="hljs-built_in">BOOLEAN</span>{" "}
              <span className="hljs-keyword">AS</span> $
              <span className="hljs-keyword">BODY</span>${"\n"}
              {"    "}
              <span className="hljs-keyword">DECLARE</span>
              {"\n"}
              {"        "}below_budget{" "}
              <span className="hljs-built_in">BOOLEAN</span>;
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-operator">
              <span className="hljs-keyword">BEGIN</span>
              {"\n"}
              {"        "}
              <span className="hljs-keyword">WITH</span> it_department{" "}
              <span className="hljs-keyword">AS</span> (
              <span className="hljs-keyword">SELECT</span> department_id,{" "}
              <span className="hljs-keyword">SUM</span>(salary){" "}
              <span className="hljs-keyword">AS</span> total_salary{"\n"}
              {"                                 "}
              <span className="hljs-keyword">FROM</span> employee{"\n"}
              {"                                "}
              <span className="hljs-keyword">GROUP</span>{" "}
              <span className="hljs-keyword">BY</span> department_id){"\n"}
              {"        "}
              <span className="hljs-keyword">SELECT</span> itd.total_salary &lt;{" "}
              <span className="hljs-keyword">d</span>.budget{"\n"}
              {"          "}
              <span className="hljs-keyword">FROM</span> it_department itd{"\n"}
              {"          "}
              <span className="hljs-keyword">JOIN</span> department{" "}
              <span className="hljs-keyword">d</span>{" "}
              <span className="hljs-keyword">ON</span>{" "}
              <span className="hljs-keyword">d</span>.
              <span className="hljs-keyword">id</span> = itd.department_id{"\n"}
              {"         "}
              <span className="hljs-keyword">WHERE</span> itd.department_id =
              this_department_id{"\n"}
              {"          "}
              <span className="hljs-keyword">INTO</span> below_budget;
            </span>
            {"\n"}
            {"\n"}
            {"        "}RETURN below_budget;{"\n"}
            {"    "}
            <span className="hljs-operator">
              <span className="hljs-keyword">END</span>;
            </span>
            {"\n"}
            {"    "}$BODY${"\n"}
            {"    "}LANGUAGE plpgsql;{"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">ALTER</span>{" "}
              <span className="hljs-keyword">TABLE</span> employee{"\n"}
              <span className="hljs-keyword">ADD</span>{" "}
              <span className="hljs-keyword">CONSTRAINT</span>{" "}
              check_department_budget{" "}
              <span className="hljs-keyword">CHECK</span>{" "}
              (is_below_budget(department_id));
            </span>
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={81} data-line-end={82}>
          Now, we test the <code>CHECK CONSTRAINT</code> by adding a new
          employee with a salary of $70,000 which makes the total salary over
          the budget. In this case, we expect the database to raise an error.
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={84}
            data-line-end={87}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> employee (
              <span className="hljs-keyword">name</span>, salary, department_id)
              {"\n"}
              {"  "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-string">'Bob'</span>,{" "}
              <span className="hljs-number">70000</span>,{" "}
              <span className="hljs-number">1</span>);
            </span>
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={88} data-line-end={89}>
          Strange enough! we can see that the database allows us to insert the
          new record without any error. Let’s try another operation by updating
          salary of John to $100,000.
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={90}
            data-line-end={94}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">UPDATE</span> employee{"\n"}
              {"   "}
              <span className="hljs-keyword">SET</span> salary ={" "}
              <span className="hljs-number">100000</span>
              {"\n"} <span className="hljs-keyword">WHERE</span>{" "}
              <span className="hljs-keyword">id</span> ={" "}
              <span className="hljs-number">1</span>;
            </span>
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={94} data-line-end={95}>
          Now, we see an error message as follows:
        </p>
        <blockquote>
          <p className="has-line-data" data-line-start={95} data-line-end={97}>
            SQL Error [23514]: ERROR: new row for relation “employee” violates
            check constraint “check_department_budget”
            <br />
            Detail: Failing row contains (1, John, 100000, 1).
          </p>
        </blockquote>
        <p className="has-line-data" data-line-start={98} data-line-end={99}>
          In this case, the <code>CHECK CONSTRAINT</code> does not work as we
          expected and also cause an issue when restoring data from a{" "}
          <code>pg_dump</code> (as mentioned at the beginning of this part)
        </p>
        <p className="has-line-data" data-line-start={100} data-line-end={101}>
          Hence, to avoid those issues, we will implement a trigger to validate
          after an <code>INSERT</code> or <code>UPDATE</code>
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={103}
            data-line-end={134}
          >
            ALTER TABLE employee{"\n"}DROP CONSTRAINT check_department_budget;
            {"\n"}
            {"\n"}CREATE OR REPLACE FUNCTION check_department_budget(){"\n"}
            {"  "}RETURNS TRIGGER AS $${"\n"}DECLARE{"\n"}
            {"  "}allowed_budget BIGINT;{"\n"}
            {"  "}new_budget{"     "}BIGINT;{"\n"}BEGIN{"\n"}
            {"  "}SELECT INTO allowed_budget budget{"\n"}
            {"  "}FROM department{"\n"}
            {"  "}WHERE id = NEW.department_id;{"\n"} {"\n"}
            {"  "}SELECT INTO new_budget SUM(salary){"\n"}
            {"  "}FROM employee{"\n"}
            {"  "}WHERE department_id = NEW.department_id;{"\n"} {"\n"}
            {"  "}IF new_budget &gt; allowed_budget{"\n"}
            {"  "}THEN{"\n"}
            {"    "}RAISE EXCEPTION 'Overbudget department [id:%] by [%]',{"\n"}
            {"    "}NEW.department_id,{"\n"}
            {"    "}(new_budget - allowed_budget);{"\n"}
            {"  "}END IF;{"\n"}
            {"  "}RETURN NEW;{"\n"}END;{"\n"}$$ LANGUAGE plpgsql;{"\n"}
            {"\n"}CREATE TRIGGER check_department_budget_trigger{"\n"}
            {"    "}AFTER INSERT OR UPDATE ON employee{"\n"}
            {"    "}FOR EACH ROW EXECUTE PROCEDURE check_department_budget();
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={135} data-line-end={136}>
          Now, we can test that the trigger works perfectly when we try to
          insert/update invalid data into <code>employee</code> table. To
          understand more about how the trigger work, please look at{" "}
          <a href="https://vladmihalcea.com/postgresql-trigger-consistency-check/">
            here
          </a>
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={138}
            data-line-end={141}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> employee (
              <span className="hljs-keyword">name</span>, salary, department_id){" "}
              {"\n"}
              {"    "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-string">'Jacob'</span>,{" "}
              <span className="hljs-number">200000</span>,{" "}
              <span className="hljs-number">1</span>);
            </span>
            {"\n"}
          </code>
        </pre>
        <h2 className="code-line" data-line-start={142} data-line-end={143}>
          <a id="In_summary_142" />
          In summary
        </h2>
        <ul>
          <li
            className="has-line-data"
            data-line-start={143}
            data-line-end={144}
          >
            A <code>CHECK CONSTRAINT</code> is useful in case you want to
            validate some values of a row that is inserted/updated in a table.
          </li>
          <li
            className="has-line-data"
            data-line-start={144}
            data-line-end={145}
          >
            DO NOT use a <code>CHECK CONSTRAINT</code> that references table
            data other than the new or updated row being checked.
          </li>
          <li
            className="has-line-data"
            data-line-start={145}
            data-line-end={146}
          >
            DO NOT use a <code>CHECK CONSTRAINT</code> that references a
            user-defined function.
          </li>
          <li
            className="has-line-data"
            data-line-start={146}
            data-line-end={148}
          >
            If you want to check data across several tables while
            inserting/updating, a <code>TRIGGER</code> should be used.
          </li>
        </ul>
        <h2 className="code-line" data-line-start={148} data-line-end={149}>
          <a id="Other_resources_that_are_worth_taking_a_look_148" />
          Other resources that are worth taking a look
        </h2>
        <ul>
          <li
            className="has-line-data"
            data-line-start={149}
            data-line-end={150}
          >
            <a href="https://www.postgresql.org/docs/current/trigger-definition.html">
              Trigger behavior - Postgresql documentation
            </a>
          </li>
          <li
            className="has-line-data"
            data-line-start={150}
            data-line-end={151}
          >
            <a href="https://dba.stackexchange.com/questions/75613/disable-all-constraints-and-table-checks-while-restoring-a-dump/75635#75635">
              Disable all constraints and table checks while restoring a dump
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
