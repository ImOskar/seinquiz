import React from "react"; 
  
const QuestionPanel = ({currentQuestion, questions, clickHandler}) => { 
  
  return ( 
    <div className='question-panel'>
			<div className='count'>
				<span>Question {currentQuestion + 1} /{questions.length}</span>
			</div>
      <div className='question'>
				<span>{questions[currentQuestion].question}</span>
      </div>
			<div className='answers'>
				{questions[currentQuestion].answers.map((answer) => (
            <button id={answer} className='btn' onClick={clickHandler()}>{answer}</button>
        ))}
			</div>
    </div>
  ) 
}; 
  
export default QuestionPanel; 