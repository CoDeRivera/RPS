import React from 'react';
import {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import StartModal from './startModal'
import StreakBoardModal from './streakBoardModal'


const Navigation = () => {

    const [showStartModal, setShowStartModal] = useState(false);
    const [showStreaksModal, setShowStreaksModal] = useState(false);






    return(
        <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="#home" style={{color:"white"}}>R.P.S!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >

                {/* Opens Start Modal */}
                <Nav.Link href="#start" style={{color:"white"}}  onClick={() => setShowStartModal(true)}>
                   Start
                </Nav.Link>
                <StartModal
                    show={showStartModal}
                    onHide={() => setShowStartModal(false)}
                />                    

                {/* Opens Streaks Board */}
                <Nav.Link href="#streaks" style={{color:"white"}} onClick={() => setShowStreaksModal(true)}>
                    Streaks
                </Nav.Link>   
                <StreakBoardModal 
                    show={showStreaksModal}
                    onHide={() => setShowStreaksModal(false)}
                />                               
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    )       
}

export default Navigation