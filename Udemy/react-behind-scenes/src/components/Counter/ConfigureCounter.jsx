import {useState} from 'react'
import { log } from '../../log';

const ConfigureCounter = ({setChose}) => {
    log('<ConfigureCounter>',1)
const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    setChose(enteredNumber);
    setEnteredNumber(0);
  }
    return (
    
     <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
    
  )
}

export default ConfigureCounter