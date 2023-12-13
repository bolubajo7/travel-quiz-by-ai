// App.js - This would be your main component.
import React from "react";
import DestinationHeader from "./DestinationHeader";
import WeatherCards from "./WeatherCards";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Make sure to create an App.css file for App styling

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exath path="/" Component={HomePage} />
          <Route exath path = "/quiz-page" Component={HomePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
