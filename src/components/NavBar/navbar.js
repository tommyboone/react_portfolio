import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from "mdbreact";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar sticky="top" className="navbar" bg="light" variant="light">
      <Navbar.Brand href="#home">Tommy Boone</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Portfolio</Nav.Link>
        <Nav.Link href="#resumé">Resumé</Nav.Link>
      </Nav>
      <Form className="form inline my-2 my-lg-0">
        <a href="https://github.com/tommyboone">
          {" "}
          <MDBIcon
            className="icon"
            fab
            icon="github-square fa-4x"
            style={{ cursor: "pointer" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/tommy-boone-55b57ab7/">
          {" "}
          <MDBIcon
            className="icon"
            fab
            icon="linkedin fa-4x"
            style={{ cursor: "pointer" }}
          />
        </a>
      </Form>
    </Navbar>
  );
}

export default NavBar;
