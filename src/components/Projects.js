import React from "react";

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1", link: "#" },
  { id: 2, title: "Project 2", description: "Description of Project 2", link: "#" },
  { id: 3, title: "Project 3", description: "Description of Project 3", link: "#" },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
