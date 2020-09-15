import React from 'react';
import QuizItem from './QuizItem';
import logo from '../imgs/logo.png'
import './quizlist.css';

const QuizList = ({ quizData }) => {

    const formattedQuizData = quizData.map((data) => (
            <QuizItem key={data.id} 
                      id={data.id}  
                      character={data.character}
                      image={data.imgPreview}/>

        ))

        return (
            <div className="big-container">
                <h1 className ="quiz-header"><img src={logo} alt="" className="logo"/><a href="https://fontmeme.com/game-of-thrones-font"><img src="https://fontmeme.com/permalink/190916/695e734041c90d051144596effcc8ad0.png" alt="game-of-thrones-font" className="main-page-font" border="0" /></a></h1>
            <div className="container">
                <div className="window-container">
                {formattedQuizData} 
            </div>
            <div className="button-wrapper">
            <button className="btn btn-choose">Choose your favourite character!</button>
        </div>
            </div>
            </div>


        )
    
}

export default QuizList;




