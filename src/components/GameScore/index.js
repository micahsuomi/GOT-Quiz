import React from "react";

import "./style.css";

const GameScore = ({ score, quiz, restartGame }) => {
  return (
    <div className="game-score">
      <h1 className="game-score__header">Game Finished</h1>
      <h3 className="game-score__score">
        You got {score} out of {quiz.questions.length} questions.
      </h3>
      <button className="btn-restart" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
};

export default GameScore;
