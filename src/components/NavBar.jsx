import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarComp() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Manjula Jadav</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
