import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <p className="titreContact">Tous Savoir sur Nous</p>
          <p className="soustitreContact">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            excepturi voluptas veniam illum assumenda doloremque nostrum iste
            dolor harum in expedita beatae molestiae hic temporibus, tempore
            dolore enim debitis vel!
          </p>
        </Col>
        <Col md={2}>
          <p className="titreContact">Produits</p>
          <p className="soustitreContact">Kit de pommade Ecliassissant</p>
          <p className="soustitreContact">kit de beurre de Karité</p>
        </Col>
        <Col md={2}>
          <p className="titreContact">salons</p>
          <p className="soustitreContact">Salon de Cocody</p>
          <p className="soustitreContact">Salon de Yopougon</p>
          <p className="soustitreContact">Salon d'Abobo</p>
        </Col>
        <Col md={2}>
          <p className="titreContact">Infos</p>
          <p className="soustitreContact">Cocody Angré 8ème Tranche</p>
          <p className="soustitreContact">+00 225 02 19 31 11</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
