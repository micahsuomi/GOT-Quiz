import React from "react";

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
        text={locale.quiz.endGame.btnText}
        size="md"
        rounded
        margin
      />
    </div>
  );
};

export default GameScore;
