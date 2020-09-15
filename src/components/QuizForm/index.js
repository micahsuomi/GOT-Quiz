import React from 'react';

import FeedBack from '../FeedBack/index';
import './style.css';

const QuizForm = ({ handleSubmit, isAnswered, handleChange, randomQuestion, isCorrect, isWrong, isSelected }) => {
    return (
        <form className="answers-container" onSubmit={handleSubmit}>
                    {
                        !isAnswered ?
                            randomQuestion.answers.map((answer) => (
                                <label htmlFor="answer"
                                    className="btn-answer">
                                        {answer.text}

                                            <input type="radio" 
                                            value={answer.text}
                                            className="radio-input"
                                            name="answer"
                                            onChange={handleChange}
        
                                             />
                                             </label>

                                        ))
                                        : 
                                        <FeedBack isCorrect={isCorrect}
                                                  isWrong={isWrong}/>

                                        }
                                    {
                                        isAnswered || !isSelected ? null 
                                        :
                                        <button className="btn-answer__select" >Select</button>

                                    }
                                
                            </form>
    )
}

export default QuizForm;
