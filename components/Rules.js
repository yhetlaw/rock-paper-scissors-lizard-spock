import Image from 'next/image';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
//Images
import modal from '../images/image-rules-bonus.svg';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal {...props} size='md' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Rules</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={modal} width={500} height={500} alt='rules' />
      </Modal.Body>
    </Modal>
  );
};

const Rules = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='rules__wrapper'>
        <Button className='rules' onClick={handleShow}>
          Rules
        </Button>
      </div>

      <MyVerticallyCenteredModal show={show} onHide={handleClose} />
    </>
  );
};

export default Rules;
