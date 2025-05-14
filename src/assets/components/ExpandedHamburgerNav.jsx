import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HamburgerContext } from '../common/HamburgerContext';

const ExpandedNav = () => {
  const { isExpanded } = useContext(HamburgerContext);

  return (
    <nav className={`expandedNav ${isExpanded ? 'active' : ''}`}>

      <NavLink to="/events" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >Features</NavLink>
      <NavLink to="/bookings" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >Features</NavLink>
      <NavLink to="/" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >Features</NavLink>
            <NavLink to="/" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >Features</NavLink>
    </nav>
  );
};

export default ExpandedNav;