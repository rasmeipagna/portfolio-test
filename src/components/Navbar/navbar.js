import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">Clients</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>

            <button className="desktopMenu">
              <img src="" alt="" className="destokMenuImg" />Contact me
            </button>


        </div>
        
    </nav>
  )
}

export default Navbar;