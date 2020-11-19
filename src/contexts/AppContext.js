import React, {useState} from 'react'

export const AppContext = React.createContext()


const AppContextProvider = (props) => {


    const [isGameStarted, setIsGameStarted] = useState(true)
    const [round, setRound] = useState(1)
    const [playerName, setPlayerName] = useState('')
    const [userPicked, setUserPicked] = useState('user_rock.jpg')
    const [cpuPicked, setCpuPicked] = useState('cpu_rock.jpg')

    return(
        <AppContext.Provider value={{
                isGameStarted,
                setIsGameStarted,
                round,
                setRound,
                playerName,
                setPlayerName,
                userPicked,
                setUserPicked,
                cpuPicked,
                setCpuPicked
            }}
        >
            {props.children}
        </AppContext.Provider>

    )

}

export  default AppContextProvider