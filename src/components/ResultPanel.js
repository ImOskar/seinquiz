import React from "react"; 
  
const ResultPanel = ({questions, score, gif, clickHandler}) => { 
  
    return ( 
        <div className='scores'>
			<span className='final-score'>You scored {score} out of {questions}</span>
            <img className='score-gif' src={gif} alt="gif" />
            <button className='btn btn-sml' onClick={clickHandler}>Play again</button>
		</div>
    ) 
}; 
      
export default ResultPanel; 