import React from 'react'
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'


const StartModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Player's Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Start</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  export default StartModal;