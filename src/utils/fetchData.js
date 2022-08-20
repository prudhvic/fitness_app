export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    'X-RapidAPI-Key': '33f6a3bec4msh87f6cacfdc7720fp15110ejsnc413b054ce90',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export let fetchData = async (url, options) => {
  let res = await fetch(url, options);
  let data = await res.json();
  return data;
};
