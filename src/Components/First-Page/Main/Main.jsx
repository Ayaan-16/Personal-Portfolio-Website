import React from "react";
import "./Main.scss";
import Resume from "./Ayaan-Resume.pdf";
const Main = () => {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openResume = () => {
    window.open(Resume);
  };
  return (
    <div id="top">
      <nav>
        <div className="navbar">
          <a onClick={() => scrollToId("projects")}>Projects</a>
          <a onClick={() => openResume()}>Resume</a>
          <a onClick={() => scrollToId("2nd-page")}>About</a>
          <a onClick={() => scrollToId("skills")}>Skills</a>
        </div>
      </nav>
      <div className="all">
        <div className="name">
          <a onClick={() => scrollToId("top")}>{"<Ayaan />"}</a>
        </div>
        <div className="all">
          <div className="center-text">
            {"Ayaan Noman"}
            <div className="second-center-text">
              {"Young Talented Web Developer"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
