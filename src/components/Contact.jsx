import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, socials } = portfolioData.profile;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="section-index">03 / Inquiry</span>
        <h2 className="contact-heading">Let&apos;s build something thoughtful together.</h2>
        <p className="contact-subtext">
          Have a project in mind, a question, or just want to say hello? Feel free to reach out directly.
        </p>

        <a href={`mailto:${email}`} className="email-link">
          {email} ↗
        </a>

        <div className="contact-socials">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
