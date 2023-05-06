import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";

function SkillProgressBar({ name, progressValue }) {
  return (
    <div className="progress">
      <span className="skill">
        {name}
        <i className="val">{progressValue}%</i>
      </span>
      <div className="progress progress-bar-wrap">
        <ProgressBar now={progressValue} />
      </div>
    </div>
  );
}

export default class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          {/* ======= Programming Section ======= */}
          <div className="section-title">
            <h3>Programming Skills</h3>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <SkillProgressBar name="Python" progressValue={80} />
              <SkillProgressBar
                name="Clojure / Clojurescripts"
                progressValue={90}
              />
              <SkillProgressBar name="Javascript" progressValue={70} />
              <SkillProgressBar name="R" progressValue={50} />
            </div>

            <div className="col-lg-6">
              <SkillProgressBar
                name="HTML5 / CSS4 / Bootstrap4"
                progressValue={70}
              />
              <SkillProgressBar
                name="Git / Github / Jira / Bitbucket"
                progressValue={70}
              />
              <SkillProgressBar name="SQL (PostgreSQL)" progressValue={80} />
            </div>
          </div>

          <br />

          {/* ======= Development Section ======= */}
          <div className="section-title">
            <h3>Development Skills</h3>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <SkillProgressBar name="React.js" progressValue={70} />
              <SkillProgressBar name="Node.js" progressValue={50} />
              <SkillProgressBar name="Django" progressValue={70} />
            </div>
            <div className="col-lg-6">
              <SkillProgressBar
                name="AWS / Heroku / Docker"
                progressValue={70}
              />
              <SkillProgressBar
                name="Agile Workflow Process"
                progressValue={80}
              />
            </div>
          </div>

          <br />

          {/* ======= Data Science Section ======= */}
          <div className="section-title">
            <h3>Data Science Skills</h3>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Data mining and statistical analysis<i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Data wrangling and predictive modelling
                  <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Data visualisation and reporting<i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Azure Machine Learning Studio and HDInsight
                  <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Machine learning / Deep Learning<i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Image Processing / Natural Language Processing
                  <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Algorithms and data structures<i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* ======= Additional skills ======= */}
          <div className="section-title">
            <h3>Additional Skills</h3>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  UI Design<i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Photoshop / Illustrator <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Teamwork<i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Problem Solving<i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Time Management<i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
