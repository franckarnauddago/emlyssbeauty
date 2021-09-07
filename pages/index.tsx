import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Button,
  Col,
  Container,
  Modal,
  Nav,
  Navbar,
  Row,
  Toast,
} from "react-bootstrap";
import Salon from "../components/Salon";
import Produit from "../components/Produit";
import CarouselTitre from "../components/CarouselTitre";
import Marche from "../components/Marche";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import { useState } from "react";
import { DataSalon } from "../utils/data";
import ModalSite from "../components/ModalSite";

export default function Home() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const nbreCommande = () => {
    setCount(count + 1);
    setShow(true);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="bodySite">
      <Head>
        <title>Emlyss Beauty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="toastSite">
        <Row>
          <Col>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <strong className="mr-auto">Emlyss Info</strong>
                <small>11 min Ago</small>
              </Toast.Header>
              <Toast.Body>
                Vous venez de commander {count} produit(s)
                <Button className="btnToast">voir ma commande</Button>
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>
      <div>
        <Menu nbreCmd={count} />
      </div>
      <div>
        <CarouselTitre />
      </div>
      <div className="sectionSalon p-5 ">
        <Salon onPress={handleShow} />
      </div>
      <div className="sectionProduits p-5 ">
        <Produit onPress={nbreCommande} />
      </div>
      <div className="sectionMarche p-5 ">
        <Marche />
      </div>
      <div className="p-5 sectionContact">
        <Contact />
      </div>
    </div>
  );
}
