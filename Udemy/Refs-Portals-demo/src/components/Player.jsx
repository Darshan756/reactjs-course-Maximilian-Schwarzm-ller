import { useState,useRef } from "react";


export default function Player() {
  const playerName = useRef()
  const [enterdPlayer,setEnterdPlayer] = useState() 
/*   const [submitted,setSubmitted] = useState(false)
 */ /*  function handleChange(event){
     setSubmitted(false)
     setEnterdPlayer(event.target.value) 
  } */
  
  function handleClick(){
    
    setEnterdPlayer(playerName.current.value);
    playerName.current.value = ''
    
  }
  return (
    <section id="player">
      <h2>Welcome {enterdPlayer ?? 'unknown entity' }</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
