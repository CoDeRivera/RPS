import React, {useState, useEffect} from 'react'


const CpuPick = (props) => {
    //Maintains state of random hand gesture generated for each round
    const [cpuPicked, setCpuPicked] = useState('cpu_rock.jpg')  //Will need to be set to null when loading playTable
  
    //Runs once component first mounts (For Testing Purposes Only)
    // useEffect(() => cpuTurn()
    // ,[])

    //Runs when new round has started
    useEffect(() => cpuTurn()
    , [props.roundCount])

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
            <img alt="CPU's choice" src={`https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/${cpuPicked}`} />
        </div>
    )
}

export default CpuPick

//cpu_rock = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509718/RPS/cpu_rock.png
//cpu_paper = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603510054/RPS/cpu_paper.jpg
//cpu_scissor = https://res.cloudinary.com/dd6mwtyrj/image/upload/v1603509720/RPS/cpu_scissors.jpg