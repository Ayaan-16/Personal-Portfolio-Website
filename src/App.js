import React from "react";
import "./App.css";
import Main from "./Components/First-Page/Main/Main.jsx";
import ThemeSwitcher from "./Components/First-Page/ThemeSwitcher/ThemeSwitcher.jsx";
import AboutButton from "./Components/First-Page/AboutButton/AboutButton.jsx";
import SocialMedia from "./Components/First-Page/SocialMedia/SocialMedia.jsx";
import AboutMe from "./Components/Second-Page/AboutMe/AboutMe.jsx";
import Projects from "./Components/Third-Page/Projects.jsx";
import Skills from "./Components/Fourth-Page/Skills.jsx";
import ContactMe from "./Components/Fifth-Page/ContactMe.jsx";

function App() {
  return (
    <div className="App">
      <ThemeSwitcher className="ThemeSwitcher" />
      <Main className="Main" />
      <AboutButton className="AboutButton" />
      <SocialMedia className="SocialMedia" />
      <AboutMe className="AboutMe" />
      <Projects className="Projects" />
      <Skills className="Skills" />
      <ContactMe className="ContactMe" />
    </div>
  );
}

export default App;
