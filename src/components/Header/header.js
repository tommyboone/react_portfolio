import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon, MDBAnimation } from "mdbreact";
import "./header.css";

function Header() {
  return (
    <MDBAnimation  type="fadeIn" className="slow sticky-top">
      <Navbar className="navbar fluid" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            src="./images/Profile_Pic.jpg"
            alt="Tommy Boone Profile Pic"
            className="profilePic"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navlink" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navlink" href="/projects">
            Portfolio
          </Nav.Link>
          <Nav.Link className="navlink" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link className="navlink" href="./images/Tommy-Boone-Resumé.pdf" target="_blank">
            Resumé
          </Nav.Link>
        </Nav>
        <Form className="form inline my-2 my-lg-0">
          <a href="https://github.com/tommyboone">
            {" "}
            <MDBIcon
              className="icon"
              fab
              icon="github-square fa-5x"
              style={{ cursor: "pointer" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/tommy-boone-55b57ab7/">
            {" "}
            <MDBIcon
              className="icon"
              fab
              icon="linkedin fa-5x"
              style={{ cursor: "pointer" }}
            />
          </a>
        </Form>
      </Navbar>
    </MDBAnimation>
  );
}

export default Header;
