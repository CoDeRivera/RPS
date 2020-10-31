import React, {useState} from 'react'
import CpuPick from './cpuPick'
import UserPick from './userPick.js'

import {Container, Row, Col, Button} from 'react-bootstrap'
import '../css/playTableStyles.css'


const PlayTable = () => {
    const [round, setRound] = useState(1)
 
    const handleNextRound = (cpuTurn) => {
        //Will start next round
        setRound(round + 1)
        // console.log('next round')
    }
    

    return (
        <Container fluid > 
        <h1>Round: {round}</h1>
            <Container id='min-contain'>
                <Row >
                    <Col id='user' className='play-area'>
                        <UserPick roundCount={round} />    
                    </Col>
                    <Col  id='cpu' className='play-area'>
                       <CpuPick roundCount={round} />
                    </Col>
                </Row>
            </Container>
            <center><Button variant='success' onClick={()=> handleNextRound()}>Next Round</Button></center>
        </Container>
    )
}



export default PlayTable





