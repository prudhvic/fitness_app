import React from "react";
import ExerciseCard from "./ExerciseCard";
import styles from "./SimilarExercises.module.css";
const SimilarExercises = ({ exercises, title }) => {
  console.log("detail", exercises);
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <main className={styles.exercises}>
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseCard {...exercise} id={exercise.id} key={exercise.id} />
          ))}
      </main>
    </div>
  );
};

export default SimilarExercises;
