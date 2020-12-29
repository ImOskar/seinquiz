import React from "react"; 
import image from "../img/start.gif"
  
const StartPanel = ({clickHandler}) => { 
  
    return ( 
        <div className='scores'>
            <span className='final-score'>Wanna get nuts?</span>
            <img className='score-gif' src={image} alt="gif" />
            <button className='btn btn-sml' onClick={clickHandler}>LET'S GET NUTS!</button>
        </div>
    ) 
}; 
      
export default StartPanel; 