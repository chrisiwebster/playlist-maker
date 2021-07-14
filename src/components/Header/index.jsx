import React from "react";
import boy from "./singing_microphone_boy.png";
import "./styles.css";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img
        src={boy}
        alt="Boy singing into microphone"
        title="Decorative image"
      />
    </header>
  );
};

export default Header;
