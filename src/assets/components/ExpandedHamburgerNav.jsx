import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { HamburgerContext } from "../context/HamburgerContext";
import AuthContext from "../context/AuthContext";
import LogOutBtn from "./LogOutBtn";
import LogInLink from "./LogInLink";
import RegisterLink from "./RegisterLink";
import UserWelcome from "./UserWelcome";

const ExpandedNav = () => {
  const { isExpanded } = useContext(HamburgerContext);
  const { user, loading } = useContext(AuthContext);

  return (
    <nav className={`expandedNav ${isExpanded ? "active" : ""}`}>
      {!loading &&
        (user ? (
          <div>
            <UserWelcome />
            <LogOutBtn />
            <NavLink
              to="/bookings"
              id="bookingsLink"
              end
              className={({ isActive }) =>
                `navlink ${isActive ? "active" : ""}`
              }
            >
              Bookings
            </NavLink>
          </div>
        ) : (
          <div className="headerLinks">
            <LogInLink />
            <RegisterLink />
          </div>
        ))}
      <NavLink
        to="/events"
        end
        id="eventsLink"
        className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
      >
        <span className="navlinkText">Events</span>
      </NavLink>
    </nav>
  );
};

export default ExpandedNav;
