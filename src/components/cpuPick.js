import React, {useState, useEffect, useContext} from 'react'
import '../css/cpuPickStyles.css';

import {AppContext} from '../contexts/AppContext'


const CpuPick = (props) => {

    //Maintains state of random hand gesture generated for each round
    const {cpuPicked, setCpuPicked, round} = useContext(AppContext)  //Will need to be set to null when loading playTable

    //Runs when new round has started
    useEffect(() => {cpuTurn()}
    , [round])

    //Generates a random hand position for CPU's Turn
    const cpuTurn = () => {
        //Random pick by CPU
        let cpuPick = Math.floor(Math.random() * Math.floor(3));

        //Assigns a hand gesture to random number
        switch(cpuPick){
            case 0 : setCpuPicked('cpu_rock.jpg')
                break;
            case 1 : setCpuPicked('cpu_paper.jpg')
                break;
            default : setCpuPicked('cpu_scissors.jpg')
 
        } 
        return cpuPicked
    }

    return(
        <div>
               
            <center><h3>CPU</h3></center>      
            <img className='cpu-image' alt="CPU's choice" src={`https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/${cpuPicked}`} />
      
            
        </div>
    )
}

export default CpuPick

//cpu_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_rock.png
//cpu_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603510054/RPS/cpu_paper.jpg
//cpu_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509720/RPS/cpu_scissors.jpg