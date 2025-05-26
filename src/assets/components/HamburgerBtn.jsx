import React, { useContext } from 'react';
import { HamburgerContext } from '../context/HamburgerContext';

const HamburgerBtn = () => {
  const { isExpanded, toggleExpandedNav } = useContext(HamburgerContext);

  return (
    <>
      <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden"
        checked={isExpanded} onChange={toggleExpandedNav} />
      <label htmlFor="checkbox2" className="hamburgerBtn">
        <div className="hamburger hamburger2">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </>
  );
};

export default HamburgerBtn;