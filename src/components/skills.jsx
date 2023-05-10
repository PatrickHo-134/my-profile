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
              <SkillProgressBar
                name="Data mining and statistical analysis"
                progressValue={80}
              />

              <SkillProgressBar
                name="Data wrangling and predictive modelling"
                progressValue={90}
              />

              <SkillProgressBar
                name="Data visualisation and reporting"
                progressValue={90}
              />

              <SkillProgressBar
                name="Azure Machine Learning Studio and HDInsight"
                progressValue={50}
              />
            </div>
            <div className="col-lg-6">
              <SkillProgressBar
                name="Machine learning / Deep Learning"
                progressValue={70}
              />

              <SkillProgressBar
                name="Image Processing / Natural Language Processing"
                progressValue={70}
              />

              <SkillProgressBar
                name="Algorithms and data structures"
                progressValue={80}
              />
            </div>
          </div>
          <br />
          {/* ======= Additional skills ======= */}
          <div className="section-title">
            <h3>Additional Skills</h3>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <SkillProgressBar name="UI Design" progressValue={60} />

              <SkillProgressBar
                name="Photoshop / Illustrator"
                progressValue={60}
              />

              <SkillProgressBar name="Teamwork" progressValue={90} />
            </div>

            <div className="col-lg-6">
              <SkillProgressBar name="Problem Solving" progressValue={80} />

              <SkillProgressBar name="Time Management" progressValue={80} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
