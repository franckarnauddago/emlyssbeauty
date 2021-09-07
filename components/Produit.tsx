import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DataProduit } from "../utils/data";

const Produit = ({ onPress }) => {
  return (
    <Container>
      <div className="containerTitreSalon">
        <div style={{ width: "50%" }}>
          <p className="titreSectionProduit mb-2  ">Nos differents Produits</p>
          <p className="secondtitreSectionProduit mb-2  ">
            Achetez, Utilisez & Profitez
          </p>
          <p className="sousTitreSectionProduit ">
            Utilisez nos mêches très efficaces et pour vos soins , Nous sommes
            aussi présents.
          </p>
        </div>
      </div>
      <Row>
        {DataProduit.map((card) => (
          <Col className="produits p-0 mb-5">
            <img src={card.sourceImg} style={{ width: "100%" }} />
            <div className="refProduit">
              <p className="titreProduit">{card.titre}</p>
              <p className="prixProduit">{card.prix}</p>
              <Button onClick={onPress} className="btnProduit">
                Commander
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Produit;
