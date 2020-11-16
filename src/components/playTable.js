import React, {useContext} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../css/playTableStyles.css'

import CpuPick from './cpuPick'
import UserPick from './userPick.js'

import {AppContext, round, setRound} from '../contexts/AppContext'

const PlayTable = () => {

    const {isGameStarted, round, setRound} = useContext(AppContext) 

    return (            
                
            isGameStarted                    
            ?

                <Container fluid > 
                    <center><h1>Round: {round}</h1></center>
                    <Container id='min-contain'>
                        <Row >
                            <Col id='user' className='play-area'>
                                <UserPick />    
                            </Col>
                            <Col  id='cpu' className='play-area'>
                                <CpuPick />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <center><Button variant='success' onClick={()=> setRound}>Next Round</Button></center>
                </Container>
            :
            null    
        )

}



export default PlayTable





