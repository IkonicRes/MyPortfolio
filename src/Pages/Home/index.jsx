import React from "react";
import "./ProjectList.css";
import projects from "./project"; // Import the projects array

export default function Home() {
  return (
    <div>
      <h2>My Work</h2>
      <section id="work">
        <section id="work-cards">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.alt} />
              </a>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies.join(", ")}</p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
