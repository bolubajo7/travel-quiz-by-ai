import React, { useState } from "react";
import DestinationHeader from "./DestinationHeader";
import WeatherCards from "./WeatherCards";
import QuestionCard from "./QuestionCard";
import WeatherCard from "./WeatherCard"; // Assuming this is the correct path
import "./App.css";

import ContinentalImage from "./resources/climates/Continental.jpg";
import DryDesertImage from "./resources/climates/DryDesert.jpg";
import HighlandImage from "./resources/climates/Highland.jpg";
import IDontMindImage from "./resources/climates/IDontMind.jpg";
import MarineImage from "./resources/climates/Marine.jpg";
import MediterraneanImage from "./resources/climates/Mediterranean.jpg";
import MonsoonImage from "./resources/climates/Monsoon.jpg";
import PolarImage from "./resources/climates/Polar.jpg";
import SubtropicalImage from "./resources/climates/Subtropical.jpg";
import TemperateImage from "./resources/climates/Temperate.jpg";
import TropicalImage from "./resources/climates/Tropical.jpg";

const Activities = {
  Sightseeing: { name: "Sightseeing", img: DryDesertImage, text: "" },
  Shopping: { name: "Shopping", img: DryDesertImage, text: "" },
  BeachActivities: { name: "Beach Activities", img: DryDesertImage, text: "" },
  CulturalTours: { name: "Cultural Tours", img: DryDesertImage, text: "" },
  OutdoorAdventures: {
    name: "Outdoor Adventures",
    img: DryDesertImage,
    text: "",
  },
  CulinaryExperiences: {
    name: "Culinary Experiences",
    img: DryDesertImage,
    text: "",
  },
  HistoricalExploration: {
    name: "Historical Exploration",
    img: DryDesertImage,
    text: "",
  },
  Nightlife: { name: "Nightlife", img: DryDesertImage, text: "" },
  NatureAndWildlife: {
    name: "Nature and Wildlife",
    img: DryDesertImage,
    text: "",
  },
  RelaxationAndSpa: {
    name: "Relaxation and Spa",
    img: DryDesertImage,
    text: "",
  },
  IDontMind: { name: "I Don't Mind!", img: DryDesertImage, text: "" },
};
let selectedActivity = undefined;

const Climates = {
  DryDesert: { name: "Dry/Desert", img: DryDesertImage, text: "" },
  Tropical: { name: "Tropical", img: TropicalImage, text: "" },
  Temperate: { name: "Temperate", img: TemperateImage, text: "" },
  Continental: { name: "Continental", img: ContinentalImage, text: "" },
  Polar: { name: "Polar", img: PolarImage, text: "" },
  Mediterranean: { name: "Mediterranean", img: MediterraneanImage, text: "" },
  Monsoon: { name: "Monsoon", img: MonsoonImage, text: "" },
  Highland: { name: "Highland", img: HighlandImage, text: "" },
  Subtropical: { name: "Subtropical", img: SubtropicalImage, text: "" },
  Marine: { name: "Marine", img: MarineImage, text: "" },
  IDontMind: { name: "I don't mind!", img: IDontMindImage, text: "" },
};
let selectedClimate = undefined;

const whenQuestion = "When would you like to go?";
const climateQuestion = "What is the weather is like?";
const activityQuestion = "What do you like to do on holiday?";

function App() {
  const activityCards = Object.values(Activities).map((activity, index) => (
    <WeatherCard
      key={index}
      record={activity}
      onClick={handleActivityCardClick}
    />
  ));
  const climateCards = Object.values(Climates).map((climate, index) => (
    <WeatherCard
      key={index}
      record={climate}
      onClick={handleClimateCardClick}
    />
  ));

  const [currentQuestion, setCurrentQuestion] = useState(1);

  function handleActivityCardClick(activity) {
    console.log("Clicked on:", activity);
    setCurrentQuestion(3);
    selectedActivity = activity;
  }
  function handleClimateCardClick(climate) {
    console.log("Clicked on:", climate);
    setCurrentQuestion(2);
    selectedClimate = climate;
    console.log(currentQuestion);
  }

  return (
    <div className="App">
      <DestinationHeader />
      {(() => {
        if (currentQuestion === 1) {
          return (
            <div>
              <QuestionCard question={climateQuestion} />
              <WeatherCards cards={climateCards} />
            </div>
          );
        } else if (currentQuestion === 2) {
          return (
            <div>
              <QuestionCard question={activityQuestion} />
              <WeatherCards cards={activityCards} />
            </div>
          );
        } else if (currentQuestion === 3) {
          return (
            <div>
              <QuestionCard question={"Checking our destinations!"} />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
