import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { data } from "./data/quizData";

import Home from "./components/Home";
import ViewQuiz from "./components/ViewQuiz";
import QuizList from "./components/QuizList";

import "./App.css";

const App = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    setQuizData(data);
  }, [quizData]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            path="/quiz/:id"
            component={(props) => <ViewQuiz quizData={quizData} {...props} />}
          />

          <Route
            path="/quiz"
            component={(props) => <QuizList quizData={quizData} {...props} />}
          />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
