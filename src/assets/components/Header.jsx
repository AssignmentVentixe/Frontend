import React, { useContext } from "react";
import UserWelcome from "./UserWelcome";
import LogInLink from "./LogInLink";
import AuthContext from "../context/AuthContext";
import RegisterLink from "./RegisterLink";

const Header = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <header>
      {loading ? null : user ? (
        <UserWelcome />
      ) : (
        <div className="headerLinks">
          <LogInLink />
          <span> / </span>
          <RegisterLink />
        </div>
      )}
    </header>
  );
};

export default Header;
