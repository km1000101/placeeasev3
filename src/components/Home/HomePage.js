import React, { useRef } from 'react';
import Navbar from '../Navbar';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import AboutSection from './AboutSection';
import WhatWeOfferSection from './WhatWeOfferSection';
import PartnersSection from './PartnersSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';
// import AnimatedArrow from './AnimatedArrow';
import './HomePage.css';

const HomePage = () => {
  const getStartedRef = useRef(null);
  const browseDrivesRef = useRef(null);
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection getStartedRef={getStartedRef} />
      <MissionSection />
      <AboutSection browseDrivesRef={browseDrivesRef} />
      {/* <AnimatedArrow fromRef={getStartedRef} toRef={browseDrivesRef} /> */}
      <WhatWeOfferSection />
      <PartnersSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage; 