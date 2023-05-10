import React, { Component } from "react";
import Navbar from "./navBar";
import About from "./about";
import Skills from "./skills";
import Hero from "./hero";
import Resume from "./resume";
import Blogs from "./blogs";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />

        <div id="main">
          <About />
          <Skills />
          <Resume />
          <Blogs />
        </div>
      </div>
    );
  }
}
