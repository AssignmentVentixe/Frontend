import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { logout } from "../../services/auth";

const LogOutBtn = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("jwtToken");
        setUser(null);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  return (
    <button className="logOutBtn btn" onClick={handleLogout}>
      <span>Log Out</span>
    </button>
  );
};

export default LogOutBtn;
