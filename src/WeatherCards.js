import React from "react";
import styles from "./WeatherCards.module.css";
import WeatherCard from "./WeatherCard";
import antuiga from "./resources/__Country_-_Antigua_and_Barbuda.png"; // Replace with actual image filename and extension
import france from "./resources/__Country_-_France__1_.png"; // Replace with actual image filename and extension
import finland from "./resources/__Country_-_Finland.png"; // Replace with actual image filename and extension

// WeatherCards.js - This component will contain the individual weather cards.

export const WeatherCards = ({ cards }) => {
  return <section className={styles.weatherCards}>{cards}</section>;
};
export default WeatherCards;
