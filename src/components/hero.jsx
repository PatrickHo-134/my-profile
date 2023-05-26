import React, { Component } from "react";
import Typist from "react-typist-component";

export default class hero extends Component {
  render() {
    return (
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>Hi! I'm Patrick</h1>
          <p>
            I'm a{" "}
            <Typist
              typingDelay={100}
              cursor={<span className="cursor">|</span>}
              loop={true}
              finishDelay={3000}
            >
              <span className="typed">Full-stack Software Developer</span>
            </Typist>
          </p>
        </div>
      </section>
    );
  }
}
