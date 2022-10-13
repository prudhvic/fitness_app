import React from "react";
import { useEffect } from "react";
import BodyParts from "../components/BodyParts";
import Exercises from "../components/Exercises";
import Paginate from "../components/Paginate";
import SearchExercises from "../components/SearchExercises";
import { useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
import { useAuth0 } from "@auth0/auth0-react";
const ExercisePage = () => {
  let navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (!user && !isAuthenticated) {
      navigate("/auth/signin");
    }
  }, [user]);
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
