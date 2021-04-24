import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.css";

const GameScore = ({ score, quiz, restartGame }) => {
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
