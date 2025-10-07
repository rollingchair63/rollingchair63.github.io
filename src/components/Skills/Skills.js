import React from 'react';
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ['C', 'Java', 'JavaScript', 'SQL', 'CSS']
    },
    {
      title: "Libraries & Frameworks",
      skills: ['React', 'Spring Boot', 'Node.js', 'Tailwind CSS']
    },
    {
      title: "Tools & Platforms",
      skills: ['Git', 'GitHub', 'Figma']
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="capsule">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}