import {useState , useEffect} from 'react'

const ProgressBar = ({TIMER}) => {
    const [remainingTime,setRemainingTime] = useState(TIMER)
     useEffect(() => {
      console.log('Interval')
     const interval =setInterval(() => {
      setRemainingTime(prevTime => prevTime-10);
     },10);
     return () => {
      console.log('clear Interval')
      clearInterval(interval)
     }
     },[])
  return  <progress  value={remainingTime} max={TIMER}/>

}

export default ProgressBar