import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../imgs/logo.png';
import './style.css';

const Home = () => {
    return (
        <div className="title-container">
        <div className="title-wrapper">
        <div className="header-wrapper">
            <img src={logo} alt="game of thrones logo" className="title-logo"/>
            <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/190916/169cc6733bc5cd5b5ba887c12d1ecde3.png" alt="game-of-thrones-font" className="quiz-font" border="0" /></a> 
        </div>
        
        <div className="button-wrapper">
            <NavLink to="/quiz" className="btn-enter-quiz grow">
                Start
            </NavLink>
        </div>
    </div>
    </div>

    
    )

}

export default Home;