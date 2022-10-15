import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function ModalExample({ 
    children, 
    modalOpen,
    setModalOpen, 
    title,
    onSubmit
}) {

    return (
    <>
        <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
                {title}
            </h5>
            <button
                aria-label="Close"
                className=" close"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                <span aria-hidden={true}>×</span>
            </button>
            </div>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
            <Button
                color="secondary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Close
            </Button>
            <Button 
                color="primary" 
                type="button" 
                onClick={() => onSubmit('OK')}
            >
                Selanjutnya
            </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalExample;