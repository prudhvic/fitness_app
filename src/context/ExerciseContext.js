import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
export let ExerciseContext = createContext({});
let ExerciseContextProvider = ({ children }) => {
  let [exercises, setExercises] = useState([]);
  let [bodyParts, setBodyParts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [exercisesPerPage, setExercisesPerPage] = useState(30);

  let indexOfLastExercise = currentPage * exercisesPerPage;
  let indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  console.log(indexOfFirstExercise, indexOfLastExercise);
  let [searchName, setSearchName] = useState("");
  let [filterExercises, setFilterExercises] = useState([]);
  console.log(currentPage);
  useEffect(() => {
    let fetchExercises = async () => {
      let data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );
      console.log(data);
      setExercises(data);
      setFilterExercises(data);
    };
    fetchExercises();
  }, []);
  useEffect(() => {
    let fetchBodyparts = async () => {
      let data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );
      console.log(data);
      setBodyParts(["all", ...data]);
    };
    fetchBodyparts();
  }, []);

  let fetchByBodyPart = async (BodyPart) => {
    if (BodyPart === "all") {
      setFilterExercises(exercises);
      return;
    }
    let data = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${BodyPart}`,
      ExerciseOptions
    );
    console.log("bodypart", data);
    setFilterExercises(data);
  };

  let currentExercises = filterExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  let filterHandler = (e) => {
    setSearchName(e.target.value);
    const searchedExercises = exercises.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value) ||
        item.target.toLowerCase().includes(e.target.value) ||
        item.equipment.toLowerCase().includes(e.target.value) ||
        item.bodyPart.toLowerCase().includes(e.target.value)
    );
    setFilterExercises(searchedExercises);
  };
  let searchExercises = () => {
    const searchedExercises = exercises.filter(
      (item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase()) ||
        item.target.toLowerCase().includes(searchName.toLowerCase()) ||
        item.equipment.toLowerCase().includes(searchName.toLowerCase()) ||
        item.bodyPart.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilterExercises(searchedExercises);
  };
  console.log(filterExercises, filterExercises.length, "Hi of you");
  return (
    <ExerciseContext.Provider
      value={{
        filterExercises,
        searchName,
        filterHandler,
        fetchByBodyPart,
        currentExercises,
        exercises,
        searchExercises,
        setCurrentPage,
        exercisesPerPage,
        bodyParts,
        currentPage,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
export let useExerciseContext = () => useContext(ExerciseContext);
export default ExerciseContextProvider;
