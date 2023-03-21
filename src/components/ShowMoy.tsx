  import React, { useState } from "react";
  import { Button, Modal } from "react-bootstrap";

  interface Props {
      moyenne : Number;
      isCalculClicked : boolean;
      handleClose : ()=>void;
  }
  const ShowMoy = ({ moyenne, isCalculClicked, handleClose }: Props) => {
    return (
      <>
        <Modal show={isCalculClicked} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Moyenne : </Modal.Title>
          </Modal.Header>
          <Modal.Body>La moyenne est : {moyenne.toFixed(3)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default ShowMoy;