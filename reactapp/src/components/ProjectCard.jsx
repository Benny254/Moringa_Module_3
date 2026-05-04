import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card" style={project.style}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
