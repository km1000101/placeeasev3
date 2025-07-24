import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="section-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="navbar-logo">
          <span className="logo-main">Place</span><span className="logo-accent">Ease</span>
        </div>
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={handleToggle}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul
          className={`navbar-links${menuOpen ? ' open' : ''}`}
          id="navbar-menu"
          role="menu"
        >
          <li><NavLink to="/" end onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/placement-drives" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Placement Drives</NavLink></li>
          <li><NavLink to="/activities" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Activities</NavLink></li>
          <li><NavLink to="/announcements" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Announcements</NavLink></li>
          <li><NavLink to="/students" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Students</NavLink></li>
          <li><NavLink to="/companies" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Companies</NavLink></li>
          <li><NavLink to="/contact" onClick={handleClose} className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 