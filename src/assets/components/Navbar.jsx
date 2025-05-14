import React from 'react'
import PageIndicator from './PageIndicator';
import Logo from '../components/Logo'
import HamburgerBtn from './HamburgerBtn'
import ExpandedHamburgerNav from './ExpandedHamburgerNav';
import { HamburgerProvider } from '../common/HamburgerContext';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <HamburgerProvider>
      <nav className='navbar'>
        <PageIndicator />
        <Logo />
        <div className='HamburgerContainer'>
          <HamburgerBtn />
          <ExpandedHamburgerNav />
        </div>
        <div className='navlinkContainer'>
          <NavLink to="/events" end className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>
            <i class="fa-solid fa-ticket"></i>
            <span className='navlinkText'>Events</span>
          </NavLink>
          <NavLink to="/bookings" end className={({ isActive }) => `navlink ${isActive ? 'active' : ''}`}>
            <i class="fa-regular fa-square-check"></i>
            <span className='navlinkText'>Bookings</span>
          </NavLink>
        </div>


      </nav>
    </HamburgerProvider>

  )
}

export default Navbar