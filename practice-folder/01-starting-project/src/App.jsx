import { useState } from "react";
import Header from "./components/Header";
import components from './assets/components.png'
import CoreConcepts from "./components/CoreConcepts";
import { EXAMPLES } from "./data";
import Examples from "./components/Examples";


function App() {
  
let tabContent = 
function handleSelect(selectedButton){
  if(selectedButton === 'components'){
    tabContent =  EXAMPLES.components
  }
}

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />

      </main>
   </>
  );
}

export default App;
