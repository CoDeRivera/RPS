import React, {useContext} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../css/playTableStyles.css'

import CpuPick from './cpuPick'
import UserPick from './userPick.js'

import {AppContext} from '../contexts/AppContext'

const PlayTable = () => {

    const GameData = useContext(AppContext)

    const handleNextRound = () => {
        GameData.setRound()
        console.log('STarTing NexT RounD!')
    }   

    return (            
                
            GameData.isGameStarted                    
            ?

                <Container fluid > 
                    <center><h1>Round: {GameData.round}</h1></center>
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
                    {/* <center><Button variant='success' onClick={()=> {console.log('gameStarted value: ', gameStarted)}}>Test</Button></center> */}
                    <center><Button variant='success' onClick={()=> handleNextRound()}>Next Round</Button></center>
                </Container>
            :
            null    
        )

}



export default PlayTable





