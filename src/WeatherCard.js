import React from "react";
import styles from "./WeatherCard.module.css";

const WeatherCard = ({ index, record, onClick }) => {
  const cardStyle = {
    backgroundImage: `url(${record.img})`,
    backgroundSize: "cover", // Ensure the image covers the entire card
    backgroundPosition: "center", // Center the image
  };

  return (
    <div
      className={styles.weatherCard}
      style={cardStyle}
      onClick={() => onClick(record)}
    >
      <h2 className={styles.title}>{record.name}</h2>
      <p className={styles.bodyText}>{record.text}</p>
    </div>
  );
};

export default WeatherCard;
