import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              A data science enthusiast and a programmer who loves to build
              data-driven products. I am detail-oriented and a team player who
              enjoys working in a team to tackle challenging problems and create
              fascinating software.
            </p>
            <br />
            <p>What I can bring to the table:</p>
            <ul>
              <li>
                <strong>Full stack development: </strong>I have hands-on
                experience in building and designing interface for different
                applications including websites and mobile apps.
              </li>
              <li>
                <strong>Data science: </strong>I own a Master degree in Data
                Science and have gone through many data science competitions
                which helped me gain crucial understanding and skills in image
                processing, natural language processing and applying predictive
                modelling on different kinds of data.
              </li>
            </ul>
            <br />
            <p>
              As a Junior Developer, I try to learn and gain as much exposure as
              possible to all aspects of software engineering. In my free time,
              I also write blogs about things that I have learned and done. Head
              toward my portfolio to see what I am working on!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img
                src={require("../assets/img/myProfile.JPG")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Phone:</strong> +61 410 978 468
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>City:</strong> Sydney, Australia
                    </li>

                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Email:</strong> patrickho1304@gmail.com
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Degree:</strong> Master of Data Science
                    </li>

                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>LinkedIn:</strong>{" "}
                      <a href="https://www.linkedin.com/in/phat-vinh-ho-1304/">
                        Phat Vinh Ho
                      </a>
                    </li>

                    <li>
                      <i className="icofont-rounded-right"></i>
                      <strong>Other Website:</strong>{" "}
                      <a href="https://patrickhoo.wixsite.com/diveindatascience">
                        My Data Science Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
