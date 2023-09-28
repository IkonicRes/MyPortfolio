import React from "react";
import "./ProjectList.css";
import { projects } from "./project";

export default function MyWork() {
  document.querySelector('a').addEventListener('click', function(event) {
    event.stopPropagation();
  });
  return (
    <div>
      <h2>My Work</h2>
      <section id="work">
        <section id="work-cards">
          {projects.map((project, index) => (
            <div className="card" key={index} style={{ backgroundImage: `url(${project.image})` }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p style={{ display: project.technologies.length > 0 ? "block" : "none" }}>Technologies: {project.technologies.join(", ")}</p>
                <section style={{ display: project.repoLink ? "block" : "none" }}>
                  <p>Source Code:</p>
                  <button
                    onClick={() => {
                      if (project.repoLink) {
                        window.location.href = project.repoLink;
                      }
                    }}
                    type="button"
                    target="_none"
                  >
                  </button>
                </section>
              </a>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
