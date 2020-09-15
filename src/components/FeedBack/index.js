import React from 'react';
import './style.css';

const FeedBack = ({ isCorrect, isWrong }) => {
    return (
        <div className="feedback-container">
        {
            isCorrect ?
                <div>
                <h1 className="feedback-header">Correct Answer!</h1>
            <i className="fas fa-check-circle fa-2x correct-answer"></i>
            </div> 
            : isWrong ?
            <div className="feedback-container">
            <h1 className="feedback-header">Wrong Answer!</h1  >
            <i className="fas fa-times-circle fa-2x wrong-answer"></i>                                         
            </div>
            : null

        }
    </div>
    )
}

export default FeedBack;
