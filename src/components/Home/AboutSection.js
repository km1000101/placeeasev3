import React, { forwardRef } from 'react';
import './AboutSection.css';

const AboutSection = forwardRef(({ browseDrivesRef }, ref) => (
  <section className="about-section">
    <div className="section-container about-flex">
      <div className="about-content">
        <h2><span>About</span> Our Placement Cell</h2>
        <p>The Placement Cell at our college is dedicated to providing students with the best career opportunities across various industries. We work with leading companies to organize recruitment drives, career fairs, and workshops.</p>
        <p>Our team of experienced professionals provides comprehensive career guidance, resume building, and interview preparation to ensure that our students excel in their careers.</p>
        <button className="about-btn" ref={browseDrivesRef}>Browse Placement Drives</button>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" alt="Placement Cell" />
      </div>
    </div>
  </section>
));

export default AboutSection; 