import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const QuizItem = ({ id, character, image }) => {
  return (
    <div className="card">
      <img src={image} alt={character} />
      <div className="card-side">
        <h3 className="main-title">{character}</h3>
        <NavLink to={`/quiz/${id}`}>
          <button className="play-game-btn play-game-btn-2 grow">Play</button>
        </NavLink>
      </div>
    </div>
  );
};

export default QuizItem;
