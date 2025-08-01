import { useState, useCallback, useMemo } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Question from './Question';

const Quiz = () => {
  const [answerState, setAnswerState] = useState('');
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === null) {
          setAnswerState('wrong');
        } else if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);


  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='Quiz Complete' />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question    key={activeQuestionIndex}  questionText={QUESTIONS[activeQuestionIndex].text} 
      answers={QUESTIONS[activeQuestionIndex].answers} 
      onSelectAnswer={handleSelectAnswer}s
      electedAnswer={userAnswer[ userAnswer.length - 1]}
       answerState={answerState}
       onSkipAnswer={handleSkipAnswer}
       
       />
       <Answers answers={}/>
    </div>
  );
};

export default Quiz;
