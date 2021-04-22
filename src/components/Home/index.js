import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../imgs/logo.png";
import Background from "../Background";
import Button from "../Button";
import { locale } from "../../utils/locale";

import "./style.css";

const Home = () => {
  return (
    <Background>
      <div className="title-wrapper">
        <div className="header-wrapper">
          <img src={logo} alt="game of thrones logo" className="title-logo" />
          <img
            src="https://fontmeme.com/permalink/190916/169cc6733bc5cd5b5ba887c12d1ecde3.png"
            alt="game-of-thrones-font"
            className="quiz-font"
            border="0"
          />
          <NavLink to="/quiz">
            <Button
              text={locale.home.btnText}
              buttonColor="primary"
              rounded
              size="lg"
              margin
            />
          </NavLink>
        </div>
      </div>
    </Background>
  );
};

export default Home;
