import React from 'react'
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'


const StartModal = (props) => {
  
  //Handles start button after its been pushed - Game has started - Must push "true" for playTable to show
  const handleStart = () => {
      //data to send to parent to show playTable
      console.log('Start Game...')
   

      //========================================

      props.onHide()
    }

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
          <Button onClick={handleStart}>Start</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  export default StartModal;