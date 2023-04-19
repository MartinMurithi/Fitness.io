import React, { useEffect, useState } from 'react'
import {options} from '../../Utils/Options'
import axios from "axios"
import {useParams} from 'react-router-dom'

const ExerciseDetails = () => {
    const { exerciseId } = useParams();
    const EXERCISE_DETAIL_API = `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`;
    
  const [exercise, setExercise] = useState({});
  console.log(exerciseId);
    
    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await axios.get(EXERCISE_DETAIL_API, options);
        //     const data = response.data;
        // setExercise(data);
        //     console.log(data);
        // };
        // fetchData()
    }, []);
  return (
      <div className='detailsPage'>
          <p>{ exercise.name }</p>
    </div>
  )
}

export default ExerciseDetails