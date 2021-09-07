import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Marche = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className=" p-0 mb-5">
          <img src="assets/about.png" style={{ width: "100%" }} />
        </Col>
        <Col className="marche p-0 mb-5">
          <p className="titreSectionMarche m-0 p-3 ">Notre Marché est Vaste </p>
          <p className="sousTitreSectionMarche ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit
            ipsam minima earum odio accusamus adipisci fugit perferendis tempore
            soluta, culpa porro sequi ipsa saepe dicta placeat iure suscipit
            blanditiis.
          </p>
          <div>
            <Button className="btnMarche">Plus d'informations</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Marche;
