import React, { useEffect, useState } from "react";

import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";

import ResultPanel from "./components/ResultPanel";
import StartPanel from "./components/StartPanel";
import QuestionPanel from "./components/QuestionPanel";

import logo from "./img/seinquiz-logo.png";

import QUIZ_DATA from "./quiz-bank";
import GIF_DATA from "./gifs";

import "./App.css";

function App() {
  const getQuestions = () => {
    let shuffledQuestions = shuffleArray(QUIZ_DATA);
    return shuffledQuestions.slice(0, 20);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [questions, setquestions] = useState(getQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [score, setScore] = useState(0);
  const [gif, setGif] = useState("");

  useEffect(() => {
    const setScoreGif = () => {
      const gifs = GIF_DATA;
      if (score > 18) {
        setGif(gifs("great"));
      } else if (score > 14) {
        setGif(gifs("good"));
      } else if (score > 9) {
        setGif(gifs("meh"));
      } else setGif(gifs("bad"));
    };
    if (showScore) setScoreGif();
  }, [score, showScore]);

  const handleAnswerOptionClick = (event) => {
    let button = event.target;
    let answer = button.textContent;

    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      answerFeedback("correct-answer", button);
    } else {
      answerFeedback("wrong-answer", button);
    }
  };

  const answerFeedback = (string, button) => {
    button.classList.add(string);
    setTimeout(() => {
      button.classList.remove(string);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 200);
  };

  const handleNewGameClick = () => {
    setNewGame(false);
  };

  const handleRestartClick = () => {
    setScore(0);
    setquestions(getQuestions());
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo"></img>
      {newGame ? (
        <StartPanel clickHandler={() => handleNewGameClick()}></StartPanel>
      ) : showScore ? (
        <ResultPanel
          clickHandler={() => handleRestartClick()}
          score={score}
          gif={gif}
          questions={questions.length}
        ></ResultPanel>
      ) : (
        <QuestionPanel
          clickHandler={() => handleAnswerOptionClick}
          currentQuestion={currentQuestion}
          questions={questions}
        ></QuestionPanel>
      )}
      <div className="background">
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
    </div>
  );
}

export default App;
