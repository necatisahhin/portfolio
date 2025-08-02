import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaCode, 
  FaUser, 
  FaBriefcase, 
  FaTrophy, 
  FaFolder, 
  FaEnvelope 
} from 'react-icons/fa';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{
    id: string;
    label: string;
    icon: any;
  }> = [
    { id: 'home', label: 'Ana Sayfa', icon: FaCode },
    { id: 'about', label: 'Hakkımda', icon: FaUser },
    { id: 'experience', label: 'Deneyim', icon: FaBriefcase },
    { id: 'skills', label: 'Yetenekler', icon: FaTrophy },
    { id: 'projects', label: 'Projeler', icon: FaFolder },
    { id: 'contact', label: 'İletişim', icon: FaEnvelope },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">NC</span>
          <span className="logo-full">Necati Can Şahin</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* @ts-ignore */}
                <IconComponent size={18} />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {/* @ts-ignore */}
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav 
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          y: isMobileMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.id}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                x: isMobileMenuOpen ? 0 : -20 
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {/* @ts-ignore */}
              <IconComponent size={20} />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </motion.nav>
    </motion.header>
  );
};

export default Header;