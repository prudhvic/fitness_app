import React from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import Skeleton from "../utils/Skeleton";
import ExerciseCard from "./ExerciseCard";
import styles from "./Exercises.module.css";
const Exercises = () => {
  let loaders = [1, 2, 3, 4, 5, 6, 7, 10, 123, 344];
  let { currentExercises: exercises } = useExerciseContext();
  if (!exercises && exercises.length == 0) {
    return loaders.map((num) => <Skeleton key={num} />);
  }
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
