import { EXAMPLES } from "../data"
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
const [selectedTopic,setSelectedTopic] = useState();

 function handleSelect(selectedButton){
      
        setSelectedTopic(selectedButton)
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
     <Section id={'examples'} title={'Exampels'} >
         <Tabs buttons={<>
          
            <TabButton  isSelected={selectedTopic === 'components'}  onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >State</TabButton>
        
          </>} buttonContainer='menu'>{tabContent}</Tabs>
         
        

          {/* {!selectedTopic ? <p>Please Select a topic.</p> : (<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
         </div>) } */}
        
       
       {/*     {!selectedTopic && <p>Please Select a topic.</p> }
          {selectedTopic && (<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
         </div>)} */}
         
        </Section>
     )
}