import React, {useState, useContext} from 'react'

import '../css/userPickStyles.css';

import {Row, Col, Container, Button} from 'react-bootstrap' 
import {AppContext} from '../contexts/AppContext'

const UserPick = (props) => {
    const {playerName, userPicked} = useContext(AppContext)

    return(
        <div>

            <center><h3>{playerName}</h3></center> 
            <Container>
                <Row>
                    <Col>
                <       div >
                            <img  alt="User's Pick" src={`https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/${userPicked}`} />            
                        </div>
                    </Col>
                </Row>                
                <Row>
                    <Col>
                        <div className='choice-group'>                        
                            <Button variant='primary'  className='choice-tiles' disabled={props.nextRoundDisabled} onClick={() => props.handleOnSelection('user_rock.jpg')}>Rock</Button>
                            <Button variant='primary'  className='choice-tiles' disabled={props.nextRoundDisabled} onClick={() => props.handleOnSelection('user_paper.jpg')}>Paper</Button>
                            <Button variant='primary'  className='choice-tiles' disabled={props.nextRoundDisabled} onClick={() => props.handleOnSelection('user_scissors.jpg')}>Scissors</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

                <br />
        </div>
                        


    )
}

export default UserPick


//user_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.jpg
//user_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509830/RPS/user_paper.jpg
//user_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509964/RPS/user_scissor.jpg