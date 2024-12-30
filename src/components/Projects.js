import React from "react";
import "./project.css";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A responsive weather application using React and OpenWeatherMap API.",
      link: "https://github.com/anilkumarmanuval/my-weather-app",
    },
    {
      title: "Hospital Management System",
      description: "A full-stack application to manage hospital operations.",
      link: "#",
    },
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
