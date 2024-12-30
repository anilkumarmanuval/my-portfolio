import React from "react";
import "./skill.css";

const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "Tailwind CSS", "Material UI"],
    Backend: ["PHP", "Node.js", "Express.js", "MySQL", "MongoDB", "RESTful APIs"],
    "Libraries & Frameworks": ["React.js", "Next.js", "React Bootstrap", "CodeIgniter"],
    Tools: ["Postman"],
    Design: ["UI/UX"],
  };

  return (
    <section className="skills">
      <h1>My Skills</h1>
      {Object.keys(skills).map((category, index) => (
        <div key={index} className="skill-category">
          <h2>{category}</h2>
          <ul>
            {skills[category].map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
