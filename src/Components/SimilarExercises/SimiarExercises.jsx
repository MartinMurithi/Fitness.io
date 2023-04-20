import React, { useEffect, useState } from "react";
import { exerciseOptions } from "../../Utils/Options";
import { youtubeOptions } from "../../Utils/Options";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SimiarExercises({ exercise }) {
      const EXERCISE_DETAIL_API = `https://exercisedb.p.rapidapi.com/exercises`;

  const [similarExercises, setSimilarExercises] = useState([]);
  const [slicedData, setSlicedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const similarTargetExerciseData = await axios.get(
        `${EXERCISE_DETAIL_API}/target/${exercise.target}`,
        exerciseOptions
      );
      const targetData = similarTargetExerciseData.data;
      setSimilarExercises(targetData);
      
        const newArrData = similarExercises.slice(1, 5);
      setSlicedData(newArrData);
      };
    //   fetchData()
  }, []);
  console.log(slicedData);

  return (
    <div>
      {/* SIMILAR EXRCISES */}
      {slicedData && slicedData.length > 0 ? (
        slicedData.map((exercise) => {
          return (
            <Link
              to={`/exercises/${exercise.id}`}
              className="similarExerciseCard"
              key={exercise.id}
            >
              <div className="allExerciseCardItem">
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
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}

export default SimiarExercises;
