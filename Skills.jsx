import React, { useState } from "react";
import "./Skills.scss";

const skillData = {
  technical: [
    { name: "HTML", className: "html" },
    { name: "CSS / SCSS", className: "css" },
    { name: "JavaScript / JSX", className: "javascript" },
    { name: "REACT", className: "react" },
    { name: "Redux", className: "redux" },
    { name: "BootStrap", className: "bootstrap" },
  ],
  soft: [
    { name: "Communication", className: "communication" },
    { name: "Teamwork", className: "teamwork" },
    { name: "Problem-Solving", className: "problem-solving" },
    { name: "Adaptability", className: "adaptability" },
    { name: "Creativity", className: "creativity" },
    { name: "Organization", className: "organization" },
  ],
};

const SkillBar = ({ name, className }) => (
  <div className="skill-bar">
    <p>{name}</p>
    <div className={`skill-progress ${className}`}></div>
  </div>
);

function Skills() {
  const [selectedSkillType, setSelectedSkillType] = useState("technical");
  const [animationKey, setAnimationKey] = useState(0);

  const handleSkillTypeChange = (type) => {
    setSelectedSkillType(type);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const skills = skillData[selectedSkillType];

  const column1 = skills.slice(0, 3);
  const column2 = skills.slice(3, 6);

  return (
    <div>
      <div>
        <h1 id="skills" className="h">
          Skills
        </h1>
      </div>
      <div className="skills-tabs">
        <div className="skills-tab-container">
          <span
            className={`skills-tab ${
              selectedSkillType === "technical" ? "active" : ""
            }`}
            onClick={() => handleSkillTypeChange("technical")}
          >
            Technical Skills
          </span>
          <span
            className={`skills-tab ${
              selectedSkillType === "soft" ? "active" : ""
            }`}
            onClick={() => handleSkillTypeChange("soft")}
          >
            Soft Skills
          </span>
        </div>
      </div>

      <div key={animationKey} className={`skills-container animate`}>
        <div className="skills-column">
          {column1.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              className={skill.className}
            />
          ))}
        </div>
        <div className="skills-column">
          {column2.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              className={skill.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
