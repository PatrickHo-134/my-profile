import Container from "react-bootstrap/Container";
import {
  BiUser,
  BiHome,
  BiFileBlank,
  BiBriefcase,
  BiCommentEdit,
  BiIdCard,
  BiMenu,
} from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect className="nav-menu fixed-top" expand="lg">
      <Container fluid>
        <Navbar.Toggle
          id="navbar-toggler"
          aria-controls="navbarScroll"
          data-target="navbarScroll"
        >
          <BiMenu />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link id="nav-link" href="#hero">
              <BiHome id="nav-link-icon" />
              <span>Home</span>
            </Nav.Link>

            <Nav.Link id="nav-link" href="#about">
              <BiUser id="nav-link-icon" />
              <span>About</span>
            </Nav.Link>

            <Nav.Link id="nav-link" href="#resume">
              <BiFileBlank id="nav-link-icon" />
              <span>Resume</span>
            </Nav.Link>

            <Nav.Link id="nav-link" href="#portfolio">
              <BiBriefcase id="nav-link-icon" />
              <span>Portfolio</span>
            </Nav.Link>

            <Nav.Link id="nav-link" href="#blogs">
              <BiCommentEdit id="nav-link-icon" />
              <span>Blogs</span>
            </Nav.Link>

            <Nav.Link id="nav-link" href="#contact">
              <BiIdCard id="nav-link-icon" />
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
