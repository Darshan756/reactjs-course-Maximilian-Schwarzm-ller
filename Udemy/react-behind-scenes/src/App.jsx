import { useState,React } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);


  return (
    <>
      <Header />
      <main>
        <ConfigureCounter setChose={setChosenCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
