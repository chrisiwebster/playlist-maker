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
    <div className="nav-wrapper">
      {accessToken === "" && (
        <Link to="/">
          <Button type="button" name="Sign in" onClick={() => handleSignIn()} />
        </Link>
      )}

      {expiresIn !== undefined && (
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
      )}
    </div>
  );
};

export default NavBar;
