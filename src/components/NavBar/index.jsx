import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = ({ handleNavClick, status }) => {
  return (
    <div className="nav-wrapper">
      <i
        tabIndex="0"
        onKeyDown={() => handleNavClick()}
        onClick={() => handleNavClick()}
        className={status === true ? "fas fa-times" : "fas fa-hamburger"}
      ></i>
      <nav>
        <ul
          className={status ? "navigation active" : "navigation"}
          role="navigation"
        >
          <li onClick={() => handleNavClick()}>
            <NavLink to="/playlist-maker" className="nav-item">
              Home
            </NavLink>
          </li>
          <li onClick={() => handleNavClick()}>
            <NavLink to="/playlist-maker/search" className="nav-item">
              Search songs
            </NavLink>
          </li>
          <li onClick={() => handleNavClick()}>
            <NavLink to="/playlist-maker/view-playlists" className="nav-item">
              View playlists
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
