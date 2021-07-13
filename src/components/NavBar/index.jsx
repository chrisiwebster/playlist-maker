import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

//components
import Button from "../Button";

const NavBar = ({ handleNavClick, status, expiresIn, accessToken }) => {
  return (
    <div className="nav-wrapper">
      <div id="icon-wrapper">
        <i
          tabIndex="0"
          onKeyDown={() => handleNavClick()}
          onClick={() => handleNavClick()}
          className={status === true ? "fas fa-times" : "fas fa-hamburger"}
        ></i>
        {accessToken === "" && (
          <Link to="/">
            <Button type="button" name="Sign in" />
          </Link>
        )}
        {expiresIn !== undefined && <p>Signed in</p>}
      </div>
      <nav>
        <ul
          className={status ? "navigation active" : "navigation"}
          role="navigation"
        >
          <li onClick={() => handleNavClick()}>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li onClick={() => handleNavClick()}>
            <NavLink to="/search" className="nav-item">
              Search songs
            </NavLink>
          </li>
          <li onClick={() => handleNavClick()}>
            <NavLink to="/view-playlists" className="nav-item">
              View playlists
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
