import React from "react";

import "./AboutButton.scss";

const AboutButton = () => {
  const handleClick = () => {
    const element = document.getElementById("2nd-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button onClick={handleClick} className="About-Button">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutButton;
