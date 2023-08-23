import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">
          <button className="desktopMenu">
            <img src="" alt="" className="destokMenuImg" />Contact me</button>


        </div>
        
    </nav>
  )
}

export default Navbar;