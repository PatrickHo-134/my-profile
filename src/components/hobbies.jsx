import { Component } from "react";

export default class Hobbies extends Component {
  render() {
    return (
      <section id="hobbies" className="hobbies">
        <div className="container">
          <div className="section-title">
            <h2>Hobbies</h2>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-football" />
                <p>
                  <strong>Football</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-travelling" />
                <p>
                  <strong>Travelling</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-tools-alt-2" />
                <p>
                  <strong>Exploring new technologies</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-book" />
                <p>
                  <strong>Reading</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
