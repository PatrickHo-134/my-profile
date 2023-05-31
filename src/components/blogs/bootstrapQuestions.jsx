import { Component } from "react";

export default class Blog20220623 extends Component {
  render() {
    return (
      <div id="preview">
        <h1 className="code-line" data-line-start={0} data-line-end={1}>
          <a id="Common_questions_when_working_with_Bootstrap_and_CSS_0" href="true"/>
          Common questions when working with Bootstrap (and CSS)
        </h1>
        <p className="has-line-data" data-line-start={1} data-line-end={2}>
          <a href>#Bootstrap</a> <a href>#CSS</a> <a href>#WebDevelopment</a>
        </p>
        <p className="has-line-data" data-line-start={3} data-line-end={4}>
          As a web developer, I had to google these questions over and over
          again when working with Bootstrap. Thus, I collect all of the useful
          resources and put them into this note. Hopefully, you may find them
          useful :)
        </p>
        <h2 className="code-line" data-line-start={5} data-line-end={6}>
          <a id="1_What_are_the_rules_of_Grid_Layout_5" />
          1. What are the rules of Grid Layout?
        </h2>
        <p className="has-line-data" data-line-start={6} data-line-end={7}>
          The Grid Layout has 3 fundamental rules:
        </p>
        <ol>
          <li className="has-line-data" data-line-start={7} data-line-end={8}>
            Columns must be the immediate child of a Row.
          </li>
          <li className="has-line-data" data-line-start={8} data-line-end={9}>
            Rows are only used to contain Columns, nothing else.
          </li>
          <li className="has-line-data" data-line-start={9} data-line-end={11}>
            Rows should be placed inside a Container.
          </li>
        </ol>
        <p className="has-line-data" data-line-start={11} data-line-end={12}>
          Click{" "}
          <a href="http://bootstrap.themes.guide/how-to-use-bootstrap-grid.html#gridrules:~:text=undesirable%20horizontal%20scroll.-,Rows%20%26%20Columns,-Notice%20that%20I%27ve">
            here
          </a>
          for more explanation on Row &amp; Columns.
        </p>
        <h2 className="code-line" data-line-start={13} data-line-end={14}>
          <a id="2_What_are_Containers_13" />
          2. What are Containers?
        </h2>
        <p className="has-line-data" data-line-start={14} data-line-end={15}>
          <a href="https://getbootstrap.com/docs/5.1/layout/containers/">
            Containers
          </a>{" "}
          are a fundamental building block when using grid system in Bootstrap.
          They contain, pad, and (sometimes) center the content within them.
          While containers can be nested, most layouts do not require a nested
          container. Bootstrap comes with three different containers:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={15} data-line-end={16}>
            <code>.container</code>, which sets a max-width at each responsive
            breakpoint
          </li>
          <li className="has-line-data" data-line-start={16} data-line-end={17}>
            <code>.container-fluid</code>, which is width: 100% at all
            breakpoints
          </li>
          <li className="has-line-data" data-line-start={17} data-line-end={19}>
            <code>
              .container-{"{"}breakpoint{"}"}
            </code>
            , which is width: 100% until the specified breakpoint
          </li>
        </ul>
        <p className="has-line-data" data-line-start={19} data-line-end={22}>
          Click{" "}
          <a href="https://getbootstrap.com/docs/4.6/layout/overview/#containers">
            here
          </a>{" "}
          to see how each container’s max-width compares to the original{" "}
          <code>.container</code> and <code>.container-fluid</code> across each
          breakpoint.
          <br />
          It is also useful to look at{" "}
          <a href="https://getbootstrap.com/docs/5.1/examples/grid/#containers">
            Bootstrap Grid Example
          </a>{" "}
          to see them in action.
          <br />
          <a href="https://roylee0704.github.io/react-flexbox-grid/">
            React Flexbox Grid
          </a>{" "}
          can be used to make websites responsive. It is derived from the grid
          system followed by Bootstrap.
        </p>
        <h2 className="code-line" data-line-start={23} data-line-end={24}>
          <a id="3_What_are_Responsive_Breakpoints_23" />
          3. What are Responsive Breakpoints?
        </h2>
        <p className="has-line-data" data-line-start={24} data-line-end={26}>
          <a href="https://getbootstrap.com/docs/4.6/layout/overview/#responsive-breakpoints">
            Breakpoints in Bootstrap
          </a>{" "}
          are mostly based on minimum viewport widths and allow us to scale up
          elements as the viewport changes.
          <br />
          Bootstrap primarily uses the following media query ranges — or
          breakpoints.
        </p>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Syntax</th>
              <th>Dimension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-small</td>
              <td>none since this is the default in Bootstrap</td>
              <td>&lt;576px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td>sm</td>
              <td>&gt;=576px</td>
            </tr>
            <tr>
              <td>Medium</td>
              <td>md</td>
              <td>&gt;=768px</td>
            </tr>
            <tr>
              <td>Large</td>
              <td>lg</td>
              <td>&gt;=992</td>
            </tr>
            <tr>
              <td>Extra-large</td>
              <td>xl</td>
              <td>&gt;=1200px</td>
            </tr>
            <tr>
              <td>Extra Extra Large (only in Bootstrap 5)</td>
              <td>xxl</td>
              <td>&gt;=1400px</td>
            </tr>
          </tbody>
        </table>
        <h2 className="code-line" data-line-start={35} data-line-end={36}>
          <a id="4_Why_should_you_use_rem_instead_of_px_for_setting_margin_and_padding_35" />
          4. Why should you use
          <strong>rem</strong> instead of <strong>px</strong> for setting margin
          and padding?
        </h2>
        <ul>
          <li className="has-line-data" data-line-start={36} data-line-end={37}>
            <code>rem</code> is a relative unit while
            <code>px</code> is a fixed unit. <code>rem</code> scales better than{" "}
            <code>px</code>. If you want a fixed-size component, then you should
            use <code>px</code>.
          </li>
          <li className="has-line-data" data-line-start={37} data-line-end={38}>
            Along with <code>rem</code>, there is also
            <code>em</code>. Click{" "}
            <a href="https://www.geeksforgeeks.org/difference-between-em-and-rem-units-in-css/">
              here
            </a>{" "}
            to understand the difference between <code>rem</code> and{" "}
            <code>em</code>.
          </li>
          <li className="has-line-data" data-line-start={38} data-line-end={39}>
            <code>rem</code> is recommended when setting margin and padding
            because <code>em</code> has{" "}
            <a href="https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css#:~:text=Sizes%20specified%20in%20ems%20are%20relative%20to%20the%20parent%20element.%20This%20leads%20to%20the%20em%27s%20%22compounding%20problem%22%20where%20nested%20elements%20get%20progressively%20larger%20or%20smaller.%20For%20example%3A">
              this problem
            </a>
            .
          </li>
          <li className="has-line-data" data-line-start={39} data-line-end={43}>
            Bootstrap has utility classes for setting margin and padding. They
            help create{" "}
            <a href="https://getbootstrap.com/docs/4.0/utilities/spacing/">
              responsive spacing
            </a>{" "}
            when we want to modify an element’s appearance. So instead of having
            inline styles such as <code>margin-top: 8px</code>, we can add{" "}
            <code>mt-2</code> to the class of an element.
            <ul>
              <li
                className="has-line-data"
                data-line-start={40}
                data-line-end={41}
              >
                Having trouble understanding
                <code>$spacer</code> in this{" "}
                <a href="https://getbootstrap.com/docs/4.0/utilities/spacing">
                  link
                </a>
                , click{" "}
                <a href="https://stackoverflow.com/questions/48971732/unable-to-undertstand-usage-of-spacer-in-bootstrap-4">
                  here
                </a>
              </li>
              <li
                className="has-line-data"
                data-line-start={41}
                data-line-end={43}
              >
                Convert <code>px</code> to
                <code>rem</code> and vice versa, click{" "}
                <a href="https://nekocalc.com/px-to-rem-converter">here</a>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="code-line" data-line-start={43} data-line-end={44}>
          <a id="5_How_to_align_elements_horizontallyvertically_43" />
          5. How to align elements horizontally/vertically?
        </h2>
        <p className="has-line-data" data-line-start={44} data-line-end={45}>
          You should try one of these approaches until it works for you:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={45} data-line-end={48}>
            Using Bootstrap{" "}
            <a href="https://getbootstrap.com/docs/4.1/utilities/vertical-align/">
              vertical-alignment
            </a>{" "}
            utilities such as <code>.align-baseline</code>,{" "}
            <code>.align-top</code>, <code>.align-middle</code>,
            <code>.align-bottom</code>, <code>.align-text-bottom</code>, and{" "}
            <code>.align-text-top</code>.
            <ul>
              <li
                className="has-line-data"
                data-line-start={46}
                data-line-end={47}
              >
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
                  Demo
                </a>
              </li>
              <li
                className="has-line-data"
                data-line-start={47}
                data-line-end={48}
              >
                <strong>Note</strong>: vertical-align only affects inline,
                inline-block, inline-table, and table cell elements
              </li>
            </ul>
          </li>
          <li className="has-line-data" data-line-start={48} data-line-end={50}>
            Using <code>margin: auto;</code> to horizontally center a block
            element (like &lt;div&gt;)
            <ul>
              <li
                className="has-line-data"
                data-line-start={49}
                data-line-end={50}
              >
                <strong>Note</strong>: Center aligning has no effect if the
                width property is not set (or set to 100%).
              </li>
            </ul>
          </li>
          <li className="has-line-data" data-line-start={50} data-line-end={53}>
            Using <code>text-align: center;</code> to center the text inside an
            element (or <code>text-align: left;</code> or{" "}
            <code>text-align: right;</code>)
            <ul>
              <li
                className="has-line-data"
                data-line-start={51}
                data-line-end={52}
              >
                More on{" "}
                <a href="https://www.w3schools.com/css/css_text_align.asp">
                  CSS Text Alignment
                </a>
              </li>
              <li
                className="has-line-data"
                data-line-start={52}
                data-line-end={53}
              >
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">
                  Demo
                </a>
              </li>
            </ul>
          </li>
          <li className="has-line-data" data-line-start={53} data-line-end={60}>
            <a href="https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap-4/42252877#42252877">
              Vertical align center in Bootstrap
            </a>{" "}
            with
            <ul>
              <li
                className="has-line-data"
                data-line-start={54}
                data-line-end={55}
              >
                <code>align-self-center</code> (
                <a href="https://www.codeply.com/go/fFqaDe5Oey">demo</a>)
              </li>
              <li
                className="has-line-data"
                data-line-start={55}
                data-line-end={56}
              >
                <code>align-items-center</code>(
                <a href="https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_flex-justify&stacked=h">
                  demo
                </a>
                )
              </li>
              <li
                className="has-line-data"
                data-line-start={56}
                data-line-end={57}
              >
                <code>justify-content-center</code> (
                <a href="https://www.codeply.com/go/3gySSEe7nd">demo</a>)
              </li>
              <li
                className="has-line-data"
                data-line-start={57}
                data-line-end={58}
              >
                <code>my-auto</code>(
                <a href="https://www.codeply.com/go/akn5BYxQwn">demo</a>)
              </li>
              <li
                className="has-line-data"
                data-line-start={58}
                data-line-end={60}
              >
                <a href="https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap-4/42252877#42252877">
                  more
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="code-line" data-line-start={60} data-line-end={61}>
          <a id="6_How_to_force_elements_to_stay_on_the_same_row_60" />
          6. How to force elements to stay on the same row?
        </h2>
        <p className="has-line-data" data-line-start={61} data-line-end={63}>
          Using <code>display: inline-block</code> by setting{" "}
          <code>white-space: nowrap</code> on a parent element, and{" "}
          <code>display: inline-block</code> on all child elements. More on{" "}
          <a href="https://www.geeksforgeeks.org/how-to-prevent-inline-block-divs-from-wrapping/?ref=lbp">
            how to prevent inline-block divs from wrapping
          </a>
          .<br />
          To understand the difference between <code>
            display: inline
          </code>, <code>display: inline-block</code> and
          <code>display: block</code>, click{" "}
          <a href="https://www.w3schools.com/css/css_inline-block.asp#:~:text=Compared%20to%20display%3A%20inline%2C%20the%20major%20difference%20is%20that%20display%3A%20inline%2Dblock%20allows%20to%20set%20a%20width%20and%20height%20on%20the%20element.">
            here
          </a>
          . For a demo, click{" "}
          <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1">
            here
          </a>
          .
        </p>
        <h2 className="code-line" data-line-start={64} data-line-end={65}>
          <a id="Useful_resources_64" />
          Useful resources:
        </h2>
        <ul>
          <li className="has-line-data" data-line-start={65} data-line-end={66}>
            <a href="https://getbootstrap.com/docs/5.2/examples/">
              Bootstrap examples
            </a>
          </li>
          <li className="has-line-data" data-line-start={66} data-line-end={67}>
            <a href="https://roylee0704.github.io/react-flexbox-grid/">
              React Flexbox Grid
            </a>
          </li>
          <li className="has-line-data" data-line-start={67} data-line-end={68}>
            <a href="https://www.w3schools.com/css/css_align.asp">
              CSS Layout - Horizontal &amp; Vertical Align
            </a>
          </li>
          <li className="has-line-data" data-line-start={68} data-line-end={69}>
            <a href="https://www.interviewbit.com/bootstrap-interview-questions/#bootstrap-questions-for-freshers">
              Bootstrap Interview Questions
            </a>
          </li>
          <li className="has-line-data" data-line-start={69} data-line-end={70}>
            <a href="https://www.edureka.co/blog/interview-questions/bootstrap-interview-questions/">
              Top 45 Bootstrap Interview Questions and Answers in 2022
            </a>
          </li>
          <li className="has-line-data" data-line-start={70} data-line-end={71}>
            <a href="http://bootstrap.themes.guide/how-to-use-bootstrap-grid.html">
              How to Use the Bootstrap Grid the Right Way
            </a>
          </li>
          <li className="has-line-data" data-line-start={71} data-line-end={72}>
            <a href="https://www.designcise.com/web/tutorial/how-to-force-html-elements-to-stay-on-the-same-line">
              How to force html elements stay on the same line
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
