import React from "react";
import { useEffect } from "react";
import BodyParts from "../components/BodyParts";
import Exercises from "../components/Exercises";
import Paginate from "../components/Paginate";
import SearchExercises from "../components/SearchExercises";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
const ExercisePage = () => {
  let { user, loading } = useAuthContext();
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth/signin");
    } else {
      navigate("/exercises");
    }
  }, [user, navigate]);
  if (loading) {
    return <Loader />;
  }
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
