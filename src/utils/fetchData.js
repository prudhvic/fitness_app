export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    'X-RapidAPI-Key': 'b143b63771msh87dffa099063379p10533fjsnf4b19b42305e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export let fetchData = async (url, options) => {
  let res = await fetch(url, options);
  let data = await res.json();
  return data;
};
