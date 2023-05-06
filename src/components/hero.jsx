import React, { Component } from "react";
import "../assets/vendor/aos/aos.css";

export default class hero extends Component {
  render() {
    return (
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div
          className="hero-container" // data-aos="fade-in"
        >
          <h1>Phat Vinh Ho</h1>
          <p>
            I'm a
            <span
              className="typed"
              data-typed-items="Developer, Data Scientist"
            />
          </p>
        </div>
      </section>
    );
  }
}
