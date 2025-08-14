import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App min-h-screen bg-spiderman-gradient relative overflow-hidden">
      {/* Spider Web Background */}
      <div className="spider-web-bg"></div>
      
      {/* Floating Spider Elements */}
      <div className="floating-spider"></div>
      <div className="floating-spider"></div>
      <div className="floating-spider"></div>
      <div className="floating-spider"></div>
      
      {/* Web Effects */}
      <div 
        className="web-effect"
        style={{
          top: `${20 + scrollY * 0.1}%`,
          left: `${10 + scrollY * 0.05}%`,
          transform: `rotate(${scrollY * 0.1}deg)`
        }}
      ></div>
      <div 
        className="web-effect"
        style={{
          top: `${60 + scrollY * 0.08}%`,
          right: `${15 + scrollY * 0.03}%`,
          transform: `rotate(${-scrollY * 0.15}deg)`
        }}
      ></div>

      <Navbar />
      
      {/* Main Content Container with Music Player Space */}
      <div className="relative">
        {/* Desktop Music Player Space - Responsive */}
        <div className="hidden md:block absolute top-32 right-4 z-40 w-80 h-80 pointer-events-none"></div>
        
        {/* Main Content */}
        <main className="relative md:pr-96">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        {/* Music Player */}
        <MusicPlayer />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
