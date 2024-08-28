import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Header() {
  return (
    <Navbar bg="info" data-bs-theme="light" className="p-4">
    <Container>
      <Navbar.Brand href="#home" className="fs-3">Travel Journal</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#inspiration" className="fs-5">Inspiration</Nav.Link>
        <Nav.Link href="#gallery" className="fs-5">Gallery</Nav.Link>
        <Nav.Link href="#agencies" className="fs-5">Agencies</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
