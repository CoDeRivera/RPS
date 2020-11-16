import React, {useContext} from 'react'
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'

import {AppContext} from '../contexts/AppContext'

const StartModal = (props) => {  
  const GameData = useContext(AppContext)
    //Handles start button after its been pushed - Game has started - Must push "true" for playTable to show
  
  const handleStartGame = (name) => {
    //Needs a check so Plaer's Name is not blank
    //  Code Here
    //==========================================
    GameData.setPlayerName(name)
    GameData.setIsGameStarted()     
    props.onHide()   
    console.log('Game is now running.') 
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
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"  />
          </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() =>  handleStartGame('SHaDoWCoDe64')}>Start</Button>
      </Modal.Footer>
    </Modal>
  );
}
  

  export default StartModal;