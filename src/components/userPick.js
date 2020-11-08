import React, {useState} from 'react'

import '../css/userPickStyles.css';



const UserPick = () => {
    const [userPicked, setUserPicked] = useState('user_rock.jpg')
    const [playerName, setPlayerName] = useState("Player's Name")
    return(
        <div>
            <center><h3>{playerName}</h3></center> 
            <div className='user-image'>
                <img  alt="User's Pick" src={`https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/${userPicked}`} />            
            </div>
            <div className='choice-group'>
                <div className='choice-tiles' onClick={() => setUserPicked('user_rock.jpg')}>Rock</div>
                <div className='choice-tiles' onClick={() => setUserPicked('user_paper.jpg')}>Paper</div>
                <div className='choice-tiles' onClick={() => setUserPicked('user_scissors.jpg')}>Scissors</div>
            </div>
            
           
            
        </div>
    )
}

export default UserPick


//user_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509987/RPS/user_rock.jpg
//user_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509830/RPS/user_paper.jpg
//user_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509964/RPS/user_scissor.jpg