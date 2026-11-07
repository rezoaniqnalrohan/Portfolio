import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { role, location, availability, headline, bio, email, socials } =
    portfolioData.profile;

  return (
    <section id="intro" className="hero section">
      <div className="container">
        <div className="hero-meta">
          <span className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            {availability}
          </span>
          <span className="meta-divider">/</span>
          <span className="meta-text">{location}</span>
        </div>

        <p className="eyebrow">{role}</p>
        <h1 className="hero-title">{headline}</h1>
        <p className="hero-bio">{bio}</p>

        <div className="hero-actions">
          <a href={`mailto:${email}`} className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#work" className="btn btn-secondary">
            Selected Work
          </a>
        </div>

        <div className="hero-socials">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {item.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
