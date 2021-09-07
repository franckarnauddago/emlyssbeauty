import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DataSalon } from "../utils/data";

const Salon = ({ onPress }) => {
  return (
    <Container>
      <div className="containerTitreSalon">
        <div style={{ width: "50%" }}>
          <p className="titreSectionSalon mb-2  ">Nos differents Produits</p>
          <p className="secondtitreSectionSalon mb-2  ">
            Achetez, Utilisez & Profitez
          </p>
          <p className="sousTitreSectionSalon ">
            Utilisez nos mêches très efficaces et pour vos soins , Nous sommes
            aussi présents.
          </p>
        </div>
      </div>
      <Row>
        {DataSalon.map((card) => (
          <Col className="salon p-0 mb-5">
            <div className="viewPoint">
              <img
                src={card.sourceImg}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={onPress}
              />
            </div>

            <div className="hidePoint">
              <p className="textSalon mt-2 p-0">{card.titre} </p>
              <p className="prixSalon ">{card.prix} </p>
              <Button className="btnHidePoint">Ajoutez Au Panier</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Salon;
