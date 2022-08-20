import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExerciseCard.module.css";
const ExerciseCard = ({ id, gifUrl, name, equiment, target, bodyPart }) => {
  return (
    <Link to={`/exercises/${id}`}>
      <div className={styles.card}>
        <img src={gifUrl} alt={name} loading="lazy" />
        <div className={styles.btns}>
          <button>{bodyPart}</button>
          <button>{target}</button>
        </div>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default ExerciseCard;
