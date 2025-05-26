import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HamburgerContext } from '../context/HamburgerContext';

const ExpandedNav = () => {
  const { isExpanded } = useContext(HamburgerContext);

  return (
    <nav className={`expandedNav ${isExpanded ? 'active' : ''}`}>
      <NavLink to="/events" end id='eventsLink' className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>
        <span className='navlinkText'>Events</span>
      </NavLink>
      <NavLink to="/bookings" end id='bookingsLink' className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>
        <span className='navlinkText'>Bookings</span>
      </NavLink>
    </nav>
  );
};

export default ExpandedNav;