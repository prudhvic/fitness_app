import React from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import gymImg from "../assets/icons/gym.png";
import styles from "./BodyParts.module.css";
const BodyParts = () => {
  let { bodyParts, fetchByBodyPart } = useExerciseContext();

  return (
    <div className={styles.container}>
      <div className={styles.parts}>
        {bodyParts.map((part, index) => (
          <div key={index} onClick={() => fetchByBodyPart(part)}>
            <img src={`/images/${part}.jpg`} alt="gym" />
            <h3>{part}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyParts;
