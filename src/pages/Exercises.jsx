import React from "react";
import BodyParts from "../components/BodyParts";
import Exercises from "../components/Exercises";
import Paginate from "../components/Paginate";
import SearchExercises from "../components/SearchExercises";
const ExercisePage = () => {
  return (
    <>
      <SearchExercises />
      <BodyParts />
      <Exercises />
      <Paginate />
    </>
  );
};

export default ExercisePage;
