import React from "react";
import { Modal } from "react-bootstrap";

const ModalSite = ({ openModal, hideModal, modalTitre, urlImgModal }) => {
  return (
    <Modal animation={true} show={openModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={urlImgModal} style={{ width: "100%" }} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis iste,
          quaerat error, quas saepe, libero consequatur rerum quod aut nulla
          veniam nihil praesentium tempora provident culpa voluptatum est
          adipisci vel!
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSite;
