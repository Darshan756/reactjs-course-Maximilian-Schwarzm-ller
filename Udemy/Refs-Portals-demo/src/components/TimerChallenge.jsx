import {useState,useRef} from 'react'
import ResultModel from './ResultModel';

const TimerChallenge = ({title,targetTime}) => {
/* const [timerExpired, setTimerExpired] = useState(false);
const [timerStarted,setTimerStarted] = useState(false) */
const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000
const timer = useRef()
const dialog = useRef()


if(timeRemaining <= 0){
  clearInterval(timer.current);
  setTimeRemaining(targetTime * 1000)
  dialog.current.open()
}

function handleStart() {
   /* timer.current =   setTimeout(() => {
        setTimerExpired(true)
        dialog.current.open();
    },targetTime * 1000 ) */
    timer.current = setInterval(() =>{
          setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10)
    },10)

} 

function handleStop(){
  dialog.current.open()
  clearInterval(timer.current)   
}

  return (
    <>
          <ResultModel ref={dialog} targetTime={targetTime} result={'lost'}/>
         <section className='challenge'>
          <h2>{title}</h2>
          {timerIsActive && <p>You lost!</p>}
          <p className='challenge-time'>
             {targetTime} second{targetTime > 1 ? 's' : ''}
          </p>
          <p>
               <button onClick={timerIsActive ?  handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
          </p>
          <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Time inactive   '}
          </p>
         </section>
         </>
  )
}

export default TimerChallenge