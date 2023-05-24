import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navigation">
      <div className="navBar">
        <div className="logo">
          <img
            src="/Assets/images/Logo.png"
            alt="Logo"
            width={"48px"}
            height={"48px"}
            className="imgLogo"
            loading="lazy"
          />
        </div>

        <div className="nav">
          <NavLink to={"/"} id="navLink">
            Home
          </NavLink>
          <NavLink to={"/exercises"} id="navLink">
            Exercises
          </NavLink>
        </div>
      </div>
    </div>
  );
};
