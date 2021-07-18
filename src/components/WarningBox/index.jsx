import React from "react";

//CSS
import "./styles.css";

const WarningBox = ({ errorMessage }) => {
  return (
    <div className="warning-box">
      <div className="warning-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <div className="warning-text">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default WarningBox;
