import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import WorkPortfolio from './components/WorkPortfolio';
import WatchMyWork from './components/WatchMyWork';
import Services from './components/Services';
import Skills from './components/Skills';
import EngineeringIdentity from './components/EngineeringIdentity';
import CertificationsEducation from './components/CertificationsEducation';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-hidden font-sans">
      {/* Global Film Grain Overlay */}
      <div className="fixed inset-0 z-50 bg-film-grain pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <WorkPortfolio />
        <WatchMyWork />
        <Services />
        <Skills />
        <EngineeringIdentity />
        <CertificationsEducation />
      </main>
      
      <ContactFooter />
    </div>
  );
}

export default App;
