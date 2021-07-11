import React from "react";

const Header = ({ title, children }) => {
  return (
    <header>
      {children}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
