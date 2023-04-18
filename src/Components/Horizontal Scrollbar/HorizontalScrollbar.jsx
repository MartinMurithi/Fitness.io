import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBodyPartsList,
  options,
} from "../../Redux/Features/ExerciseSlice";
import "./HorizontalScrollbar.css";

function HorizontalScrollbar() {
  const BODY_PARTS_LIST_API =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

  const [category, setCategory] = useState([]);
  const data = useSelector((state) => state.exercise.bodyPartsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyPartsList(BODY_PARTS_LIST_API, options));
    setCategory(data);

  }, []);

  console.log(category);
  return (
    <div className="categoryList">
      {category && category.length > 0
        ? category.map((category) => {
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
        : <h5>llllllllll</h5>}
    </div>
  );
}

export default HorizontalScrollbar;
