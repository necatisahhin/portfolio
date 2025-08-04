import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import './Portfolio.css';

// Lazy load components
const About = lazy(() => import('./About'));
const Experience = lazy(() => import('./Experience'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loading-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="loading-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            NC
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Necati Can Şahin
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header activeSection={activeSection} />
      <main role="main">
        <section id="home" aria-label="Ana Sayfa">
          <Hero />
        </section>
        <Suspense fallback={<div className="loading-section">Yükleniyor...</div>}>
          <section id="about" aria-label="Hakkımda">
            <About />
          </section>
        </Suspense>
        <Suspense fallback={<div className="loading-section">Yükleniyor...</div>}>
          <section id="experience" aria-label="Deneyimlerim">
            <Experience />
          </section>
        </Suspense>
        <Suspense fallback={<div className="loading-section">Yükleniyor...</div>}>
          <section id="skills" aria-label="Yeteneklerim">
            <Skills />
          </section>
        </Suspense>
        <Suspense fallback={<div className="loading-section">Yükleniyor...</div>}>
          <section id="projects" aria-label="Projelerim">
            <Projects />
          </section>
        </Suspense>
        <Suspense fallback={<div className="loading-section">Yükleniyor...</div>}>
          <section id="contact" aria-label="İletişim">
            <Contact />
          </section>
        </Suspense>
      </main>
    </motion.div>
  );
};

export default Portfolio;