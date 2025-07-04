import { useState,Fragment } from 'react'
import componentsImg from './assets/components.png'
import Header from './components/Header/Header.jsx'

import { EXAMPLES } from './data.js'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'




function App() {
 
   
  return (
   /*  <Fragment> */
   <>
       <Header />
       
      <main>
        <CoreConcepts />
        <Examples />
        
     {/*  {[
  <h1 key="1">Hello World</h1>,
  <p key="2">My self darshan mt</p>
]} */}

        </main>
    </>
   /*  </Fragment> */
  );
}

export default App;
