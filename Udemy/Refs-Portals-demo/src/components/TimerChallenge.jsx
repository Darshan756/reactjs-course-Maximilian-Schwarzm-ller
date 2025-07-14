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
    if (timer.current) return; // Prevent duplicate timers
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timer.current = null;
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    clearInterval(timer.current);
    timer.current = null;
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {!timerIsActive && timeRemaining !== targetTime * 1000 && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Time inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
