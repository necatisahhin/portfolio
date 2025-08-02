import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaDatabase, 
  FaCog, 
  FaBrain,
  FaUsers,
  FaBolt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaCompass,
  FaBell,
  FaSave,
  FaGlobe,
  FaLock,
  FaShieldAlt,
  FaHome,
  FaGitlab,
  FaVial,
  FaRobot,
  FaRecycle,
  FaEye,
  FaPuzzlePiece
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiReactquery,
  SiJquery,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSocketdotio,
  SiJest,
  SiFramer,
  SiExpo,
  SiFirebase,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiFastlane,
  SiTensorflow,
  SiOpencv
} from 'react-icons/si';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories: Record<string, {
    icon: any;
    title: string;
    color: string;
    skills: Array<{
      name: string;
      icon: any;
    }>;
  }> = {
    frontend: {
      icon: FaCode,
      title: 'Frontend Development',
      color: '#3B82F6',
      skills: [
        { name: 'ReactJS', icon: FaReact },
        { name: 'NextJS', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Material-UI', icon: SiMui },
        { name: 'Framer Motion', icon: SiFramer },
        { name: 'Redux', icon: SiRedux },
        { name: 'React Query', icon: SiReactquery },
        { name: 'jQuery', icon: SiJquery }
      ]
    },
    mobile: {
      icon: FaMobile,
      title: 'Mobile Development',
      color: '#10B981',
      skills: [
        { name: 'React Native', icon: FaReact },
        { name: 'Kotlin', icon: SiKotlin },
        { name: 'Java', icon: FaJava },
        { name: 'Expo', icon: SiExpo },
        { name: 'React Navigation', icon: FaCompass },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Push Notifications', icon: FaBell },
        { name: 'AsyncStorage', icon: FaSave }
      ]
    },
    backend: {
      icon: FaServer,
      title: 'Backend Development',
      color: '#F59E0B',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'RESTful APIs', icon: FaGlobe },
        { name: 'Socket.IO', icon: SiSocketdotio },
        { name: 'Prisma ORM', icon: SiPrisma },
        { name: 'JWT', icon: FaLock },
        { name: 'Passport.js', icon: FaShieldAlt },
        { name: 'Redis', icon: SiRedis },
        { name: 'RabbitMQ', icon: FaServer }
      ]
    },
    database: {
      icon: FaDatabase,
      title: 'Database & Storage',
      color: '#8B5CF6',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Firebase Firestore', icon: SiFirebase },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'Room Database', icon: FaHome }
      ]
    },
    tools: {
      icon: FaCog,
      title: 'DevOps & Tools',
      color: '#EF4444',
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitLab CI/CD', icon: FaGitlab },
        { name: 'Docker', icon: FaDocker },
        { name: 'Expo EAS', icon: SiExpo },
        { name: 'Fastlane', icon: SiFastlane },
        { name: 'Jest', icon: SiJest },
        { name: 'Detox', icon: FaVial }
      ]
    },
    other: {
      icon: FaBrain,
      title: 'Diğer Yetenekler',
      color: '#06B6D4',
      skills: [
        { name: 'Machine Learning', icon: FaRobot },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'OpenCV', icon: SiOpencv },
        { name: 'Agile/Scrum', icon: FaRecycle },
        { name: 'Code Review', icon: FaEye },
        { name: 'Problem Solving', icon: FaPuzzlePiece }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };



  return (
    <section className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Teknik Yeteneklerim</h2>
          <p className="section-subtitle">
            Modern teknolojiler ve araçlarla gelişim gösterdiğim alanlar
          </p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                className={`category-button ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundColor: activeCategory === key ? category.color : undefined,
                  borderColor: category.color 
                }}
              >
                {/* @ts-ignore */}
                <IconComponent size={20} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="skills-content"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="skills-grid">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">
                      {React.createElement(skill.icon, { size: 20 })}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-grid">
            <div className="summary-item">
              {/* @ts-ignore */}
              <FaBolt className="summary-icon" />
              <h3>Frontend Expertise</h3>
              <p>React ecosystem'ında derinlemesine deneyim ve modern UI kütüphaneleri</p>
            </div>
            
            <div className="summary-item">
              {/* @ts-ignore */}
              <FaMobile className="summary-icon" />
              <h3>Mobile Development</h3>
              <p>Cross-platform mobile uygulama geliştirme ve native optimizasyonlar</p>
            </div>
            
            <div className="summary-item">
              {/* @ts-ignore */}
              <FaServer className="summary-icon" />
              <h3>Backend & APIs</h3>
              <p>Ölçeklenebilir backend sistemleri ve RESTful API tasarımı</p>
            </div>
            
            <div className="summary-item">
              {/* @ts-ignore */}
              <FaUsers className="summary-icon" />
              <h3>Team Collaboration</h3>
              <p>Agile metodolojiler ve etkili takım çalışması deneyimi</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="learning-mindset"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mindset-card">
            {/* @ts-ignore */}
            <FaBrain className="mindset-icon" />
            <h3>Sürekli Öğrenme</h3>
            <p>
              Teknoloji dünyasının hızla değişen yapısında güncel kalmak için sürekli öğrenme 
              prensibini benimser, yeni teknolojileri öğrenmeye ve mevcut bilgilerimi 
              geliştirmeye odaklanırım.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;