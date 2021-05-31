import React from "react";

import FeedBack from "../FeedBack/index";
import Button from "../Button";
import { locale } from "../../utils/locale";

import { Question } from "../../types"
import "./style.css";

interface QuizFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isAnswered: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  randomQuestion: Question
  isCorrect: boolean
  isSelected: boolean
  exitWindow: boolean
}
const QuizForm = ({
  handleSubmit,
  isAnswered,
  handleChange,
  randomQuestion,
  isCorrect,
  isSelected,
  exitWindow,
}: QuizFormProps ) => {
  return (
    <form className="answers-container" onSubmit={handleSubmit}>
      {!isAnswered ? (
        randomQuestion.answers.map((answer) => (
          <div className="radio-input" key={answer.text}>
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
        <FeedBack isCorrect={isCorrect} />
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
