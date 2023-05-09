import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="../assets/img/myProfile2.JPG"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Phat Vinh Ho</a>
            </h1>
            <h1 className="text-light">
              <a>(Patrick)</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.linkedin.com/in/phat-vinh-ho-1304/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
          <nav className="nav-menu">
            <ul>
              <li className="active">
                <a href="#hero">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <i className="bx bx-book-content" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#blogs">
                  <i className="bx bx-server" /> Blogs
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="bx bx-envelope" /> Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
          <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className="icofont-navigation-menu" />
          </button>
        </div>
      </header>
    );
  }
}
