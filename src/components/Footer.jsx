import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Manjula Jadav</h2>
      <p>Frontend Developer & Data Analyst</p>

      <div className="social-icons">
        <a
          href="https://github.com/Manjula-jadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/manjula-jadav-906b54289"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:manjulampc0@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="made-by">
        Made with <span className="heart">❤️</span> by Manjula Jadav
      </p>
      <p>© 2025 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
