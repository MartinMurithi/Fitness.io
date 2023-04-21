import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HorizontalScrollbar.css";
import { options } from "../../Utils/Options";
import axios from "axios";
import { Link } from "react-router-dom";

function HorizontalScrollbar() {
  const BODY_PARTS_LIST_API =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

  const [category, setCategory] = useState(["Back", "Cardio", "Chest", "Lower arms", "Lower legs", "Neck", "Shoulders", "Upper arms", "Upper legs", "Waist"]);
  
  useEffect(() => {
  //       const fetchData = async () => {
  //         const response = await axios.get(BODY_PARTS_LIST_API, options);
  //         const data = response.data;
  //         setCategory(data);
  // }
  // fetchData()
      
  }, []);

  console.log(category);
  return (
    <div className="categoryList">
      {category && category.length > 0 ? (
        category.map((category) => {
          return (
            <div className="categoryItem">
              <div className="imgCategory">
                <img
                  src="/Assets/icons/gym.png"
                  alt="gym icon"
                  className="categoryImg"
                />
              </div>
              <div className="categoryNameDiv">
                <p className="categoryName">{category}</p>
              </div>
              </div>
          );
        })
      ) : (
        <h5>llllllllll</h5>
      )}
    </div>
  );
}

export default HorizontalScrollbar;
