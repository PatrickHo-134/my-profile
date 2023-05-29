import React, { Component } from "react";
import NavBar from "./navBar";
import About from "./about";
import Skills from "./skills";
import Hero from "./hero";
import Resume from "./resume";
import Blogs from "./blogs";
import Certificates from "./certificates";
import Contact from "./contact";
import Hobbies from "./hobbies";
import Projects from "./projects";

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />

        <div id="main">
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Blogs />
          <Certificates />
          <Hobbies />
          <Contact />
        </div>
      </div>
    );
  }
}
