import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const item = [...CORE_CONCEPTS]
console.log(item)
export default function CoreConcepts(){
    return (
         <section id="core-concepts">
             <h2>Core Concepts</h2>
              <ul>
                
                {CORE_CONCEPTS.map((concept) => <li key={concept.title}> <CoreConcept {...concept} /> </li> )}

             {/*     
                 <CoreConcept {...CORE_CONCEPTS[0]} />
                 <CoreConcept {...CORE_CONCEPTS[1]} />
                 <CoreConcept {...CORE_CONCEPTS[2]} />
                 <CoreConcept {...CORE_CONCEPTS[3]} />  */}
              </ul>
             
         </section>
    )
}