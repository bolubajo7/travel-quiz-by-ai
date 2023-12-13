import React, { useState } from "react";
import HomePage from "./HomePage";
import QuizPage from "./QuizPage";
import DestinationPage from "./DestinationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Make sure to create an App.css file for App styling

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exath path="/" Component={HomePage} />
          <Route exath path="/quiz-page" Component={QuizPage} />
          <Route exath path="/destination-page" Component={DestinationPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
