import React from 'react';
import './MissionStats.css';

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z"/></svg>
    ),
    label: 'Students Placed',
    value: '500+',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 17v2h18v-2c0-2.67-5.33-4-8-4s-8 1.33-8 4zm9-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
    ),
    label: 'Avg Package',
    value: '₹8.2L',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
    ),
    label: 'Recruiting Companies',
    value: '120+',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    ),
    label: 'Highest Package',
    value: '₹42L',
  },
];

const MissionStats = () => (
  <div className="mission-stats-row">
    {stats.map((stat, idx) => (
      <div className="mission-stat-card" key={stat.label}>
        <div className="mission-stat-icon">{stat.icon}</div>
        <div className="mission-stat-info">
          <div className="mission-stat-label">{stat.label}</div>
          <div className="mission-stat-value">{stat.value}</div>
        </div>
      </div>
    ))}
  </div>
);

export default MissionStats; 