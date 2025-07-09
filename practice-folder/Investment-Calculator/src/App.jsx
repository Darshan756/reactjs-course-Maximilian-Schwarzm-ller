import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"

import ResultTable from "./components/ResultTable"
//import { Fragment } from "react"

  
function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 5,
        duration: 10
    })
    
     function handleChange(inputIdentifier,newValue){
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]:+newValue
            }
        });
    }
 const inputIsValid = userInput.duration >= 1
 return ( <>
   <Header />
   <main>
       <UserInput userInput={userInput} onChange={handleChange}/>
       {!inputIsValid && <p className="center">Enter duration greater than zero</p>} 
       {inputIsValid && <ResultTable input={userInput}/>}
   </main>
  </>
  )
}

export default App
