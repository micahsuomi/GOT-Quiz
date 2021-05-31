import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { quizData } from "./data/quizData";
import Home from "./components/Home";
import ViewQuiz from "./components/ViewQuiz";
import QuizList from "./components/QuizList";

import "./App.css";

const App = () => {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    setData(quizData);
  }, [data]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            path="/quiz/:id"
            component={(props: any) => <ViewQuiz quizData={quizData} {...props} />}
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
