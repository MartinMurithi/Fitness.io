import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { exerciseOptions } from "../../Utils/Options";
import HorizontalScrollbar from "../Horizontal Scrollbar/HorizontalScrollbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const EXERCISES_API = "https://exercisedb.p.rapidapi.com/exercises";
  const navigate = useNavigate()

  const [exercises, setExerices] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      const fetchData = async () => {
        const response = await axios.get(EXERCISES_API, exerciseOptions);
        const data = response.data;
        setExerices(data);
        // console.log(exercises);
      };
      // fetchData();
      let filteredData = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExerices(filteredData);
      console.log(filteredData);
      setSearch("");
      return filteredData;
    }
  };

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
          <button className="exploreExercisesBtn" onClick={()=>{navigate('/exercises')}}>Expolre Exercises</button>
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

      <div className="categories">
        <HorizontalScrollbar />
      </div>
    </section>
  );
}

export default Home;
