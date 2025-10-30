import React from "react";
import "./About.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background, expertise, and what drives me to
          create impactful web solutions.
        </p>

        <h3 className="role-title">Frontend Developer</h3>

        <p className="about-text">
          As a Front-End Developer Intern at Cognifyz Technologies, collaborative innovation is my forte, especially in translating academic insights from my ongoing Information Technology studies at Gokaraju Lailavathi Engineering College (Osmania University) into practical web development solutions. My role involves enhancing user interfaces and leveraging responsive design using HTML, CSS, JavaScript, and React, contributing to projects that improve user engagement and visual appeal.
        </p>

        <p className="about-text">
          My engineering background has strengthened my analytical thinking,
          enabling me to craft efficient frontend solutions while writing
          maintainable code. I’m constantly learning modern frameworks and
          enhancing my expertise to deliver seamless digital experiences.
        </p>

        <div className="tag-container">
          <span className="tag web">Web Development</span>
          <span className="tag cpp">Computer Science</span>
          <span className="tag design">Responsive Design</span>
        </div>

        <div className="button-group">
          <a
            href="C:\Users\manju\OneDrive\Desktop\Resume\Manjula_Jadav_Resume1.pdf"
            className="btn-primary"
            download
          >
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/manjula-jadav-906b54289"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View LinkedIn <FiExternalLink />
          </a>
        </div>

        <div className="summary-section">
          <h3>Professional Summary</h3>

          <div className="summary-item">
            <strong>
              <FaMapMarkerAlt /> Location:
            </strong>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="summary-item">
            <strong>
              <FaPhoneAlt /> Contact:
            </strong>
            <p>Phone: 7780508766</p>
            <p>Email: manjulampc0@gmail.com</p>
          </div>

          <div className="summary-item">
            <strong>Specialization:</strong>
            <p>Frontend Development, C++ Programming, Responsive Design</p>
          </div>

          <div className="summary-item">
            <strong>Current Focus:</strong>
            <p>
              Pursuing B.E. in Information Technology while gaining practical
              experience through projects and internships.
            </p>
          </div>

          <div className="summary-item">
            <strong>Professional Profiles:</strong>
            <ul>
              <li>
                <a href="https://github.com/Manjula-jadav" target="_blank" rel="noreferrer">
                  GitHub Profile <FiExternalLink />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/manjula-jadav-906b54289" target="_blank" rel="noreferrer">
                  LinkedIn Profile <FiExternalLink />
                </a>
              </li>
              <li>
                <a href="https://unstop.com/u/manjumpc9686" target="_blank" rel="noreferrer">
                  Unstop Profile <FiExternalLink />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
