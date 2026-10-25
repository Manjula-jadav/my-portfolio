import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CliniScan: Lung Disease Detection System",
      description:
        "An AI-powered medical imaging system designed to assist in identifying lung abnormalities from medical images. CliniScan combines deep learning techniques, CNN-Transformer architecture, and image preprocessing methods to classify conditions such as COVID-19, pneumonia, and lung opacity. It also incorporates image augmentation and Grad-CAM-based visualization to support model interpretability.",
      image: "/images/scream.png", // put inside public/images/
      tech: ["AI & ML", "Python", "Deep Learning", "CNN", "Transformers"],
    },
    {
      title: "AI Resume Analyzer",
      description:
        "A Python-based application that analyzes resumes by extracting text from PDF documents and evaluating resume content against relevant skills and job requirements. The system helps identify key qualifications, highlight relevant skills, and assess how closely a resume aligns with a target job description, supporting candidates in improving their resumes for specific roles.",
      image: "/images/scream.png", // put inside public/images/
      tech: ["AI & ML", "Python", "NLP", "PyPDF2"],
    },
    {
      title: "Human Scream Detection and Analysis for Controlling Crime Rate",
      description:
        "An AI & ML-based project that detects human screams using MFCC audio features. It analyzes sound patterns to identify distress and sends emergency alerts via Twilio, aiming to help reduce crime rates and ensure public safety.",
      image: "/images/scream.png", // put inside public/images/
      tech: ["AI & ML", "Python", "Kivy", "Twilio"],
    },
    {
      title: "Weather Prediction App",
      description:
        "A responsive weather prediction web app built using React and OpenWeather API. It allows users to search for cities and displays real-time weather details like temperature, humidity, and conditions with dynamic icons and backgrounds.",
      image: "/images/weather.jpg", // put inside public/images/
      tech: ["Frontend", "React", "API Integration"],
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
