// App.js - This would be your main component.
import React from "react";
import DestinationHeader from "./DestinationHeader";
import WeatherCards from "./WeatherCards";
import "./App.css"; // Make sure to create an App.css file for App styling

function App() {
  return (
    <div className="App">
      <DestinationHeader />
      <WeatherCards />
    </div>
  );
}

export default App;
