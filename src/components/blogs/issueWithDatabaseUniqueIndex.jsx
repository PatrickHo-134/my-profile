import { Component } from "react";

export default class Blog20230719 extends Component {
  render() {
    return (
      <div>
        <h1 className="code-line" data-line-start={0} data-line-end={1}>
          <a id="Avoid_this_rookie_mistake_when_working_with_database_indexing_0" />
          Avoid this rookie mistake when working with database indexing!
        </h1>
        <p className="has-line-data" data-line-start={1} data-line-end={3}>
          In this blog post, I want to reflect a valuable lesson from a mistake
          that I made when working with PostgreSQL database. I encountered a
          major hiccup while attempting to create a unique index for a table. My
          intention was to optimize query performance, but instead, I found
          myself drowning in redundant data.
          <br />
          Let’s dive right in by setting up a table with some initial values.
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={5}
            data-line-end={22}
          >
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">TABLE</span> contact_person ({"\n"}
              {"    "}
              <span className="hljs-keyword">id</span>
              {"            "}
              <span className="hljs-built_in">SERIAL</span> PRIMARY{" "}
              <span className="hljs-keyword">KEY</span>,{"\n"}
              {"    "}email{"         "}
              <span className="hljs-built_in">TEXT</span>,{"\n"}
              {"    "}first_name{"    "}
              <span className="hljs-built_in">TEXT</span>,{"\n"}
              {"    "}last_name{"     "}
              <span className="hljs-built_in">TEXT</span>,{"\n"}
              {"    "}phone_number{"  "}
              <span className="hljs-built_in">TEXT</span>
              {"\n"});
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">CREATE</span>{" "}
              <span className="hljs-keyword">UNIQUE</span>{" "}
              <span className="hljs-keyword">INDEX</span>{" "}
              <span className="hljs-keyword">ON</span> contact_person(
              <span className="hljs-keyword">LOWER</span>(email),{"\n"}
              {"                                      "}
              <span className="hljs-keyword">LOWER</span>(phone_number));
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> contact_person (email,
              first_name, last_name, phone_number){"\n"}
              {"    "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-string">'peter@avengers.com'</span>,{" "}
              <span className="hljs-string">'Peter'</span>,{" "}
              <span className="hljs-string">'Parker'</span>,{" "}
              <span className="hljs-string">'034132453'</span>);
            </span>
            {"\n"}
            {"\n"}
            <span className="hljs-operator">
              <span className="hljs-keyword">INSERT</span>{" "}
              <span className="hljs-keyword">INTO</span> CONTACT_PERSON (email,
              first_name, last_name, phone_number){"\n"}
              {"    "}
              <span className="hljs-keyword">VALUES</span> (
              <span className="hljs-string">'steve@avengers.com'</span>,{" "}
              <span className="hljs-string">'Steve'</span>,{" "}
              <span className="hljs-literal">null</span>,{" "}
              <span className="hljs-literal">null</span>);
            </span>
            {"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={23} data-line-end={24}>
          Now, the table <code>contact_person</code> will look like this
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>phone_number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>peter@avengers.com</td>
              <td>Peter</td>
              <td>Parker</td>
              <td>034132453</td>
            </tr>
            <tr>
              <td>2</td>
              <td>steve@avengers.com</td>
              <td>Steve</td>
              <td>[NULL]</td>
              <td>[NULL]</td>
            </tr>
          </tbody>
        </table>
        <h2 className="code-line" data-line-start={30} data-line-end={32}>
          <a id="So_whats_the_issue_here_30" />
          So what’s the issue here?
        </h2>
        <p className="has-line-data" data-line-start={33} data-line-end={35}>
          My intention is that a row in this table is unique based on a
          combination of 2 columns (email, phone_number). However, as you can
          see in the table definition, all these columns are nullable, which
          means the created index won’t work. This is because two{" "}
          <code>NULL</code> values are considered distinct in a&nbsp;
          <code>UNIQUE</code>&nbsp;constraint - in accordance with the SQL
          standard.
          <br />
          We can test that by running this code.
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={37}
            data-line-end={39}
          >
            SELECT NULL = NULL AS equal;{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={39} data-line-end={41}>
          The result is null.
          <br />
          Let’s do another test with an <code>upsert</code> in my case.
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={42}
            data-line-end={52}
          >
            INSERT INTO contact_person ( email, first_name, last_name,
            phone_number){"\n"}
            {"                    "}VALUES ('peter@avengers.com', 'Peter', 'Parker', '034132453'){"\n"}
            {"    "}ON CONFLICT (LOWER(email), LOWER(phone_number)){"\n"}
            {"    "}DO UPDATE{"\n"}
            {"    "}SET email = 'peter@avengers.com',{"\n"}
            {"        "}first_name = 'Peter',{"\n"}
            {"        "}last_name{"  "}= 'Smith',{"\n"}
            {"        "}phone_number = '034132453'{"\n"}
            {"    "}RETURNING id;{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={53} data-line-end={54}>
          The result is:
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>phone_number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
              peter@avengers.com
              </td>
              <td>Peter</td>
              <td>Smith</td>
              <td>034132453</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
              steve@avengers.com
              </td>
              <td>Steve</td>
              <td>[NULL]</td>
              <td>[NULL]</td>
            </tr>
          </tbody>
        </table>
        <p className="has-line-data" data-line-start={60} data-line-end={61}>
          Now I want to update Steve’s contact with the same operation:
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={63}
            data-line-end={73}
          >
            INSERT INTO contact_person ( email, first_name, last_name,
            phone_number){"\n"}
            {"                    "}VALUES ('steve@avengers.com', 'Steve', 'Roger', null){"\n"}
            {"    "}ON CONFLICT (LOWER(email), LOWER(phone_number)){"\n"}
            {"    "}DO UPDATE{"\n"}
            {"    "}SET email = 'steve@avengers.com',{"\n"}
            {"        "}first_name = 'Steve',{"\n"}
            {"        "}last_name{"  "}= 'Roger',{"\n"}
            {"        "}phone_number = null{"\n"}
            {"    "}RETURNING id;{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={74} data-line-end={75}>
          However, the result is not what I expected:
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>phone_number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
              peter@avengers.com
              </td>
              <td>Peter</td>
              <td>Smith</td>
              <td>034132453</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
              steve@avengers.com
              </td>
              <td>Steve</td>
              <td>[NULL]</td>
              <td>[NULL]</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
              steve@avengers.com
              </td>
              <td>Steve</td>
              <td>Roger</td>
              <td>[NULL]</td>
            </tr>
          </tbody>
        </table>
        <p className="has-line-data" data-line-start={82} data-line-end={83}>
          It’s supposed to update the row with id = 2.
        </p>
        <h2 className="code-line" data-line-start={84} data-line-end={86}>
          <a id="Solution_84" />
          Solution?
        </h2>
        <p className="has-line-data" data-line-start={87} data-line-end={89}>
          So far we all understand what’s causing the issue and creating
          redundant data to <code>contact_person</code> table. So what is the
          solution for this?
          <br />
          Thanks to StackExchange, I found 4 possible ways to deal with this
          issue
        </p>
        <h3 className="code-line" data-line-start={90} data-line-end={91}>
          <a id="For_Postgres_15_or_newer_version_90" />
          <strong>For Postgres 15 or newer version</strong>
        </h3>
        <ol>
          <li className="has-line-data" data-line-start={92} data-line-end={99}>
            <p
              className="has-line-data"
              data-line-start={92}
              data-line-end={93}
            >
              Postgres has a solution traight out of the box
            </p>
            <pre>
              <code
                className="has-line-data"
                data-line-start={95}
                data-line-end={98}
              >
                CREATE UNIQUE INDEX contact_person_email_phone_number_idx{"\n"}
                {"    "}ON contact_person (LOWER(email), LOWER(phone_number))
                NULLS NOT DISTINCT;{"\n"}
              </code>
            </pre>
          </li>
        </ol>
        <h3 className="code-line" data-line-start={99} data-line-end={100}>
          <a id="For_older_versions_99" />
          <strong>For older versions</strong>
        </h3>
        <ol start={2}>
          <li
            className="has-line-data"
            data-line-start={101}
            data-line-end={110}
          >
            <p
              className="has-line-data"
              data-line-start={101}
              data-line-end={102}
            >
              Create partial unique indexes
            </p>
            <pre>
              <code
                className="has-line-data"
                data-line-start={104}
                data-line-end={109}
              >
                CREATE UNIQUE INDEX contact_person_email_idx{"\n"}
                {"                                 "}ON
                contact_person(LOWER(email)) WHERE phone_number IS NULL;{"\n"}
                CREATE UNIQUE INDEX contact_person_phone_number_idx{"\n"}
                {"                                 "}ON
                contact_person(LOWER(phone_number)) WHERE email IS NULL;{"\n"}
              </code>
            </pre>
          </li>
          <li
            className="has-line-data"
            data-line-start={110}
            data-line-end={118}
          >
            <p
              className="has-line-data"
              data-line-start={110}
              data-line-end={111}
            >
              Create a unique index with <code>COALESCE</code>
            </p>
            <pre>
              <code
                className="has-line-data"
                data-line-start={113}
                data-line-end={117}
              >
                CREATE UNIQUE INDEX contact_person_email_phone_number_idx{"\n"}
                {"    "}ON contact_person (COALESCE(LOWER(email), ''),{"\n"}
                {"                       "}COALESCE(LOWER(phone_number), ''));
                {"\n"}
              </code>
            </pre>
          </li>
          <li
            className="has-line-data"
            data-line-start={118}
            data-line-end={120}
          >
            <p
              className="has-line-data"
              data-line-start={118}
              data-line-end={119}
            >
              Create a&nbsp;<code>UNIQUE</code>&nbsp;index or constraint based
              on a cheap and sufficiently unique hash value of the row (reduced
              to defining columns). (See this
              <a href="https://dba.stackexchange.com/questions/299098/why-doesnt-my-unique-constraint-trigger/299107#299107">
                {" "} post {" "}
              </a>
               for more information)
            </p>
          </li>
        </ol>
        <p className="has-line-data" data-line-start={120} data-line-end={122}>
          Each of these solutions has pros and cons that are discussed in 2
          resources I provide at the end of this blogs. If you’re interested in
          finding the best solution for you, you can look into those 2 URLs for
          more details.
          <br />
          Since the third solution is good enough for my case, I choose to
          implement it in my project.
        </p>
        <h3 className="code-line" data-line-start={123} data-line-end={124}>
          <a id="Result_123" />
          Result
        </h3>
        <p className="has-line-data" data-line-start={125} data-line-end={126}>
          Let’s continue to run this code to test my solution
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={128}
            data-line-end={134}
          >
            DELETE FROM contact_person WHERE id = 4;{"\n"}
            {"\n"}CREATE UNIQUE INDEX contact_person_email_phone_number_idx
            {"\n"}
            {"    "}ON contact_person (COALESCE(LOWER(email), ''),{"\n"}
            {"                       "}COALESCE(LOWER(phone_number), ''));{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={135} data-line-end={136}>
          The reason I need to delete the row with id = 4 is because the new
          unique index will consider row with id = 2 and id = 4 are duplicate.
          If I don’t delete one of these rows, I will get following error:
        </p>
        <blockquote>
          <p
            className="has-line-data"
            data-line-start={137}
            data-line-end={138}
          >
            SQL Error [23505]: ERROR: could not create unique index
            “contact_person_email_phone_number_idx” Detail: Key
            (COALESCE(lower(email), ‘’::text), COALESCE(lower(phone_number),
            ‘’::text))=(steve@avengers.com, ) is duplicated.
          </p>
        </blockquote>
        <p className="has-line-data" data-line-start={139} data-line-end={140}>
          Now if I run this code, I will expect the database to update the
          record with id = 2
        </p>
        <pre>
          <code
            className="has-line-data"
            data-line-start={142}
            data-line-end={152}
          >
            INSERT INTO contact_person ( email, first_name, last_name,
            phone_number){"\n"}
            {"                    "}VALUES ('steve@avengers.com', 'Steve', 'Roger', null){"\n"}
            {"    "}ON CONFLICT (COALESCE(LOWER(email), ''),
            COALESCE(LOWER(phone_number), '')){"\n"}
            {"    "}DO UPDATE{"\n"}
            {"    "}SET email = 'steve@avengers.com',{"\n"}
            {"        "}first_name = 'Steve',{"\n"}
            {"        "}last_name{"  "}= 'Roger',{"\n"}
            {"        "}phone_number = null{"\n"}
            {"    "}RETURNING id;{"\n"}
          </code>
        </pre>
        <p className="has-line-data" data-line-start={153} data-line-end={154}>
          And voila!
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>phone_number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
              peter@avengers.com
              </td>
              <td>Peter</td>
              <td>Smith</td>
              <td>034132453</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
              steve@avengers.com
              </td>
              <td>Steve</td>
              <td>Roger</td>
              <td>[NULL]</td>
            </tr>
          </tbody>
        </table>
        <p className="has-line-data" data-line-start={160} data-line-end={161}>
          <strong>Thanks for reading.</strong>
        </p>
        <h2 className="code-line" data-line-start={162} data-line-end={164}>
          <a id="Useful_resources_162" />
          Useful resources:
        </h2>
        <p className="has-line-data" data-line-start={165} data-line-end={167}>
          <a href="https://dba.stackexchange.com/questions/151431/postgresql-upsert-issue-with-null-values">
            https://dba.stackexchange.com/questions/151431/postgresql-upsert-issue-with-null-values
          </a>
          <br />
          <a href="https://dba.stackexchange.com/questions/299098/why-doesnt-my-unique-constraint-trigger/299107#299107">
            https://dba.stackexchange.com/questions/299098/why-doesnt-my-unique-constraint-trigger/299107#299107
          </a>
        </p>
      </div>
    );
  }
}
