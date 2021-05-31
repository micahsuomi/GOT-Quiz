import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import { locale } from "../../utils/locale";
import { Quiz } from "../../types"

import "./style.css";

interface GameScoreProps {
  score: number
  quiz: Quiz
  restartGame: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const GameScore = ({ score, quiz, restartGame }: GameScoreProps) => {
  console.log(quiz, restartGame)
  return (
    <div className="game-score">
      <h1 className="game-score__header">Game Finished</h1>
      <h3 className="game-score__score">
        You got {score} out of {quiz.questions.length} questions.
      </h3>
      <Button
        resOnClick={restartGame}
        text={locale.quiz.restartGame.btnText}
        size="md"
        rounded
        margin
      />
      <NavLink to="/quiz">
        <Button text={locale.quiz.exitGame.btnText} size="md" rounded margin />
      </NavLink>
    </div>
  );
};

export default GameScore;
