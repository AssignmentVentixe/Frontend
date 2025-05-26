import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <span>Copyright © 2025 Peterdraw</span>
        <nav>
          <NavLink to="/" end >
            <span>Privacy Policy</span>
          </NavLink>
          <NavLink to="/" end >
            <span>Term and conditions</span>
          </NavLink>
          <NavLink to="/" end >
            <span>Contact</span>
          </NavLink>
        </nav>
    </footer>
  )
}

export default Footer