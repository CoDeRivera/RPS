import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'
import '../css/playTableStyles.css'


const PlayTable = () => {
    return (
        <Container fluid > 
            <Container id='min-contain'>
                <Row style={{border:"1px dashed black"}}>
                    <Col id='user' className='play-area'>
                        <img alt='User_Rock' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.png' />
                        <img alt='User_Paper' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_paper.png' />
                        <img alt='User_Scissors' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_scissors.png' />
                    </Col>
                    <Col className='middle'>|</Col>
                    <Col  id='cpu' className='play-area'>
                        <img alt='CPU_Scissors' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_scissors.png' /><br />
                        <img alt='CPU_Rock' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_rock.png' />
                        <img alt='CPU_Paper' src='https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_paper.png' />
                        
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}



export default PlayTable



//user_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.jpg
//user_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509830/RPS/user_paper.jpg
//user_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509964/RPS/user_scissor.jpg

//cpu_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_rock.png
//cpu_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603510054/RPS/cpu_paper.jpg
//cpu_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509720/RPS/cpu_scissors.jpg