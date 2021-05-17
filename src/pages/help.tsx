import { useModal } from '@contexts/modal';

import { Alert, Badge, Button, Modal, Input, CardsGrid } from '@components';

function Help() {
  const { addModal, showModal } = useModal();

  return (
    <>
      <Badge border="rounded-semi">1</Badge>

      <Badge border="rounded-pill">Badge rounded-pill</Badge>

      <Alert>Alert default</Alert>
      <Alert alert="success">Alert success</Alert>
      <Alert alert="error">Alert error</Alert>

      <Button className="modal-button" onClick={addModal}>
        Button Modal
      </Button>

      <Modal show={showModal}>
        <Modal.ModalHeader>Modal Header</Modal.ModalHeader>
        <Modal.ModalBody>
          <Input />

          <div style={{ marginTop: '20px' }}>
            Click X, Click Overlay and ESQ
          </div>
        </Modal.ModalBody>
        <Modal.ModalFooter>Modal Footer</Modal.ModalFooter>
      </Modal>

      <div style={{ marginTop: '48px' }}>
        <h4>Grid</h4>
        <CardsGrid>
          <li className="card">1</li>
          <li className="card">2</li>
          {/* <li className="card">3</li>
          <li className="card">4</li> */}
        </CardsGrid>
      </div>
    </>
  );
}

export default Help;
