import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  moyenne: number;
  isCalculClicked: boolean;
  handleClose: () => void;
  nombreMatiere : number;
  nombreTotalMatiere : number;
}
const ShowMoy = ({ moyenne, isCalculClicked, handleClose , nombreMatiere , nombreTotalMatiere}: Props) => {
  return (
    <>
      <Modal show={isCalculClicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Moyenne : </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          La moyenne est : {isNaN(moyenne) || !moyenne ? (0).toFixed(3) : moyenne.toFixed(3)}
          <br />
          Nombre matieres calculer: {nombreMatiere}/{nombreTotalMatiere}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowMoy;
