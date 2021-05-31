import React from "react";

import "./style.css";

interface FeedBackProps {
  isCorrect: boolean;
}
const FeedBack = ({ isCorrect }: FeedBackProps) => {
  return (
    <div className="feedback-container">
      {isCorrect ? (
        <div>
          <h1 className="feedback-header">Correct Answer!</h1>
          <i className="fas fa-check-circle fa-2x correct-answer"></i>
        </div>
      ) : (
        <div className="feedback-container">
          <h1 className="feedback-header">Wrong Answer!</h1>
          <i className="fas fa-times-circle fa-2x wrong-answer"></i>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
