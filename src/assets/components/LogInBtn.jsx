import React from "react";
import { NavLink } from "react-router-dom";

const LogInBtn = () => {
  return (
    <NavLink to="/login" end className="logInBtn">
      <span>Log in</span>
    </NavLink>
  );
};

export default LogInBtn;
