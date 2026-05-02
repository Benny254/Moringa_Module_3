import React, { useState } from "react";

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
      <input
        name="name"
        placeholder="Project name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
