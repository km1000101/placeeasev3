import React, { forwardRef } from 'react';
import './HeroSection.css';

const HeroSection = forwardRef(({ getStartedRef }, ref) => (
  <section className="hero-section hero-split">
    <div className="hero-bg-float neon-green" />
    <div className="hero-bg-float neon-pink" />
    <div className="hero-bg-float neon-line" />
    <div className="section-container hero-split-flex">
      <div className="hero-split-left">
        <h1><span>Empowering</span> Careers,<br />Building Futures</h1>
        <p>
          Welcome to PlaceEase. We bridge the gap between academia and industry to prepare our students for successful careers.
        </p>
        <button className="hero-cta-btn" ref={getStartedRef}>Get Started</button>
      </div>
      <div className="hero-split-right">
        <img ref={ref} src="https://images.unsplash.com/photo-1513258496099-48168024aec0" alt="Students collaborating" />
      </div>
    </div>
  </section>
));

export default HeroSection; 