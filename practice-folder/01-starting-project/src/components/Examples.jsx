import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButtons";
import Tab from "./Tab";

export default function Examples() {
const [selectedTopic,setselectedTopic] = useState();
function handleSelection(selectedButton){
    setselectedTopic(selectedButton)
}
let tabContent = <p>Please Select a topic.</p>

if(selectedTopic){
tabContent = (
            <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
         </div>
          )
}

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tab 
      buttons={
      <>
      <TabButtons isActive={selectedTopic ==='components'} onSelect={() => handleSelection('components')}>Components</TabButtons>
      <TabButtons isActive={selectedTopic ==='jsx'} onSelect={() => handleSelection('jsx')}>JSX</TabButtons>
      <TabButtons  isActive={selectedTopic ==='props'} onSelect={() => handleSelection('props')}>Props</TabButtons>
      <TabButtons  isActive={selectedTopic ==='state'} onSelect={() => handleSelection('state')}>State</TabButtons> 
      </>
      } buttonContainer='menu'
        >
        {tabContent}
      </Tab>
      
    </section>
  );
}
