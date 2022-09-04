import React from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import styles from "./Exercises.module.css";
const Exercises = () => {
  let { currentExercises: exercises } = useExerciseContext();

  return (
    <div className={styles.container}>
      <main className={styles.exercises}>
        {exercises.map((exercise) => (
          <ExerciseCard {...exercise} id={exercise.id} key={exercise.id} />
        ))}
      </main>
    </div>
  );
};

export default Exercises;
