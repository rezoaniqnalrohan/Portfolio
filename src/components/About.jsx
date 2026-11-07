import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { profile, skills } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-index">02 / Background</span>
          <h2 className="section-title">About & Capabilities</h2>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p>
              {profile.bio}
            </p>
            <p>
              I believe great software comes from tight collaboration between design and engineering—paying attention to typography, micro-interactions, and maintainable code architecture in equal measure.
            </p>
          </div>

          <div className="skills-box">
            <h3 className="subheading">Core Focus</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
