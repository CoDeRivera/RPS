import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navbar'
import PlayTable from './components/playTable'

  const App = () => {
    return (
      <div>
        <Navigation />
        <PlayTable />
      </div>
    )
}

export default App;
