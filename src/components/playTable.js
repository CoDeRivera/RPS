import React, {useState} from 'react'
import CpuPick from './cpuPick'
import UserPick from './userPick.js'

import {Container, Row, Col, Button} from 'react-bootstrap'
import '../css/playTableStyles.css'


const PlayTable = () => {

    
    const [round, setRound] = useState(1)
    const [gameStarted, setGameStarted] = useState(true)

    const handleNextRound = (cpuTurn) => {
        // Will start next round
        // setRound(round + 1)
        console.log('STarTing NexT RounD!')
    }
    

    return (

        <Container fluid >
            <br /> 
        <center><h1>Round: {round}</h1></center>
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
            <br />
            <center><Button variant='success' onClick={()=> handleNextRound()}>Next Round</Button></center>
        </Container>
    )

                gameStarted
                        ?

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
                    <br />
                    <center><Button variant='success' onClick={()=> handleNextRound()}>Next Round</Button></center>
                </Container>
                :
                null
        
            )

}



export default PlayTable





