import React, { useState } from "react";
import DestinationHeader from "./DestinationHeader";
import WeatherCards from "./WeatherCards";
import QuestionCard from "./QuestionCard";
import WeatherCard from "./WeatherCard"; // Assuming this is the correct path
import "./App.css";
import { useNavigate } from "react-router-dom";

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

import CulinaryExperiencesImage from "./resources/activities/CulinaryExperiences.png";
import CulturalToursImage from "./resources/activities/CulturalTours.png";
import HistoricalExplorationImage from "./resources/activities/HistoricalExploration.png";
import LuxuryExperiencesImage from "./resources/activities/LuxuryExperiences.png";
import NatureandWildlifeImage from "./resources/activities/NatureandWildlife.png";
import NightlifeImage from "./resources/activities/Nightlife.png";
import OutdoorAdventuresImage from "./resources/activities/OutdoorAdventures.png";
import ShoppingImage from "./resources/activities/Shopping.png";
import SightseeingImage from "./resources/activities/Sightseeing.png";
import SnorkelingandDivingImage from "./resources/activities/SnorkelingandDiving.png";
import WaterSportsImage from "./resources/activities/WaterSports.png";

import FamilyImage from "./resources/travellers/Family.png";
import FriendsImage from "./resources/travellers/Friends.png";
import PartnerImage from "./resources/travellers/Partner.png";
import SoloImage from "./resources/travellers/Solo.png";

import backgroundImage from "./resources/backgrounds/Questions cards.png";

const Activities = {
  CulinaryExperiences: {
    name: "CulinaryExperiences",
    img: CulinaryExperiencesImage,
    text: "",
  },
  CulturalTours: { name: "Cultural Tours", img: CulturalToursImage, text: "" },
  HistoricalExploration: {
    name: "Historical Exploration",
    img: HistoricalExplorationImage,
    text: "",
  },
  LuxuryExperiences: {
    name: "Luxury Experiences",
    img: LuxuryExperiencesImage,
    text: "",
  },
  OutdoorAdventures: {
    name: "Outdoor Adventures",
    img: OutdoorAdventuresImage,
    text: "",
  },
  Nightlife: { name: "Nightlife", img: NightlifeImage, text: "" },
  NatureAndWildlife: {
    name: "Nature and Wildlife",
    img: NatureandWildlifeImage,
    text: "",
  },
  Shopping: {
    name: "Shopping",
    img: ShoppingImage,
    text: "",
  },

  Sightseeing: {
    name: "Sightseeing",
    img: SightseeingImage,
    text: "",
  },
  SnorkelingandDiving: {
    name: "Snorkeling and Diving",
    img: SnorkelingandDivingImage,
    text: "",
  },
  WaterSports: { name: "Water Sports", img: WaterSportsImage, text: "" },
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

const Travellers = {
  DryDesert: { name: "", img: FamilyImage, text: "" },
  Tropical: { name: "", img: FriendsImage, text: "" },
  Temperate: { name: "", img: PartnerImage, text: "" },
  Continental: { name: "", img: SoloImage, text: "" },
};
let selectedClimate = undefined;

const whenQuestion = "When would you like to go?";
const climateQuestion = "What is the weather is like?";
const activityQuestion = "What do you want to do?";
const travellersQuestion = "Who are you travelling with?";

function QuizPage() {
  let navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState();
  const [selectedClimate, setSelectedClimate] = useState();

  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

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
  const travellersCards = Object.values(Travellers).map((record, index) => (
    <WeatherCard
      key={index}
      record={record}
      onClick={handleTravellersCardClick}
    />
  ));

  function handleClimateCardClick(climate) {
    console.log("Clicked on:", climate);
    setCurrentQuestion(2);
    setSelectedClimate(climate);
  }
  function handleActivityCardClick(activity) {
    console.log("Clicked on:", activity);
    setCurrentQuestion(3);
    setSelectedActivity(activity);
  }
  function handleTravellersCardClick(traveller) {
    console.log("Clicked on:", traveller);
    setCurrentQuestion(2);
  }
  function navToDestination() {
    navigate("/destination");
  }

  return (
    <div className="Quiz" style={sectionStyle}>
      <DestinationHeader />
      {(() => {
        if (currentQuestion === 1) {
          return (
            <div>
              <QuestionCard question={travellersQuestion} />
              <WeatherCards cards={travellersCards} />
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
              <WeatherCard
                record={{
                  name: "Find your destination!",
                  img: TropicalImage,
                  text: "",
                }}
                onClick={navToDestination}
              />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default QuizPage;
