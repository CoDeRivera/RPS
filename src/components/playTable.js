import React, {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import '../css/playTableStyles.css'

import CpuPick from './cpuPick'
import UserPick from './userPick.js'

import {AppContext} from '../contexts/AppContext'

const PlayTable = () => {

    const {isGameStarted, round, setRound, setUserPicked} = useContext(AppContext)
    const [nextRoundDisabled, setNextRoundDisabled] = useState(true)

    //Will  signal next round started 
    const handleOnClick = (userChoice) => {
        setUserPicked(userChoice)
        setRound(round + 1)
        setNextRoundDisabled(true)
        roundTimer()
    }

    const roundTimer = () => {
        setTimeout(() => {
            setNextRoundDisabled(false)
            console.log('Continue to next round')
        }, 2000)
    }

    useEffect(() => {
        roundTimer()
    },[])



    return (            
                
            isGameStarted                    
            ?

                <Container fluid > 
                    <center><h1>Round: {round}</h1></center>
                    <Container id='min-contain'>
                        <Row >
                            <Col id='user' className='play-area'>
                                <UserPick 
                                    handleOnSelection={handleOnClick}
                                    nextRoundDisabled={nextRoundDisabled}
                                />    
                            </Col>
                            <Col  id='cpu' className='play-area'>
                                <CpuPick />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <center><Button variant='success' disabled={nextRoundDisabled}onClick={()=> handleOnClick('user_rock.jpg')}>Next Round</Button></center>
                </Container>
            :
            null    
        )

}



export default PlayTable





