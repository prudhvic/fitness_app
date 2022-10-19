import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Exercises from "../components/Exercises";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {
  ExerciseOptions,
  ExerciseVideoOptions,
  fetchData,
} from "../utils/fetchData";
import Loader from "../utils/Loader";
const ExerciseDetail = () => {
  let [exercise, setExercise] = useState({});
  const { user, isAuthenticated, isLoading } = useAuth0();
  let params = useParams();
  let [targetExercises, setTargetExercises] = useState([]);
  let [equipmentExercises, setEquipmentExercises] = useState([]);
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
  let [Exercisevideos, setExerciseVideos] = useState([]);
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
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exercise.name} exercise`,
        ExerciseVideoOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
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
  }, [params.id, exercise.name]);
  console.log(targetExercises);
  console.log(exercise);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <Detail exercise={exercise} />
      <ExerciseVideos Exercisevideos={Exercisevideos} name={exercise.name} />
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
