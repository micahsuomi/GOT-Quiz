import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Background from "../Background";
import QuizForm from "../QuizForm";
import QuizDescription from "../QuizDescription";
import Button from "../Button";
import ExitGame from "../ExitGame";
import GameScore from "../GameScore";
import { locale } from "../../utils/locale";
import { Quiz, Question} from "../../types"

import "./style.css";

interface ViewQuizProps {
  quizData: Quiz[]
}
const ViewQuiz = (props, { quizData }: ViewQuizProps
  ) => {
  const [quiz, setQuiz] = useState([] as unknown as Quiz);
  const [questionLoaded, setQuestionLoaded] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([] as Question[]);
  const [randomQuestion, setRandomQuestion] = useState({} as Question);
  const [isGameStarted, setIsGameStarted] = useState(false);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [exitWindow, setExitWindow] = useState(false);
  //loads all the questions
  useEffect(() => {
    const id = props.match.params.id;
    const foundQuiz = props.quizData.find((data: Quiz) => {
      return data.id === id;
    });
    if(foundQuiz) {
      setQuiz(foundQuiz);
    }
  }, [quiz, props.match.params.id, quizData]);

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
        const randomQuiz = quiz.questions.sort(() => Math.random() - 0.5);
        setIsGameStarted(true);
        setIsGameFinished(false);
        setRandomQuestions(randomQuiz);
        setQuestionLoaded(true);
        setScore(0);
      }, 500);
    } catch (err) {
      return err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAnswer = randomQuestion.answers.find((a) => {
      return a.text === answer;
    });

    setIsAnswered(true);
    setIsSelected(false);
    if (selectedAnswer?.correct) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
      setScore(score + 0);
    }
  };

  const handleChange = (e: any) => {
    setAnswer(e.target.value);
    setIsSelected(true);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    startGame();
  };

  const openExitWindow = () => setExitWindow(true);
  const closeWindow = () => setExitWindow(false);

  return (
    <Background>
      <div className="quiz-container">
      {exitWindow && <ExitGame closeWindow={closeWindow} />}
        <div className={exitWindow ? "quiz-wrapper dark " : "quiz-wrapper"}>
          <div className="exit">
            {!isGameFinished && (
              <>
                {isGameStarted ? (
                  <button onClick={openExitWindow} className="exit__link">
                    <span className="exit__text">Exit Quiz</span>
                    <i className="fas fa-times-circle exit__icon"></i>
                  </button>
                ) : (
                  <NavLink to="/quiz" className="exit__link">
                    <span className="exit__text">Exit Quiz</span>
                    <i className="fas fa-times-circle exit__icon"></i>
                  </NavLink>
                )}
              </>
            )}
          </div>
          <div className="description-container">
            <div className="big-image-left">
              <img src={quiz.img} alt="quiz character" className="big-img-1" />
            </div>

            {isGameStarted || isGameFinished ? null : (
              <QuizDescription
                character={quiz.character}
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
                      <h2 className="question">{randomQuestion.question}</h2>
                    )}
                    <QuizForm
                      handleSubmit={handleSubmit}
                      isAnswered={isAnswered}
                      handleChange={handleChange}
                      randomQuestion={randomQuestion}
                      isCorrect={isCorrect}
                      isSelected={isSelected}
                      exitWindow={exitWindow}
                    />

                    <div className="score-box">
                      <span className="score score2"></span>
                    </div>
                    {!isGameFinished && isAnswered ? (
                      <Button
                        resOnClick={nextQuestion}
                        text={locale.quiz.next.btnText}
                        rounded
                        size="md"
                        margin
                      />
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
