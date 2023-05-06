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
                    Junior Developer with proven experience in start-up
                    environment and a passion for developing data-driven
                    products. Experienced in functional and object-oriented
                    programming with abilities to implement full-stack web
                    development and data analytics. Quickly learn and master new
                    technologies, successful working in both team and
                    self-directed settings.
                  </em>
                </p>
                <ul>
                  <li>Kingsgrove, NSW 2208, Australia</li>
                  <li>(+61) 410 978 468</li>
                  <li>phat.hovinh.13@gmail.com</li>
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
                <h4>Software Developer</h4>
                <h5>June 2020 - Present</h5>
                <p>
                  <em>
                    <strong>Gojee App</strong>, Sydney, New South Wales{" "}
                  </em>
                </p>
                <ul>
                  <li>
                    Worked in a team of 5 people to build a scalable single-page
                    web app that serves internal and external users.
                  </li>
                  <li>
                    Maintained a backend backed by a PostgreSQL database by
                    analysing and ensuring performance of queries.
                  </li>
                  <li>
                    Developed APIs using Clojure to handle concurrent requests
                    from a Clojurescript front-end.
                  </li>
                  <li>Built UI components with Clojurescript and React.js</li>
                  <li>Reviewed code and tested software for bugs.</li>
                  <li>
                    Deployed the application with AWS services including S3,
                    RDS, Elastic Beanstalk and EC2.
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
