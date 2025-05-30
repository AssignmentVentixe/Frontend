import React from "react";
import { NavLink } from "react-router-dom";

const LogInBtn = () => {
  return (
    <NavLink to="/login" end className="logInLink link">
      <span>Log in</span>
    </NavLink>
  );
};

export default LogInBtn;
