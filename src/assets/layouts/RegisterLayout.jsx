import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const RegisterLayout = () => {
  return (
    <div className="center-wrapper">
      <div className="signContainer">
        <div className="registerHeader">
          <Logo />
          <h3>Registration</h3>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RegisterLayout;
