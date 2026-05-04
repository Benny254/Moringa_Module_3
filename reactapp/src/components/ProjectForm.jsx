import React, { useState } from "react";
import { beforeAll } from "vitest";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      ...formData,
    };

    addProject(newProject);

    setFormData({ name: "", description: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={{ 
        marginBottom: "10px", 
        padding: "10px",
        borderRadius: "5px", 
        border: "1px solid #ccc"
      }}
        name="name"
        placeholder="Project name"
        value={formData.name}
        onChange={handleChange}
      />

      <input style={{ 
        marginBottom: "10px", 
        padding: "10px",
        borderRadius: "5px", 
        border: "1px solid #ccc",
        }}
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit" style={{ 
        padding: "10px 20px",
        backgroundColor: "#007bff4e",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
