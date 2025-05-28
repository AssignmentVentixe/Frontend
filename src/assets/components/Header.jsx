import React from "react";
import BreadcrumbNav from "./BreadcrumbNav";
import UserWelcome from "./UserWelcome";

const Header = () => {
  return (
    <header>
      <div className="breadcrumbContainer">
        <BreadcrumbNav />
      </div>
      <UserWelcome />
    </header>
  );
};

export default Header;
