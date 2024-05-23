import React, { useEffect, useState } from "react";

import "./Projects.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ayaan-16/repos"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleOpenLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className="container1">
      <h1 className="head">My Projects</h1>
      <div className="row1 d-flex flex-wrap">
        {projects.map((project) => (
          <div className="col-md-6" key={project.id}>
            <div className="card d-flex justify-content-center">
              <div className="card-body text-center">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>Languages: {project.language}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenLink(project.html_url)}
                >
                  Repo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
