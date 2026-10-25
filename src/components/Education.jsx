import React from "react";
import "./Education.css";
import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          My academic journey and the educational foundation that supports my technical skills.
        </p>

        {/* B.E. Information Technology */}
        <div className="education-card gradient-blue">
          <span className="edu-badge">Bachelor of Engineering (B.E.)</span>
          <h3 className="edu-degree">Information Technology</h3>
          <p className="edu-college">
            Gokaraju Lailavathi Engineering College (Osmania University)
          </p>

          <div className="edu-details">
            <p>
              <Calendar size={18} /> November 2022 – May 2026
            </p>
            <p>
              <MapPin size={18} /> Hyderabad, India
            </p>
          </div>

          <p className="edu-description">
            Completed a Bachelor of Technology in Information Technology,
  developing a strong foundation in programming, software
  engineering, database management, and computer science
  fundamentals. Achieved a <strong>CGPA of 8.39/10</strong>.
          </p>

          <div className="edu-info-box">
            <h4>Technical Focus</h4>
            <p>
              Java Programming, Python, SQL, Artificial Intelligence & Machine Learning, Software Development, and Web Technologies.
            </p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-card gradient-purple">
          <span className="edu-badge">Intermediate (MPC)</span>
          <h3 className="edu-degree">TTWURJC Girls, Moinabad</h3>

          <div className="edu-details">
            <p>
              <Calendar size={18} /> June 2020 – March 2022
            </p>
            <p>
              <MapPin size={18} /> Hyderabad, India
            </p>
          </div>

          <p className="edu-description">
            Completed Intermediate with a focus on Mathematics, Physics, and Chemistry, achieving a{" "}
            <strong>CGPA of 8.66/10</strong>.
          </p>
        </div>

        {/* SSC */}
        <div className="education-card gradient-teal">
          <span className="edu-badge">Secondary School Certificate (SSC)</span>
          <h3 className="edu-degree">ZP HIGH SCHOOL</h3>

          <div className="edu-details">
            <p>
              <Calendar size={18} /> 2019 – 2020
            </p>
            <p>
              <MapPin size={18} /> Hyderabad, India
            </p>
          </div>

          <p className="edu-description">
            Completed SSC with distinction, securing a <strong>CGPA of 10/10</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
