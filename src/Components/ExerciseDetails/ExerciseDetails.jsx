import React, { useEffect, useState } from "react";
import { exerciseOptions } from "../../Utils/Options";
import { youtubeOptions } from "../../Utils/Options";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ExerciseDetails.css";
import { Link } from "react-router-dom";
import SimiarExercises from "../SimilarExercises/SimiarExercises";

const ExerciseDetails = () => {
  const { exerciseId } = useParams();
  const EXERCISE_DETAIL_API = `https://exercisedb.p.rapidapi.com/exercises`;
  const EXERCISE_YOUTUBE_VIDEOS_API = `https://youtube-search-and-download.p.rapidapi.com`;

  const [exercise, setExercise] = useState({});
  const [similarExercises, setSimilarExercises] = useState([]);
  // const [slicedData, setSlicedData] = useState([]);

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

//     const fetchSimilarData = async () => {
//       try {
//         const similarTargetExerciseData = await axios.get(
//           `${EXERCISE_DETAIL_API}/target/${exercise.target}`,
//           exerciseOptions
//         );
//         const targetData = similarTargetExerciseData.data;
//         setSimilarExercises(targetData);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
//  const newArrData = similarExercises.slice(1, 5);
//     setSimilarExercises(newArrData)
//    console.log(similarExercises);
    fetchData();
    // fetchSimilarData();

   
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
      <SimiarExercises exercise={exercise.target} />

      {/* SIMILAR EXRCISES */}
      {/* {slicedData && slicedData.length > 0 ? (
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
      )} */}
    </div>
  );
};

export default ExerciseDetails;
