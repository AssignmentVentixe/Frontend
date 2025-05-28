import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

const LogOutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button className="logOutBtn btn" onClick={handleLogout}>
      <span>Log Out</span>
    </button>
  );
};

export default LogOutBtn;
