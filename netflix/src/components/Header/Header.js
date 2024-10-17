import React, { useState } from 'react';
import "./header.css"; // Your CSS file
import NetflixLogo from "../../assets/images/NetflixLogo.png"; // Import your logo
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle mobile menu
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        
      <div className="header_logo">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" className="logo" />
        </div>
        <div className="header_left">
          {/* Hamburger Menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            ☰
          </div>

          
          {/* Mobile Menu */}
          <ul className={`mobile_menu ${menuActive ? 'active' : ''}`}>

            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        

        {/* Right Side of Header */}
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
