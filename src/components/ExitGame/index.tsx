import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.scss";

interface ExitGameProps {
  closeWindow: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ExitGame = ({ closeWindow }: ExitGameProps) => {
  const { exitQuiz } = locale.quiz;
  return (
    <div className="exit-game">
      <h2 className="exit-game__header">{exitQuiz.header.title}</h2>
      <p>{exitQuiz.header.description}</p>
      <NavLink to="/quiz">
        <Button text={exitQuiz.confirm.btnText} size="md" rounded margin />
      </NavLink>
      <Button
        text={exitQuiz.cancel.btnText}
        resOnClick={closeWindow}
        size="md"
        rounded
        margin
      />
    </div>
  );
};

export default ExitGame;
