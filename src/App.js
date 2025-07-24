import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Announcements from './pages/Announcements';
import Students from './pages/Students';
import Companies from './pages/Companies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/students" element={<Students />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App; 