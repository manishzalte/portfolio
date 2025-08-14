import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isSwinging, setIsSwinging] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const handleSwingToTop = () => {
    if (isSwinging) return; // Prevent multiple swings
    
    setIsSwinging(true);
    
    // Scroll to top after spider starts swinging
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset animation after completion
      setTimeout(() => {
        setIsSwinging(false);
      }, 1000);
    }, 1000); // After spider starts swinging
  };

  return (
    <footer className="bg-spiderman-black border-t border-spiderman-red/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="python-logo-subtle"></div>
              <h3 className="text-2xl font-spiderman font-bold text-spiderman-red spiderman-text-glow">MANISH ZALTE</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              A web-slinging developer with 4 years of experience in Python, React, and DevOps. 
              Swinging through the digital realm to create amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-spiderman font-semibold text-spiderman-red mb-6">Quick Access</h4>
            <div className="flex flex-col space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-spiderman-red transition-all duration-300 hover:scale-105"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-spiderman font-semibold text-spiderman-red mb-6">Follow the Web</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-spiderman-red/20 rounded-lg flex items-center justify-center text-gray-400 
                           hover:text-spiderman-red hover:bg-spiderman-red/30 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-spiderman-red/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Manish Zalte. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500 animate-pulse" /> using React & Tailwind
            </p>
          </div>
        </div>

        {/* Spider-Man Swing Button */}
        <button
          onClick={handleSwingToTop}
          className={`spiderman-swing-button hidden md:block ${isSwinging ? 'swinging' : ''}`}
          aria-label="Spider swings to top"
          disabled={isSwinging}
        >
          {/* Spider symbol is created with CSS pseudo-elements */}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
