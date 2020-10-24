import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const Navigation = () => {

    const startGame = () =>{
        //Will start the game
        alert('Game will Start!')
    }

    const showLeaderboard = () => {
        //Will display a modal with the top scores
        alert('See the top scores!')
    }

    return(
        <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="#home" style={{color:"white"}}>R.P.S!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
                <Nav.Link href="#start" style={{color:"white"}} onClick={() => startGame()}>Start</Nav.Link>
                <Nav.Link href="#LEaderboard" style={{color:"white"}} onClick={() => showLeaderboard()}>Leaderboard</Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    )       
}

export default Navigation