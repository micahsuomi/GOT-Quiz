import React from "react";

import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.css";

interface QuizDescriptionProps {
  character: string
  characterDescription: string
  startGame: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isGameStarted: boolean
}
const QuizDescription = ({
  character,
  characterDescription,
  startGame,
  isGameStarted,
}: QuizDescriptionProps) => {
  return (
    <div className="description-wrapper">
      <div className="right-text">
        <div className="right-description">
          <h3 className="description-header">{character}</h3>
          <p className="paragraph">{characterDescription}</p>
        </div>
        {!isGameStarted ? (
          <div className="btn-play-container">
            <Button resOnClick={startGame} text={locale.quizItem.btnText} rounded size="md"/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuizDescription;
