import React, { useState } from "react";
import projectsData from "./data/projectsData";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";


function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  // ADD PROJECT (STATE LIFTED HERE)
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // FILTER PROJECTS
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="app-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Portfolio Platform</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
