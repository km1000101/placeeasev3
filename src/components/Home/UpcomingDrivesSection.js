import React from 'react';
import './UpcomingDrivesSection.css';

const drives = [
  {
    company: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    date: '2024-07-10',
    role: 'Software Engineer',
    link: '#',
  },
  {
    company: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    date: '2024-07-15',
    role: 'Cloud Support Associate',
    link: '#',
  },
  {
    company: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    date: '2024-07-20',
    role: 'Data Analyst',
    link: '#',
  },
  {
    company: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg',
    date: '2024-07-25',
    role: 'System Engineer',
    link: '#',
  },
];

const UpcomingDrivesSection = () => (
  <section className="upcoming-drives-section">
    <div className="section-container">
      <h2>Upcoming Placement Drives</h2>
      <div className="drives-grid">
        {drives.map((drive, idx) => (
          <div className="drive-card" key={drive.company + drive.date}>
            <img src={drive.logo} alt={drive.company + ' logo'} className="drive-logo" />
            <div className="drive-info">
              <div className="drive-company">{drive.company}</div>
              <div className="drive-role">{drive.role}</div>
              <div className="drive-date">{new Date(drive.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              <a href={drive.link} className="apply-btn">Apply</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingDrivesSection; 