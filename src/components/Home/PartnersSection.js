import React from 'react';
import './PartnersSection.css';

const companies = [
  'Google', 'Microsoft', 'Amazon', 'IBM', 'Infosys', 'TCS',
  'Wipro', 'Accenture', 'Deloitte', 'JP Morgan', 'Goldman Sachs', 'Adobe'
];

function companyClass(company) {
  return 'partner-' + company.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

const PartnersSection = () => (
  <section className="partners-section">
    <div className="section-container">
      <h2>Our Recruiting Partners</h2>
      <p>We collaborate with industry leaders to provide the best opportunities for our students</p>
      <div className="partners-grid">
        {companies.map(company => (
          <div className={`partner-card ${companyClass(company)}`} key={company}>{company}</div>
        ))}
      </div>
      <a href="#" className="view-all">View all recruiting companies &rarr;</a>
    </div>
  </section>
);

export default PartnersSection; 