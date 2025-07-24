import React from 'react';
import './WhatWeOfferSection.css';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="#7b61ff" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
    ),
    title: 'Placement Drives',
    desc: 'Regular on-campus recruitment drives with leading companies from various sectors.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="#7b61ff" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    ),
    title: 'Career Counseling',
    desc: 'Personalized guidance to help students identify and pursue their career interests.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="#43e0c6" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
    ),
    title: 'Skill Development',
    desc: 'Workshops and training programs to enhance technical and soft skills.'
  }
];

const WhatWeOfferSection = () => (
  <section className="what-we-offer-section">
    <div className="section-container">
      <h2>What We Offer</h2>
      <p className="offer-subtitle">Comprehensive support for students throughout their placement journey</p>
      <div className="offer-features-row">
        {features.map((f, idx) => (
          <div className="offer-feature-card" key={f.title}>
            <div className="offer-feature-icon">{f.icon}</div>
            <div className="offer-feature-title">{f.title}</div>
            <div className="offer-feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOfferSection; 