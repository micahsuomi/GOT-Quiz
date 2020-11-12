import React from "react";

import "./style.css";

const QuizDescription = ({ character, characterDescription, startGame, isGameStarted }) => {
  return (
    <div className="description-wrapper">
      <div className="right-text">
        <div className="right-description">
          <h2 className="description-header">{character}</h2>
          <p className="paragraph">
           {characterDescription}
          </p>

          <ul className="strenghts-list">
            <li className="strenghts-list-item">
              <i className="fas fa-fist-raised fa-2x strength-icon"></i>{" "}
              Strenght
            </li>
            <li className="strenghts-list-item">
              <i className="fas fa-running fa-2x strength-icon"></i> Speed
            </li>
            <li className="strenghts-list-item">
              <i className="fas fa-hat-wizard fa-2x strength-icon"></i> Magic
            </li>
            <li className="strenghts-list-item">
              <i className="fas fa-heartbeat fa-2x strength-icon"></i> Health
            </li>
          </ul>
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
