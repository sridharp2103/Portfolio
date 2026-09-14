import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkPortfolio from './components/WorkPortfolio';
import CertificationsEducation from './components/CertificationsEducation';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden font-sans">
      {/* Global Film Grain Overlay */}
      <div className="fixed inset-0 z-50 bg-film-grain pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkPortfolio />
        <CertificationsEducation />
      </main>
      
      <ContactFooter />
    </div>
  );
}

export default App;
