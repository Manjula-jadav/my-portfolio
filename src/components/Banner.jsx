import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section id="banner" className="banner-section">
      <div className="banner-container">
        <img src="manjula1.jpg" alt="Manjula Jadav" className="banner-img" />

        <p className="banner-role">Frontend Developer & Data Analyst</p>

        <h1 className="banner-name">
          Manjula <span>Jadav</span>
        </h1>

        <p className="banner-description">
          Delivering end-to-end solutions, from building responsive web apps to
          developing AI & ML-driven systems. Skilled in React, JavaScript,
          Python, and SQL — combining creativity with analytical thinking to
          build seamless web experiences.
        </p>

        <div className="banner-tags">
          <span>React</span>
          <span>Python</span>
          <span>SQL</span>
          <span>JavaScript</span>
        </div>

        <div className="banner-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
