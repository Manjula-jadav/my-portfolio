import React, { useState } from "react";
import "./Skills.css";
import {
  Code,
  Database
} from "lucide-react";

const categories = {
 Languages: [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "C++", level: 85 },
    { name: "C", level: 70 },
    { name: "JavaScript", level: 75 },
  ],
  SoftwareEngineering: [
    { name: "Object-Oriented Programming (OOP)", level: 85 },
    { name: "Data Structures & Algorithms", level: 70 },
    { name: "Software Development Life Cycle (SDLC)", level: 75 },
    { name: "Problem-Solving", level: 75 },
    { name: "Unit Testing / JUnit", level: 65 },
  ],
  AI: [
    { name: "Machine Learning", level: 75 },
    { name: "Deep Learning", level: 70 },
    { name: "Scikit-learn", level: 70 },
    { name: "TensorFlow / Keras", level: 65 },
    { name: "Model Evaluation", level: 70 },
    { name: "Data Preprocessing", level: 75 },
  ],
  Frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "API Integration", level: 75 },
  ],
  Databases: [
    { name: "SQL", level: 90 },
    { name: "DBMS", level: 85 },
    { name: "Database Design", level: 80 },
  ],
  Frameworks: [
    { name: "React.js", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 70 },
  ],
  "Tools": [
    { name: "Git / GitHub", level: 80 },
    { name: "VS Code", level: 85 },
    { name: "Eclipse IDE", level: 80 },
    { name: "Jupyter Notebook", level: 75 },
    { name: "Figma", level: 65 },
    { name: "Vercel", level: 70 },
    { name: "ChatGPT", level: 80 },
  ],
};

export default function Skills() {
  const [selected, setSelected] = useState("Frontend");
  const [search, setSearch] = useState("");

  const skills = categories[selected].filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-desc">
          My technical expertise spans programming, software engineering, AI/ML, database management, and web development, with a focus on building efficient and practical software solutions.
        </p>

        <input
          type="text"
          placeholder="🔍 Search skills..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-tabs">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selected === cat ? "active" : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <h3 className="category-title">{selected} Proficiency</h3>

        <div className="skills-list">
          {skills.map((s) => (
            <div key={s.name} className="skill-item">
              <div className="skill-header">
                <span>{s.name}</span>
                <span className="skill-percent">{s.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${s.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
