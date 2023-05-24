import React, { useEffect, useState } from "react";
import { exerciseOptions } from "../../Utils/Options";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ExerciseDetails.css";

const ExerciseDetails = () => {
  const { exerciseId } = useParams();
  const EXERCISE_DETAIL_API = `https://exercisedb.p.rapidapi.com/exercises`;

  const [exercise, setExercise] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${EXERCISE_DETAIL_API}/exercise/${exerciseId}`,
          exerciseOptions
        );
        const data = response.data;
        setExercise(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();

   
  }, []);
  return (
    <div className="detailsPage">
      <div className="gifContainer">
        <img src={exercise.gifUrl} alt={exercise.name} className="gifDetail" />
      </div>

      <div className="textDetailsContainer">
        <p className="name">{exercise.name}</p>
        <p className="description">
          Exercises keep you strong. {exercise.name} is one of the best
          exercises to target your lats. It will help you improve your mood and
          gain energy.
        </p>

        <div className="extraInfo">
          <div className="extraContainerInfo">
            <img
              src="/Assets/icons/body-part.png"
              alt=""
              className="imgDetail"
            />
            <p className="bodyPart">{exercise.bodyPart}</p>
          </div>
          <div className="extraContainerInfo">
            <img src="/Assets/icons/target.png" alt="" className="imgDetail" />
            <p className="target">{exercise.target}</p>
          </div>
          <div className="extraContainerInfo">
            <img
              src="/Assets/icons/equipment.png"
              alt=""
              className="imgDetail"
            />
            <p className="equipment">{exercise.equipment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;