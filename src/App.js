import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/navbar'
import PlayTable from './components/playTable'

  const App = () => {

    // State will be dependent on <PlayTable /> return values...
    // **************  const [hasGameStarted, setHasGameStarted] = useState(true) - (Ready 4 Delete)***

    return (
      <div>
        <Navigation />
        <PlayTable />
      </div>
    )
}

export default App;
