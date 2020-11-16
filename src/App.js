import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navbar'
import PlayTable from './components/playTable'

import AppContextProvider from './contexts/AppContext'

const App = () => {

    return (      
      <AppContextProvider>
          <Navigation />
          <PlayTable />
      </AppContextProvider>
    )
}

export default App