import React from "react";
import "./AboutMe.scss";
import Image1 from "../Images/programmer.png";
import Image2 from "../Images/blue.png";
import Image3 from "../Images/monitor.png";
import Resume from "./Ayaan-Resume.pdf";

function AboutMe() {
  const openResume = () => {
    window.open(Resume);
  };

  return (
    <div id="2nd-page" className="container">
      <div className="row">
        <div className="col">
          <img src={Image2} className="image2" alt="Blue" />
        </div>
        <div className="col">
          <img src={Image1} className="image1" alt="Programmer" />
          <h1 className="te">About Me</h1>
          <p className="t">
            My name is Ayaan Noman.
            <br />
            I'm a Coding Lover and I have been coding for 3-4 years.
            <br />
            I am 16 years old.
            <br />
            I am a Matric Graduate.
            <br />
            I'm a Front End React Developer with Redux.
            <br />
            My first programming language was Python.
          </p>
          <button className="ResumeButton" onClick={openResume}>
            Resume
          </button>
        </div>
        <img src={Image3} className="image3" alt="Monitor" />
      </div>
    </div>
  );
}

export default AboutMe;
