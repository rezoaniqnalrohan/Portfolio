import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const { name } = portfolioData.profile;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand">
          {name}
        </a>
        <nav className="nav-links" aria-label="Primary Navigation">
          <a href="#intro">Intro</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
