import React from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import styles from "./SearchExercises.module.css";
const SearchExercises = () => {
  let { searchName, filterHandler, searchExercises } = useExerciseContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles.form}
    >
      <div className={styles["form-control"]}>
        <input
          type="text"
          value={searchName}
          placeholder="search exercises..."
          onChange={filterHandler}
        />
        <button onClick={searchExercises}>search</button>
      </div>
    </form>
  );
};

export default SearchExercises;
