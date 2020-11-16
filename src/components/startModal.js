import React, {useContext} from 'react'
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap'

import {AppContext} from '../contexts/AppContext'

const StartModal = (props) => {  
  const {playerName, setPlayerName, setIsGameStarted} = useContext(AppContext)
    //Handles start button after its been pushed - Game has started - Must push "true" for playTable to show
  
  const handleStartGame = (e, name) => {
    console.log('event: ', e.playerName);
    //Needs a check so Plaer's Name is not blank
    //  Code Here
    //==========================================
    e.playerName === '' || undefined ?
    alert('Please enter your Name.')
    :
    setIsGameStarted()     
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
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" id='playerName' onChange={(e) => setPlayerName(e.target.value)}  />
          </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() =>  handleStartGame({playerName})}>Start</Button>
      </Modal.Footer>
    </Modal>
  );
}
  

  export default StartModal;