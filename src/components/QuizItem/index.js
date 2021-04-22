import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.css";

const QuizItem = ({ id, character, image }) => {
  return (
    <div className="card">
      <img src={image} alt={character} />
      <div className="card-side">
        <h3 className="main-title">{character}</h3>
        <NavLink to={`/quiz/${id}`}>
          <Button
            text={locale.quizCard.btnText}
            buttonColor="primary"
            rounded
            size="md"
            margin
            marginBottom
          />
        </NavLink>
      </div>
    </div>
  );
};

export default QuizItem;
