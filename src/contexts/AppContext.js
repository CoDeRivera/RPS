import React, {useState} from 'react'

export const AppContext = React.createContext()


const AppContextProvider = (props) => {


    const [isGameStarted, setIsGameStarted] = useState(false)
    const [round, setRound] = useState(1)
    const [playerName, setPlayerName] = useState('')

    return(
        <AppContext.Provider value={{
                isGameStarted,
                setIsGameStarted: () => setIsGameStarted(!isGameStarted),
                round,
                setRound: ()=>setRound(round + 1),
                playerName,
                setPlayerName: (name) => setPlayerName(name)
            }}
        >
            {props.children}
        </AppContext.Provider>

    )

}

export  default AppContextProvider