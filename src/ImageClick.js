/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { ModalBody, ModalFooter, ModalHeader, Button, Modal } from 'reactstrap';

function ImagePreview(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <img
        src={props.imgsrc}
        className='card-img-top'
        alt='Image'
        onClick={toggle}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Image Full View : </ModalHeader>
        <ModalBody>
          <img src={props.iurl} alt='Full Screen View' />
        </ModalBody>
        <ModalFooter>
          <Button color='info' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ImagePreview;
