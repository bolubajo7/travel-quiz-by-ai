import React from "react";
import WeatherCard from "./WeatherCard";
import styles from "./WeatherCards.module.css";
import antuiga from "./resources/__Country_-_Antigua_and_Barbuda.png"; // Replace with actual image filename and extension
import france from "./resources/__Country_-_France__1_.png"; // Replace with actual image filename and extension
import finland from "./resources/__Country_-_Finland.png"; // Replace with actual image filename and extension

// WeatherCards.js - This component will contain the individual weather cards.

export const WeatherCards = () => {
  return (
    <section className={styles.weatherCards}>
      <WeatherCard title="Antigua" backgroundImg={antuiga} />
      <WeatherCard title="Marseille" backgroundImg={france} />
      <WeatherCard title="Oslo" backgroundImg={finland} />
    </section>
  );
};
export default WeatherCards;
