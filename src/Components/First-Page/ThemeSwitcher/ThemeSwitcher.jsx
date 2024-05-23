import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.scss";
import lightsOn from '../Images/light-on.png'
import lightsOff from '../Images/light-off.png'

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (isDarkTheme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`theme-switcher ${isDarkTheme ? "dark" : "light"}`}>
      <img
        src={isDarkTheme ? lightsOff : lightsOn}
        alt="Theme Switcher"
        className="toggle-image"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
