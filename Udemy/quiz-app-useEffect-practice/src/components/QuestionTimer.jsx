import {useState,useEffect,useCallback} from 'react'

const QuestionTimer = ({timeOut,onTimeout}) => {
    const [remainingTime,setRemainingTime] = useState(timeOut)
    useEffect(() =>{
         const timer = setTimeout(onTimeout,timeOut)
         return () => {
            clearTimeout(timer)
         }
    },[timeOut,onTimeout])
    
    useEffect(() =>{
        const interval = setInterval(() =>{
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        },100)
        return () => {
            clearInterval(interval);
        }
    },[]);
   
        
      
   
  return <progress id='question-time' max={timeOut} value={remainingTime}/>

}

export default QuestionTimer