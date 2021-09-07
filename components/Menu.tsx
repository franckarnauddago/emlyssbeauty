import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Menu = ({ nbreCmd }) => {
  return (
    <Container>
      <Navbar variant="light" fixed="top" bg="light">
        <Navbar.Brand href="#home">Emlyss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#pricing">Salons</Nav.Link>
            <Nav.Link href="#features">Produits</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="m-0 mr-2">Mes Commandes</p>
            <Button variant="dark">{nbreCmd}</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Menu;
