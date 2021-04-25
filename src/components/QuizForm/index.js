import React from "react";

import FeedBack from "../FeedBack/index";
import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.css";

const QuizForm = ({
  handleSubmit,
  isAnswered,
  handleChange,
  randomQuestion,
  isCorrect,
  isWrong,
  isSelected,
  exitWindow,
}) => {
  return (
    <form className="answers-container" onSubmit={handleSubmit}>
      {!isAnswered ? (
        randomQuestion.answers.map((answer) => (
          <div className="radio-input">
            {exitWindow ? (
              <input
                type="radio"
                value={answer.text}
                name="answer"
                onChange={handleChange}
                className="radio-disabled"
                disabled
              />
            ) : (
              <input
                type="radio"
                value={answer.text}
                name="answer"
                onChange={handleChange}
              />
            )}

            <label htmlFor="answer">{answer.text}</label>
          </div>
        ))
      ) : (
        <FeedBack isCorrect={isCorrect} isWrong={isWrong} />
      )}
      {isAnswered || !isSelected ? null : (
        <>
          {exitWindow ? (
            <Button
              text={locale.quiz.questions.btnText}
              rounded
              size="md"
              buttonColor="secondary"
              margin
            />
          ) : (
            <Button
              text={locale.quiz.questions.btnText}
              rounded
              size="md"
              buttonColor="secondary"
              disabled
              margin
            />
          )}
        </>
      )}
    </form>
  );
};

export default QuizForm;
