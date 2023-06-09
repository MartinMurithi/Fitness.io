import React, { useEffect, useState } from "react";
import "./Exercises.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { exerciseOptions } from "../../Utils/Options";
import { ThreeCircles } from "react-loader-spinner";
function Exercises() {
  const EXERCISES_API = "https://exercisedb.p.rapidapi.com/exercises";
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(EXERCISES_API, exerciseOptions);
      const data = response.data;
      setExercises(data);
      console.log(exercises);
    };
    fetchData();
  }, []);
  return (
    <div className="allExercisesSection">
      {/* <p className="allExercisesTitle">All Exercises</p> */}

      <div className="exerciseCards">

        {exercises && exercises.length > 0
          ? exercises.map((exercise) => {
              return (
                <Link
                  to={`/exercises/${exercise.id}`}
                  className="allExercisesList"
                  key={exercise.id}
                >
                  <div className="allExerciseCardItem" key={exercise.id}>
                    <img
                      src={exercise.gifUrl}
                      alt={exercise.name}
                      className="exerciseImg"
                      loading="lazy"
                    />

                    <div className="btnInfo">
                      <button className="btnName">{exercise.bodyPart}</button>
                      <button className="btnTarget">{exercise.target}</button>
                    </div>
                    <p className="exerciseName">{exercise.name}</p>
                  </div>
                </Link>
              );
            })
          : <ThreeCircles
            color='red'/>}
      </div>
    </div>
  );
}

export default Exercises;
