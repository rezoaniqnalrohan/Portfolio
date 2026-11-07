import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name } = portfolioData.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {name}. All rights reserved.
        </span>
        <a href="#top" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
