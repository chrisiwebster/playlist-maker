import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

//components
import Button from "../Button";

const NavBar = ({
  handleNavClick,
  status,
  expiresIn,
  accessToken,
  handleSignIn,
}) => {
  return (
    <div id="nav">
      {accessToken === "" && (
        <Link to="/">
          <Button
            type="button"
            name="Sign in"
            className="btn-primary"
            onClick={() => handleSignIn()}
          />
        </Link>
      )}

      {expiresIn !== undefined && (
        <nav>
          <i
            tabIndex="0"
            onKeyDown={() => handleNavClick()}
            onClick={() => handleNavClick()}
            className={status === true ? "fas fa-times" : "fas fa-hamburger"}
          ></i>

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
              <NavLink to="/about" className="nav-item">
                About
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
      )}
    </div>
  );
};

export default NavBar;
