import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

function Header() {
  return (
    <Navbar bg="info" data-bs-theme="light" className="p-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3">Travel Journal</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/inspiration" className="fs-5">Inspiration</Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="fs-5">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/agencies" className="fs-5">Agencies</Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to="/login" className="fs-5">Log in</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;