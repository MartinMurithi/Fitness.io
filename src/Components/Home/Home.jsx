import React, { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData, options } from "../../Redux/Features/ExerciseSlice";

function Home() {
  const EXERCISES_API_LINK = "https://exercisedb.p.rapidapi.com/exercises";

  const [exercises, setExerices] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  let exerciseArr = useSelector((state) => state.exercise.exerciseData);

  const handleSearch = () => {
    if (search) {
      dispatch(fetchApiData(EXERCISES_API_LINK, options));

      let filteredData = exerciseArr.filter(exercise => 
        exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExerices(filteredData);
      console.log(filteredData);
      return filteredData;
    }
  };
  console.log(exercises);
  console.log(search);

  return (
    <section>
      <div className="container">
        <div className="containerInfo">
          <p className="infoTitle">Fitness Club</p>
          <p className="info">
            Sweat, Smile <br /> And Repeat
          </p>
          <p className="infoAd">
            Check out the most effective exercises personalized for you
          </p>
          <button className="exploreExercisesBtn">Expolre Exercises</button>
        </div>
        <div className="banner">
          <img src="/Assets/images/banner.png" alt="banner" />
        </div>
      </div>
      <p className="label">Exercise</p>
      <div className="sectionInfo">
        <p className="sectionInfo">
          Awesome exercises you <br /> should know
        </p>
      </div>

      <div className="searchExercisesDiv">
        <input
          type="search"
          name=""
          id="search"
          value={search}
          placeholder="Search exercise"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="searchExerciseBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}

export default Home;
