import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-index">01 / Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-meta">
                <span className="project-id">{project.id}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  <a href={project.link}>{project.title}</a>
                </h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-action">
                <a href={project.link} className="arrow-link" aria-label={`View ${project.title}`}>
                  View Case Study ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
