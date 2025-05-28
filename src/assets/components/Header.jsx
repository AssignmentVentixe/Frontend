import React, { useContext } from "react";
import BreadcrumbNav from "./BreadcrumbNav";
import UserWelcome from "./UserWelcome";
import LogInBtn from "./LogInBtn";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <div className="breadcrumbContainer">
        <BreadcrumbNav />
      </div>
      {user ? <UserWelcome /> : <LogInBtn />}
    </header>
  );
};

export default Header;
