export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
