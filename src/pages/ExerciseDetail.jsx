import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Exercises from "../components/Exercises";
import SimilarExercises from "../components/SimilarExercises";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
const ExerciseDetail = () => {
  let [exercise, setExercise] = useState({});
  let params = useParams();
  let [targetExercises, setTargetExercises] = useState([]);
  let [equipmentExercises, setEquipmentExercises] = useState([]);
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
  useEffect(() => {
    let fetchSimilarExercises = async () => {
      let targetexercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exercise?.target}`,
        ExerciseOptions
      );
      setTargetExercises(targetexercises);
      let equipmentexercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise?.equipment}`,
        ExerciseOptions
      );
      setEquipmentExercises(equipmentexercises);
    };
    fetchSimilarExercises();
  }, [params.id, exercise]);
  console.log(targetExercises);
  console.log(exercise);
  return (
    <div>
      <Detail exercise={exercise} />

      <SimilarExercises
        exercises={targetExercises}
        title="similar target Exercises"
      />
      <SimilarExercises
        exercises={equipmentExercises}
        title="similar equipment Exercises"
      />
    </div>
  );
};

export default ExerciseDetail;
