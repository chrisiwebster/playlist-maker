import React from "react";
import { Link, HashRouter } from "react-router-dom";
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
        <HashRouter>
          <ul
            className={status ? "navigation active" : "navigation"}
            role="navigation"
          >
            <li onClick={() => handleNavClick()}>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li onClick={() => handleNavClick()}>
              <Link to="/search" className="nav-item">
                Search songs
              </Link>
            </li>
            <li onClick={() => handleNavClick()}>
              <Link to="/view-playlists" className="nav-item">
                View playlists
              </Link>
            </li>
          </ul>
        </HashRouter>
      </nav>
    </div>
  );
};

export default NavBar;
