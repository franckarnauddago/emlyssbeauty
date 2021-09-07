import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const CarouselTitre = () => {
  const chevron = ">>>";

  return (
    <div className="titre">
      <Row>
        <Col className="colTitre">
          <div className="titreLeft ">
            <h1 style={{ fontSize: "3.5em", color: "#CFA470" }}>
              Soignez,
              <p style={{ color: "#6F603A" }}>
                Ayez un Belle Coupe de Cheveuveux avec Emlyss Boutique.
              </p>
            </h1>

            <p style={{ color: "#212121", fontWeight: 500 }}>
              Nous vous offrons une panoplie de mêches .vous pouvez aussi vous
              rendre dans nos super marchés pour vous en procurer , et en plus
              c'est moins cher.Vous povez en trouver partout !
            </p>
            <Button className="btnTitre mt-1">Ajoutez au Panier </Button>
          </div>
        </Col>
        <Col>
          <div className="contImgTitle">
            <img src="../assets/hair-3.png" style={{ width: "100%" }} />
          </div>
        </Col>
      </Row>
      <div className="boxSousTitre">
        <Row>
          <Col className="MostPopularTitle">
            <p> The Most Popular {chevron}</p>
          </Col>
          <Col className="PopularOne">
            <div className="productPopularOne">
              <img src="../assets/hair-2.png" style={{ width: "70%" }} />
              <div className="rightProductPopularOne">
                <p style={{ margin: 0, fontSize: "1.3em", fontWeight: 700 }}>
                  Mêches
                </p>
                <p style={{ margin: 0 }}>50 €</p>
              </div>
            </div>
          </Col>
          <Col className="Popular">
            <div className="productPopularTwo">
              <img src="../assets/hair-2.png" style={{ width: "70%" }} />
              <div className="rightProductPopularOne">
                <p style={{ margin: 0, fontSize: "1.3em", fontWeight: 700 }}>
                  Mêches
                </p>
                <p style={{ margin: 0 }}>50 €</p>
              </div>
            </div>
          </Col>
          <Col className="Popular">
            <div className="productPopularThree">
              <img src="../assets/hair-2.png" style={{ width: "70%" }} />
              <div className="rightProductPopularOne">
                <p style={{ margin: 0, fontSize: "1.3em", fontWeight: 700 }}>
                  Mêches
                </p>
                <p style={{ margin: 0 }}>50 €</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarouselTitre;
