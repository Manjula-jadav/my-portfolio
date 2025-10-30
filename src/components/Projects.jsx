import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Weather Prediction App",
      description:
        "A responsive weather prediction web app built using React and OpenWeather API. It allows users to search for cities and displays real-time weather details like temperature, humidity, and conditions with dynamic icons and backgrounds.",
      image: "/images/weather.jpg", // put inside public/images/
      tech: ["Frontend", "React", "API Integration"],
    },
    {
      title: "Human Scream Detection and Analysis for Controlling Crime Rate",
      description:
        "An AI & ML-based project that detects human screams using MFCC audio features. It analyzes sound patterns to identify distress and sends emergency alerts via Twilio, aiming to help reduce crime rates and ensure public safety.",
      image: "/images/scream.png", // put inside public/images/
      tech: ["AI & ML", "Python", "Kivy", "Twilio"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Explore my portfolio of web development and AI/ML projects. Each project
        demonstrates different technologies and real-world problem-solving.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
