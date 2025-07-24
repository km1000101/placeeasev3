import React from 'react';
import './Footer.css';

const socialLinks = [
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#7b61ff" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    )
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#43e0c6" d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2.01.97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15-.45.77-.71 1.67-.71 2.63 0 1.81.92 3.41 2.32 4.35-.85-.03-1.65-.26-2.35-.65v.07c0 2.53 1.8 4.64 4.19 5.12-.44.12-.91.18-1.39.18-.34 0-.67-.03-.99-.09.67 2.09 2.62 3.61 4.93 3.65a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.18-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.54z"/></svg>
    )
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#5bc0be" d="M22.68 0h-21.36c-.73 0-1.32.59-1.32 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.49v-9.29h-3.13v-3.62h3.13v-2.67c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.35h3.58l-.47 3.62h-3.11v9.29h6.09c.73 0 1.32-.59 1.32-1.32v-21.36c0-.73-.59-1.32-1.32-1.32z"/></svg>
    )
  }
];

const Footer = () => (
  <footer className="footer">
    <div className="section-container">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>PlaceEase</h3>
          <p>College Placement Management Portal</p>
          <div className="footer-socials">
            {socialLinks.map(link => (
              <a href={link.href} key={link.label} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 PlaceEase. All rights reserved.</span>
        <span>Designed for College Placement Departments</span>
      </div>
    </div>
  </footer>
);

export default Footer; 