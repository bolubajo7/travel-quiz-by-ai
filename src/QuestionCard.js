// QuestionCard.js
import React from "react";
import styles from "./QuestionCard.module.css"; // Make sure to create a QuestionCard.module.css file for styling

const QuestionCard = ({ question, bodyText }) => {
  return (
    <div className={styles.questionCard}>
      <h2 className={styles.question}>{question}</h2>
      <p className={styles.bodyText}>{bodyText}</p>
    </div>
  );
};

export default QuestionCard;
