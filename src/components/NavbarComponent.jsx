import React from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Alquiler de Vacaciones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <Nav.Link>Home</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
