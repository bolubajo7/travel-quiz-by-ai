import React from "react";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ title, bodyText, backgroundImg }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover", // Ensure the image covers the entire card
    backgroundPosition: "center", // Center the image
  };

  return (
    <div className={styles.weatherCard} style={cardStyle}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.bodyText}>{bodyText}</p>
    </div>
  );
};

export default WeatherCard;
