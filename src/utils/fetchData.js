export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "7b86d4e500msh85a124f55593f0fp184db1jsn7b8cdc07b322",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export let fetchData = async (url, options) => {
  let res = await fetch(url, options);
  let data = await res.json();
  return data;
};
