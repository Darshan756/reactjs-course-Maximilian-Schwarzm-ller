//hooks
import { useState } from 'react';

//components
import Header from './components/Header'
import Quiz from './components/Quiz';
function App() {
    return <>
      <Header />
      <main>
         <Quiz />
      </main>
   
    </>
}

export default App;
