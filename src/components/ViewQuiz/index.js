import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Background from '../Background';
import QuizForm from "../QuizForm";
import QuizDescription from "../QuizDescription";
import GameScore from "../GameScore";

import "./style.css";

const ViewQuiz = (props) => {
  const [quiz, setQuiz] = useState([]);
  const [questionLoaded, setQuestionLoaded] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState({});
  const [isGameStarted, setIsGameStarted] = useState(false);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  //loads all the questions
  useEffect(() => {
    const id = props.match.params.id;
    const foundQuiz = props.quizData.find((data) => {
      return data.id === id;
    });
    setQuiz(foundQuiz);
  }, [quiz, props.match.params.id, props.quizData]);

  useEffect(() => {
    setRandomQuestion(randomQuestions[currentQuestionIndex]);
  }, [randomQuestions, currentQuestionIndex]);

  const nextQuestion = () => {
    setCurrentQuestionIndex((currentQuestionIndex = currentQuestionIndex + 1));
    setIsAnswered(false);

    if (randomQuestions.length < currentQuestionIndex + 1) {
      console.log("game over");
      setIsGameFinished(true);
      setIsGameStarted(false);
    }
  };

  //loads random questions with async and set timeout to return the questions in random order
  const startGame = async () => {
    try {
      setTimeout(async () => {
        let randomQuiz = await quiz.questions.sort(() => Math.random() - 0.5);
        setIsGameStarted(true);
        setIsGameFinished(false);
        setRandomQuestions(randomQuiz);
        setQuestionLoaded(true);
      }, 1000);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedAnswer = randomQuestion.answers.find((a) => {
      return a.text === answer;
    });

    setIsAnswered(true);
    setIsSelected(false);
    if (selectedAnswer.correct) {
      setIsCorrect(true);
      setIsWrong(false);
      setScore(score + 1);
      console.log("correct", score);
    } else {
      setIsCorrect(false);
      setIsWrong(true);
      setScore(score + 0);
      console.log("wrong", score);
    }
  };

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setIsSelected(true);
  };

  const restartGame = () => {
    setIsGameStarted(false);
    setIsGameFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <Background>
    <div className="quiz-container"> 
    <div className="quiz-wrapper">
      <div className="exit">
        <NavLink to="/quiz" className="exit__link">
          <span className="exit__text">Exit Quiz</span>
          <i className="fas fa-times-circle exit__icon"></i>
        </NavLink>
      </div>
      <div className="description-container">
        <div className="big-image-left">
          <img src={quiz.img} alt="quiz character" className="big-img-1" />
        </div>

        {isGameStarted || isGameFinished ? null : (
          <QuizDescription
            quiz={quiz}
            characterDescription={quiz.characterDescription}
            isGameStarted={isGameStarted}
            startGame={startGame}
          />
        )}

        {isGameStarted && !isGameFinished ? (
          <div className="question-container">
            {questionLoaded ? (
              <div>
                {isAnswered ? null : (
                  <h1 className="question">{randomQuestion.question}</h1>
                )}
                <QuizForm
                  handleSubmit={handleSubmit}
                  isAnswered={isAnswered}
                  handleChange={handleChange}
                  randomQuestion={randomQuestion}
                  isCorrect={isCorrect}
                  isWrong={isWrong}
                  isSelected={isSelected}
                />

                <div className="score-box">
                  <span className="score score2"></span>
                </div>
                {!isGameFinished && isAnswered ? (
                  <button className="btn-next" onClick={nextQuestion}>
                    Next
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : isGameFinished ? (
          <GameScore score={score} quiz={quiz} restartGame={restartGame} />
        ) : null}
      </div>
    </div>
    </div> 
    </Background>
  );
};

export default ViewQuiz;
