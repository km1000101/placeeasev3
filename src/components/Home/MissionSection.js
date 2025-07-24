import React, { forwardRef } from 'react';
import './MissionSection.css';
import MissionStats from './MissionStats';

const MissionSection = forwardRef((props, ref) => (
  <section className="mission-section">
    <div className="section-container">
      <h2 ref={ref}>Our Mission</h2>
      <p>To provide comprehensive placement assistance and career guidance to prepare our students for the professional world.</p>
      <MissionStats />
    </div>
  </section>
));

export default MissionSection; 