import React from "react";

//CSS
import "./styles.css";

const Button = ({ type, name, onClick, className, id }) => {
  return (
    <button
      id={id}
      type={type || "button"}
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
