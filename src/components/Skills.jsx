import React, { useState } from "react";
import "./Skills.css";
import { Languages } from "lucide-react";

const categories = {
  Frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "API Integration", level: 75 },
  ],
  Design: [
    { name: "Figma", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Canva", level: 90 },
  ],
  Frameworks: [
    { name: "React.js", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 70 },
  ],
   Languages: [
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
    { name: "C++", level: 90 },
    { name: "C", level: 90 },
  ],
  "Tools & AI": [
    { name: "Git / GitHub", level: 85 },
    { name: "VS Code", level: 90 },
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
          A comprehensive overview of my technical expertise across various domains, 
          from frontend development to UI/UX design.
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
