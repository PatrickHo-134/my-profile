import { Component } from "react";

export default class Blog20230712 extends Component {
  render() {
    return (
      <div>
        <h1 className="code-line" data-line-start={0} data-line-end={1}>
          <a id="How_I_converted_my_profile_from_an_HTML_template_to_Reactjs_0" />
          How I converted my profile from an HTML template to React.js?
        </h1>
        <p className="has-line-data" data-line-start={2} data-line-end={3}>
          After investing two years into building my profile using an HTML
          template, I felt a strong desire to inject some excitement into my
          projects and further develop my skills in React. So I decided to
          convert it into a React project.
        </p>
        <p className="has-line-data" data-line-start={4} data-line-end={5}>
          Little did I anticipate the extent of effort and time it would take to
          bring this idea to fruition. Countless nights and weekends were
          dedicated to this endeavor. Nevertheless, the journey proved to be
          immensely rewarding, allowing me to not only incorporate enjoyable
          elements into my projects but also refine my proficiency in React.
        </p>
        <p className="has-line-data" data-line-start={6} data-line-end={7}>
          In this blog post, I aim to provide an overview of the process I
          followed and the lessons I learned throughout the journey.
          Additionally, in case you want to delve into more details of the
          process, I will share some resources that I used to bring my
          React-based profile to life. Hope you find them useful!
        </p>
        <h2 className="code-line" data-line-start={8} data-line-end={10}>
          <a id="A_brief_description_of_the_process_8" />A brief description of
          the process
        </h2>
        <h3 className="code-line" data-line-start={11} data-line-end={12}>
          <a id="1_Setting_up_Reactapp_11" />
          1. Setting up React-app
        </h3>
        <ul>
          <li className="has-line-data" data-line-start={12} data-line-end={13}>
            Install <code>npm</code> and <code>create-react-app</code> (if they
            are not installed yet).
          </li>
          <li className="has-line-data" data-line-start={13} data-line-end={14}>
            Start a new React project by running{" "}
            <code>npm create-react-app my-profile</code>
          </li>
          <li className="has-line-data" data-line-start={14} data-line-end={15}>
            Copy all resources including images, HTML, and CSS files from old
            directory to the new project.
          </li>
          <li className="has-line-data" data-line-start={15} data-line-end={17}>
            Start the React app on <code>localhost</code>. The app should run on{" "}
            <code>https://localhost:3000</code>
          </li>
        </ul>
        <h3 className="code-line" data-line-start={17} data-line-end={18}>
          <a id="2_Breakingdown_the_HTML_page_into_React_components_17" />
          2. Breaking-down the HTML page into React components
        </h3>
        <ul>
          <li className="has-line-data" data-line-start={18} data-line-end={19}>
            Convert all sections of the HTML template into React components
            including NavBar, Hero, About, Skills, Resume, Blogs, Certificates,
            Hobbies and Contact.
          </li>
          <li className="has-line-data" data-line-start={19} data-line-end={21}>
            Combine all those components to make the profile page.
          </li>
        </ul>
        <h3 className="code-line" data-line-start={21} data-line-end={22}>
          <a id="3_Deploy_Reactapp_to_Github_pages_21" />
          3. Deploy React-app to Github pages
        </h3>
        <ul>
          <li className="has-line-data" data-line-start={22} data-line-end={23}>
            <p
              className="has-line-data"
              data-line-start={22}
              data-line-end={23}
            >
              Install <code>gh-pages</code> package by running{" "}
              <code>npm install gh-pages</code>
            </p>
          </li>
          <li className="has-line-data" data-line-start={23} data-line-end={36}>
            <p
              className="has-line-data"
              data-line-start={23}
              data-line-end={24}
            >
              Make changes to <code>package.json</code> file.
            </p>
            <ul>
              <li
                className="has-line-data"
                data-line-start={24}
                data-line-end={25}
              >
                Add the <code>homepage</code> field — value will be in the
                following format{" "}
                <code>
                  https://{"{"}github_id{"}"}.github.io/{"{"}github_repo{"}"}
                </code>
              </li>
              <li
                className="has-line-data"
                data-line-start={25}
                data-line-end={27}
              >
                Add <code>predeploy</code> and <code>deploy</code> fields under{" "}
                <code>scripts</code>
              </li>
            </ul>
            <pre>
              <code
                className="has-line-data"
                data-line-start={28}
                data-line-end={35}
              >
                {"{"}... {"\n"}
                {"    "}"scripts": {"{"} ... {"\n"}
                {"                "}"predeploy": "yarn run build", {"\n"}
                {"                "}"deploy": "gh-pages -d build" {"}"},{"\n"}{" "}
                ...{"\n"}
                {"}"}
                {"\n"}
              </code>
            </pre>
          </li>
          <li className="has-line-data" data-line-start={36} data-line-end={38}>
            <p
              className="has-line-data"
              data-line-start={36}
              data-line-end={37}
            >
              In a terminal, run <code>npm run deploy</code> and the app will be
              deployed to Github. <strong>Note:</strong> run this step to
              re-deploy new changes of the app.
            </p>
          </li>
        </ul>
        <h3 className="code-line" data-line-start={38} data-line-end={39}>
          <a id="4_A_few_additional_things_that_I_did_in_this_project_38" />
          4. A few additional things that I did in this project
        </h3>
        <ul>
          <li className="has-line-data" data-line-start={40} data-line-end={41}>
            Use <code>react-router-dom</code> to make the app redirect users to
            different blogs.
          </li>
          <li className="has-line-data" data-line-start={41} data-line-end={42}>
            Add <code>react-bootstrap</code> and replace the old Navbar with
            React Bootstrap’s components.
          </li>
          <li className="has-line-data" data-line-start={42} data-line-end={44}>
            Re-create some cool effects like the original project by using some
            external packages such as <code>react-typist-component</code>
          </li>
        </ul>
        <h2 className="code-line" data-line-start={44} data-line-end={46}>
          <a id="Resources_that_I_used_for_this_project_44" />
          Resources that I used for this project:
        </h2>
        <p className="has-line-data" data-line-start={47} data-line-end={48}>
          These are 2 articles that I use to convert my profile from an HTML
          template to a React.js project:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={48} data-line-end={49}>
            <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/">
              How to create your portfolio website using React.js
            </a>{" "}
            - This is the main source that I use for this project.
          </li>
          <li className="has-line-data" data-line-start={49} data-line-end={50}>
            <a href="https://medium.com/tech-that-works/converting-templates-to-react-project-b737b0456fb8">
              Converting Templates to React Project
            </a>{" "}
            - Additional resource which provides more details and coincidently
            it uses the same HTML template the I used for my original profile.
          </li>
        </ul>
      </div>
    );
  }
}
