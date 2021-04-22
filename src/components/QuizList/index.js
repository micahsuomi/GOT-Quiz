import React from "react";
import { NavLink } from "react-router-dom";

import Background from "../Background";
import QuizItem from "../QuizItem";
import logo from "../../imgs/logo.png";

import "./style.css";

const QuizList = ({ quizData }) => {


  const formattedQuizData = quizData.map((data) => (
    <QuizItem
      key={data.id}
      id={data.id}
      character={data.character}
      image={data.imgPreview}
    />
  ));
  return (
    <Background>
    <div className="big-container">
      <h1 className="quiz-header">
        <NavLink to ="/" className="nav-logo">
        <img src={logo} alt="logo" className="logo" />
          <img
            src="https://fontmeme.com/permalink/190916/695e734041c90d051144596effcc8ad0.png"
            alt="game-of-thrones-font"
            className="main-page-font"
            border="0"
          />
        </NavLink>
      </h1>
      <div className="container">
        <div className="window-container">{formattedQuizData}</div>
        <div className="button-wrapper">
          <button className="btn btn-choose">
            Choose your favourite character!
          </button>
        </div>
      </div>
    </div>
    </Background>
  );
};

export default QuizList;
