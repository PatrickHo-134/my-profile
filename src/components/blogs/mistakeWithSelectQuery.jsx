import { Component } from "react";

export default class Blog20220218 extends Component {
  render() {
    return (
      <div>
        <h1 className="code-line" data-line-start={0} data-line-end={1}>
          <a id="Learning_Note_7_reasons_not_to_use_SELECT__in_SQL_Queries_0" />
          Learning Note: 7 reasons not to use SELECT * in SQL Queries
        </h1>
        <p className="has-line-data" data-line-start={1} data-line-end={2}>
          <a href>#PostgreSQL</a> <a href>#SQL</a>{" "}
          <a href>#Database-optimisation</a>
        </p>
        <p className="has-line-data" data-line-start={3} data-line-end={4}>
          Learning source:{" "}
          <a href="https://dzone.com/articles/why-you-should-not-use-select-in-sql-query-1">
            dzone.com
          </a>
        </p>
        <h1 className="code-line" data-line-start={5} data-line-end={6}>
          <a id="1_Unnecessary_IO_5" />
          1. Unnecessary I/O
        </h1>
        <ul>
          <li className="has-line-data" data-line-start={6} data-line-end={7}>
            You may fetch the data you don’t need
          </li>
          <li className="has-line-data" data-line-start={7} data-line-end={9}>
            It makes queries slower (although not significantly)
          </li>
        </ul>
        <h1 className="code-line" data-line-start={9} data-line-end={10}>
          <a id="2_Increased_Network_Traffic_9" />
          2. Increased Network Traffic
        </h1>
        <ul>
          <li className="has-line-data" data-line-start={10} data-line-end={12}>
            It takes more network bandwidth to deliver the data you don’t need
            and may ignore
          </li>
        </ul>
        <h1 className="code-line" data-line-start={12} data-line-end={13}>
          <a id="3_More_Application_Memory_12" />
          3. More Application Memory
        </h1>
        <ul>
          <li className="has-line-data" data-line-start={13} data-line-end={15}>
            Redundant data occupies a certain amount of memory, affecting an
            application’s performance.
          </li>
        </ul>
        <h1 className="code-line" data-line-start={15} data-line-end={16}>
          <a id="4_Dependency_on_the_order_of_columns_on_Resultset_15" />
          4. Dependency on the order of columns on Resultset
        </h1>
        <p className="has-line-data" data-line-start={16} data-line-end={18}>
          Imagine we have 2 tables
          <br />
          <code>Profession</code>
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>payrate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Builder</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Driver</td>
              <td>$26</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Accoutant</td>
              <td>$27</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Developer</td>
              <td>$28</td>
            </tr>
          </tbody>
        </table>
        <p className="has-line-data" data-line-start={25} data-line-end={26}>
          <code>Staff</code>
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>profession_id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jean</td>
              <td>2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Smith</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <p className="has-line-data" data-line-start={33} data-line-end={34}>
          I want to get all details of a staff member, so I have the following
          query:
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={35}
            data-line-end={52}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">FUNCTION</span>{" "}
              get_staff_details(this_staff_id{" "}
              <span className="hljs-built_in">INTEGER</span>){"\n"}
              {"    "}
              <span className="hljs-keyword">RETURNS</span>{" "}
              <span className="hljs-keyword">TABLE</span>(
              <span className="hljs-keyword">id</span>
              {"               "}
              <span className="hljs-built_in">INTEGER</span>,{"\n"}
              {"                  "}profession_id{"    "}
              <span className="hljs-built_in">INTEGER</span>,{"\n"}
              {"                  "}
              <span className="hljs-keyword">name</span>
              {"             "}
              <span className="hljs-built_in">TEXT</span>,{"\n"}
              {"                  "}profession_name{"  "}
              <span className="hljs-built_in">TEXT</span>,{"\n"}
              {"                  "}payrate{"          "}
              <span className="hljs-built_in">DECIMAL</span>){"\n"}
              {"    "}
              <span className="hljs-keyword">AS</span> $
              <span className="hljs-keyword">BODY</span>${"\n"}
              {"    "}
              <span className="hljs-keyword">BEGIN</span>
              {"\n"}
              {"        "}
              <span className="hljs-keyword">RETURN</span>{" "}
              <span className="hljs-keyword">QUERY</span>
              {"\n"}
              {"            "}(<span className="hljs-keyword">SELECT</span> s.*,{" "}
              <span className="hljs-keyword">p</span>.
              <span className="hljs-keyword">name</span>{" "}
              <span className="hljs-keyword">AS</span> profession_name,{" "}
              <span className="hljs-keyword">p</span>.payrate{"\n"}
              {"               "}
              <span className="hljs-keyword">FROM</span> staff s{"\n"}
              {"               "}
              <span className="hljs-keyword">LEFT</span>{" "}
              <span className="hljs-keyword">JOIN</span> profession{" "}
              <span className="hljs-keyword">p</span>{" "}
              <span className="hljs-keyword">ON</span>{" "}
              <span className="hljs-keyword">p</span>.
              <span className="hljs-keyword">id</span> = s.profession_id{"\n"}
              {"              "}
              <span className="hljs-keyword">WHERE</span> s.
              <span className="hljs-keyword">id</span> = this_staff_id);
            </span>
            {"\n"}
            {"    "}
            <span className="hljs-operator">
              <span className="hljs-keyword">END</span>;
            </span>
            {"\n"}
            {"    "}$BODY${"\n"}LANGUAGE plpgsql;{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={52} data-line-end={53}>
          In this case, the function will error because I put columns{" "}
          <code>profession_id</code> and <code>name</code> in the returned table
          in the wrong order.
        </p>
        <p className="has-line-data" data-line-start={54} data-line-end={55}>
          Another case that the function will also error is when we want to
          extend the table <code>staff</code> by adding new columns, the columns
          are mismatched between the query and the returned table.
        </p>
        <h1 className="code-line" data-line-start={56} data-line-end={57}>
          <a id="5_Break_VIEWs_while_adding_new_columns_to_a_table_56" />
          5. Break VIEWs while adding new columns to a table
        </h1>
        <p className="has-line-data" data-line-start={57} data-line-end={58}>
          When you use SELECT * in views, then you create subtle bugs if a new
          column has been added and the old one is removed from the table. Why?
          Because your view will not break but start returning an incorrect
          result.
        </p>
        <h1 className="code-line" data-line-start={59} data-line-end={60}>
          <a id="6_Conflicts_in_a_JOIN_query_59" />
          6. Conflicts in a JOIN query
        </h1>
        <p className="has-line-data" data-line-start={60} data-line-end={61}>
          When you use SELECT * in a JOIN query, you can introduce complications
          when multiple tables have columns with the same name e.g. status,
          active, name, etc. Now, go back to the tables in my previous example,
          you will possibly get an error if you use
          <code>SELECT *</code> in a <code>JOIN</code> query
        </p>
        <h1 className="code-line" data-line-start={62} data-line-end={63}>
          <a id="7_Accidentally_copying_wrong_data_from_one_table_to_another_62" />
          7. Accidentally copying wrong data from one table to another
        </h1>
        <p className="has-line-data" data-line-start={63} data-line-end={64}>
          If you’ve ever used
          <code>INSERT INTO ... VALUES (SELECT * FROM)</code>, you’ll know what
          I mean :). Please take a look at{" "}
          <a href="https://dba.stackexchange.com/questions/2973/how-to-insert-values-into-a-table-from-a-select-query-in-postgresql">
            this
          </a>
          for more details
        </p>
        <p className="has-line-data" data-line-start={65} data-line-end={66}>
          I’m done here! See you next time!
        </p>
      </div>
    );
  }
}
