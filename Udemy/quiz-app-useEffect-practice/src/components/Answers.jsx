import { useMemo } from 'react';

const Answers = ({ answers, selectedAnswer, answersState, onSelect }) => {
  const shuffledAnswers = useMemo(() => {
    const shuffled = [...answers];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
  }, [answers]);

  return (
    <ul id='answers'>
      {shuffledAnswers.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = '';

        if (isSelected) {
          if (answersState === 'answered') cssClasses = 'selected';
          if (answersState === 'correct' || answersState === 'wrong') cssClasses = answersState;
        }

        return (
          <li key={index} className='answer'>
            <button onClick={() => onSelect(answer)} className={cssClasses}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
