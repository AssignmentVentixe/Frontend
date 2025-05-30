import React from "react";
import { NavLink } from "react-router-dom";

const RegisterLink = () => {
  return (
    <NavLink to="/register" end className="registerLink link">
      <span>Register</span>
    </NavLink>
  );
};

export default RegisterLink;
