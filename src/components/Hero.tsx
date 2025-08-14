import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-spiderman-gradient"></div>
      <div className="absolute inset-0 bg-spiderman-radial opacity-20"></div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-card p-12 max-w-4xl mx-auto"
        >
          {/* Python Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mb-8"
          >
            <div className="python-logo-subtle mx-auto"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-spiderman font-black text-spiderman-red spiderman-text-glow mb-6"
          >
            MANISH
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-spiderman font-bold text-white mb-8"
          >
            ZALTE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A web-slinging developer with 4 years of experience in Python, React, and DevOps. 
            Swinging through the digital realm to create amazing web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-spiderman flex items-center gap-3 group"
            >
              <Mail size={24} className="group-hover:animate-spider-bounce" />
              Send Signal
            </button>
            
            <button className="btn-spiderman-secondary flex items-center gap-3 group">
              <Download size={24} className="group-hover:animate-spider-bounce" />
              Download Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-spiderman-red 
                       hover:text-white hover:scale-110 transition-all duration-300 hover:spiderman-glow"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-spiderman-red 
                       hover:text-white hover:scale-110 transition-all duration-300 hover:spiderman-glow"
            >
              <Linkedin size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Spider Web Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="spider-web-indicator">
            <div className="spider-web-symbol"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
