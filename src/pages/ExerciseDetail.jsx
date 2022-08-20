import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
const ExerciseDetail = () => {
  let [exercise, setExercise] = useState({});
  let params = useParams();
  useEffect(() => {
    let fetchExercise = async () => {
      let data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
        ExerciseOptions
      );
      setExercise(data);
    };
    fetchExercise();
  }, [params.id]);
  console.log(exercise);
  return (
    <div>
      <div>
        <img src={exercise.gifUrl} alt={exercise.name} />
      </div>
    </div>
  );
};

export default ExerciseDetail;
