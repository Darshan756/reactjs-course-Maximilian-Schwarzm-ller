import { useState, useRef, useEffect } from 'react';
import ResultModel from './ResultModel';

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // ✅ useEffect to monitor when timer hits 0
  useEffect(() => {
    if (timeRemaining <= 0 && timer.current) {
      clearInterval(timer.current);
      dialog.current.open();
    }
  }, [timeRemaining]);

function handleStart() {
   timer.current =   setTimeout(() => {
        setTimerExpired(true)
        dialog.current.open();
    },targetTime * 1000 )
    setTimerStarted(true)
} 

function handleStop(){
  clearTimeout(timer.current)   
}

  return (
    <>
          <ResultModel ref={dialog} targetTime={targetTime} result={'lost'}/>
         <section className='challenge'>
          <h2>{title}</h2>
          {timerExpired && <p>You lost!</p>}
          <p className='challenge-time'>
             {targetTime} second{targetTime > 1 ? 's' : ''}
          </p>
          <p>
               <button onClick={timerStarted ?  handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
          </p>
          <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Time inactive   '}
          </p>
         </section>
         </>
  )
}

export default TimerChallenge;
