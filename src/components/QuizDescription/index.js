import React from "react";

import "./style.css";

const QuizDescription = ({
  character,
  characterDescription,
  startGame,
  isGameStarted,
}) => {
  return (
    <div className="description-wrapper">
      <div className="right-text">
        <div className="right-description">
          <h2 className="description-header">{character}</h2>
          <p className="paragraph">{characterDescription}</p>
        </div>
        {!isGameStarted ? (
          <div className="btn-play-container">
            <button className="btn-play grow" onClick={startGame}>
              Play {character} Quiz
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuizDescription;
