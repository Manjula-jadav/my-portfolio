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

        <h3 className="role-title">Software Engineer & AI Enthusiast</h3>

        <p className="about-text">
          ### Software Engineer | AI & Application Development

I am a B.Tech graduate in Information Technology with a strong interest in software engineering, artificial intelligence, and application development. Currently, I am undertaking an AI-Engineer internship at Infosys, where I am strengthening my technical knowledge and exploring AI-driven solutions.
        </p>

        <p className="about-text">
          My technical skills include Java, Python, SQL, HTML, CSS, JavaScript, and React.js, along with knowledge of software development principles, database management, and machine learning. I enjoy solving problems, learning emerging technologies, and building practical applications that combine intelligent solutions with user-friendly experiences.
        </p>
        <p className="about-text">
          I aspire to grow as a Software Engineer, contribute to impactful projects, and develop scalable, efficient, and innovative software solutions.
        </p>

        <div className="tag-container">
          <span className="tag web">Java Development</span>
          <span className="tag cpp">Artificial Intelligence </span>
          <span className="tag design">Software Development</span>
        </div>

        <div className="button-group">
          <a
            href="https://drive.google.com/file/d/1bTXc69UmPwG4fpgrJoZ3plwgRNSUxqA7/view?usp=drivesdk"
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
            <p>Software Engineering, Java, AI/ML, and Web Development</p>
          </div>

          <div className="summary-item">
            <strong>Current Focus:</strong>
            <p>
              Problem-solving, programming, DSA, DBMS, SDLC, and scalable software development.
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
