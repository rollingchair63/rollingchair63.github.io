import React from 'react';
import "./Skills.css";

export default function Skills() {
  const skills = [
    'C', 'SQL', 'Java', 'UI/UX Design', 
    'Figma', 'JavaScript', 'React', 'Spring Boot',
  ];

  return (
    // id helps the navbar to navigate to the section
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="capsule">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};