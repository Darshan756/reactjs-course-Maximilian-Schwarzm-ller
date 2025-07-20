import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
const Question = ({questionText,answers,onSelectAnswer
    ,selectedAnswer,answerState,onSkipAnswer}) => {
  return (
   <div id='questions'>
        <QuestionTimer 
         timeOut={10000} 
        onTimeout={onSkipAnswer} />
        <h1>{questionText}</h1>
        <Answers 
        answers={answers} 
        selectedAnswer={selectedAnswer}
        answersState = {answerState} 
        onSelect={onSelectAnswer}/>
      </div>
  )
}

export default Question