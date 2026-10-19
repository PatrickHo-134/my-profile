import React, { Component } from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Phat Vinh Ho (Patrick)</h4>
                <p>
                  <em>
                    Fullstack Developer with proven experience in start-up
                    environment and a passion for developing data-driven
                    products. Experienced in functional and object-oriented
                    programming with abilities to implement full-stack web
                    development and data analytics. Quickly learn and master new
                    technologies, successful working in both team and
                    self-directed settings.
                  </em>
                </p>
                <ul>
                  <li>Bexley North, NSW 2207, Australia</li>
                  <li>(+61) 410 978 468</li>
                  <li>patrickho1304@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>
                  Master of Data Science - Stream: Advanced Data Analytics
                </h4>
                <h5>2017 - 2019</h5>
                <p>
                  <em>Monash University, Melbourne, Australia</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Business (Marketing) - Minor: Finance</h4>
                <h5>2011 - 2015</h5>
                <p>
                  <em>RMIT University, Ho Chi Minh City, Vietnam</em>
                </p>
              </div>

              <h3 className="resume-title">Coursework</h3>
              <div className="resume-item">
                <ul>
                  <li>Algorithms and Data Structures</li>
                  <li>Introduction to Databases</li>
                  <li>Data Analysis Algorithms</li>
                  <li>Modelling for Data Analysis</li>
                  <li>Data Wrangling</li>
                  <li>Data Visualisation</li>
                  <li>Data Processing for Big Data</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>February 2025 - Present</h5>
                <p>
                  <em>
                    <strong>Tata Consultancy Services</strong>, Sydney, New
                    South Wales{" "}
                  </em>
                </p>
                <ul>
                  <li>
                    Developed and supported scalable serverless solutions
                    leveraging GCP Cloud Run, processing high- volume online
                    orders for Australia’s largest supermarket chain within a
                    robust microservices architecture.
                  </li>
                  <li>
                    Designed and maintained RESTful APIs integrated through
                    Apigee API Management, ensuring secure communication between
                    internal and external services.
                  </li>
                  <li>
                    Utilised GCP Cloud Monitoring to proactively identify,
                    troubleshoot, and resolve application performance and
                    reliability issues in production environments.
                  </li>
                  <li>
                    Developed backend features across a complex multi-language
                    codebase (Go, Clojure, Python, Rust) and maintained
                    automated data pipelines utilizing data build tool (dbt).
                  </li>
                  <li>
                    Championed software engineering best practices by actively
                    participating in code reviews, technical decision making,
                    and authoring technical documentation to deliver secure,
                    maintainable outcomes.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Developer</h4>
                <h5>June 2020 - February 2025</h5>
                <p>
                  <em>
                    <strong>Gojee</strong>, Sydney, New South Wales{" "}
                  </em>
                </p>
                <ul>
                  <li>
                    Developed and maintained RESTful APIs and scalable
                    single-page web applications for 30+ small and medium-sized
                    businesses, ensuring robust integration between frontend
                    components and backend services.
                  </li>
                  <li>
                    Implemented and managed CI/CD deployment pipelines using
                    Bitbucket to automate releases and support secure software
                    delivery.
                  </li>
                  <li>
                    Managed application deployments on AWS S3, RDS, EC2, and
                    Elastic Beanstalk.
                  </li>
                  <li>
                    Collaborated effectively within a 5-person Agile delivery
                    team to design, build, document, review, and release
                    production-ready software solutions.
                  </li>
                  <li>
                    Designed and optimized relational data models and access
                    patterns using PostgreSQL.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>September 2019 - March 2020</h5>
                <p>
                  <em>
                    <strong>MotionAI</strong>, Melbourne, Victoria{" "}
                  </em>
                </p>
                <ul>
                  <li>
                    Developed website backend with Node.js, Express.js and
                    PostgreSQL.
                  </li>
                  <li>
                    Maintained and developed frontend’s core features with
                    React.js
                  </li>
                  <li>
                    Implemented and evaluated machine learning algorithms in
                    computer vision (intensively deployed OpenCV) and neural
                    networks to determine application viability.
                  </li>
                  <li>
                    Deployed machine learning algorithms in NVIDIA Jetson Nano.
                  </li>
                  <li>
                    Identified new problem areas and researched technical
                    details to build innovative products and solutions.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Data Analyst</h4>
                <h5> March 2019 - June 2019</h5>
                <p>
                  <em>
                    <strong>Monash Industry Experience Project</strong>,
                    Melbourne, Victoria
                  </em>
                </p>
                <ul>
                  <li>
                    Collaborated with a multi-cultural team to discuss solutions
                    for tackling traffic problems in Melbourne using VicRoads's
                    open data.
                  </li>
                  <li>
                    Analysed large amounts of data to find patterns and predict
                    the availability of car parks in busy suburbs using Python
                    and Spark.
                  </li>
                  <li>
                    Collaborated with software developers on operational support
                    tasks to model importance of group goals following agile
                    methodologies.
                  </li>
                  <li>
                    Designed a user interface for prototype using Adobe XD.
                  </li>
                  <li>
                    Communicated with users and industry mentors to collect
                    feedback and work on improvements for each iteration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
