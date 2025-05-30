import React, { useContext } from "react";

import Logo from "../components/Logo";
import LogoutBtn from "./LogOutBtn";
import HamburgerBtn from "./HamburgerBtn";
import ExpandedHamburgerNav from "./ExpandedHamburgerNav";
import { HamburgerProvider } from "../context/HamburgerProvider";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <HamburgerProvider>
      <nav className="navbar">
        <Logo />
        <div className="HamburgerContainer">
          <HamburgerBtn />
          <ExpandedHamburgerNav />
        </div>
        <div className="navlinkContainer">
          <NavLink
            to="/events"
            end
            id="eventsLink"
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
          >
            <span className="navlinkText">Events</span>
          </NavLink>
          {user ? (
            <NavLink
              to="/bookings"
              end
              id="bookingsLink"
              className={({ isActive }) =>
                `navlink ${isActive ? "active" : ""}`
              }
            >
              <span className="navlinkText">Bookings</span>
            </NavLink>
          ) : null}
        </div>
        {user ? <LogoutBtn /> : null}
      </nav>
    </HamburgerProvider>
  );
};

export default Navbar;
