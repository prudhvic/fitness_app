export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "113db1799amsh2f170c9a3ee21e4p1c8da6jsne393669042a8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const ExerciseVideoOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/video/related",
  headers: {
    "X-RapidAPI-Key": "113db1799amsh2f170c9a3ee21e4p1c8da6jsne393669042a8",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export let fetchData = async (url, options) => {
  let res = await fetch(url, options);
  let data = await res.json();
  return data;
};
