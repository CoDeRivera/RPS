import React, {useState} from 'react'
import CpuPick from './cpuPick'

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
                        <img alt='User_Rock' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.png' />
                        {/* <img alt='User_Paper' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_paper.png' /> */}
                        {/*<img alt='User_Scissors' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_scissors.png' /> */}
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



//user_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.jpg
//user_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509830/RPS/user_paper.jpg
//user_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509964/RPS/user_scissor.jpg

