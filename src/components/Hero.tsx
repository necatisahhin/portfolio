import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaChevronDown,
  FaReact,
  FaNodeJs,
  FaMobileAlt
} from 'react-icons/fa';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: { y: [-10, 10, -10] }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              <span className="greeting">Merhaba, Ben</span>
              <span className="name">Necati Can Şahin</span>
              <motion.span 
                className="role"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              React Native, ReactJS, Node.js ve modern teknolojilerle 
              <span className="highlight"> scalable </span> ve 
              <span className="highlight"> user-friendly </span> 
              uygulamalar geliştiriyorum. 
              Performans optimizasyonu ve temiz kod yazma konusunda tutkuluyum.
            </motion.p>

            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Yıl Deneyim</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Proje</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Teknoloji</span>
              </div>
            </motion.div>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* @ts-ignore */}
                <FaEnvelope size={20} />
                İletişime Geç
              </motion.button>
              

            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              <motion.a
                href="https://github.com/necatisahhin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* @ts-ignore */}
                <FaGithub size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/necatisahhin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* @ts-ignore */}
                <FaLinkedin size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:necatisahin3152@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* @ts-ignore */}
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            <motion.div 
              className="avatar-container"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="avatar">
                <span className="avatar-text">NC</span>
              </div>
              <div className="avatar-ring"></div>
              <div className="avatar-ring-2"></div>
            </motion.div>

            <div className="floating-icons">
              <motion.div 
                className="floating-icon react"
                animate={{ 
                  rotate: 360,
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
{/* @ts-ignore */}
                <FaReact size={32} color="#61DAFB" />
              </motion.div>
              
              <motion.div 
                className="floating-icon node"
                animate={{ 
                  y: [5, -5, 5],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                }}
              >
{/* @ts-ignore */}
                <FaNodeJs size={32} color="#339933" />
              </motion.div>
              
              <motion.div 
                className="floating-icon mobile"
                animate={{ 
                  x: [-3, 3, -3],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              >
{/* @ts-ignore */}
                <FaMobileAlt size={32} color="#FF6B6B" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={scrollToAbout}
        >
          <span>Daha fazlası için kaydır</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* @ts-ignore */}
            <FaChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;