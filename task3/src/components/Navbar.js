import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
