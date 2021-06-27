import React from "react";
import "./styles.css";

const Header = ({ title, children }) => {
  return (
    <header>
      {children}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
