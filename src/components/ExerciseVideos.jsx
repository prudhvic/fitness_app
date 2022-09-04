import React from "react";
import ExerciseVideoCard from "./ExerciseVideoCard";
import styles from "./ExerciseVideos.module.css"
const ExerciseVideos = ({ Exercisevideos, name }) => {
  console.log(Exercisevideos);
  return (
    <div className={styles.container}>
      <h2>
        Watch <span>{name}</span> exercise videos
      </h2>
      <div className={styles.videos}>
        {Exercisevideos?.slice(0, 3)?.map((item, index) => (
          <ExerciseVideoCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
