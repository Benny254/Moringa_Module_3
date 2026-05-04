import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div
          key={project.id}
          style={{
            marginBottom: "20px",
            borderRadius: "5px",
            backgroundColor: "#f0b536",
            padding: "20px",
            boxSizing: "border-box",
            maxWidth: "600px",
            width: "100%",
            color: "black",
            border: "1px solid #714c4c",
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
