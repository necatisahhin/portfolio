import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaBullseye, 
  FaBolt, 
  FaUsers, 
  FaBook, 
  FaTrophy,
  FaFutbol,
  FaFilm,
  FaBasketballBall,
  FaGamepad,
  FaFistRaised,
  FaRobot,
  FaGraduationCap
} from 'react-icons/fa';
import { 
  MdSportsKabaddi
} from 'react-icons/md';

const About: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const highlights: Array<{
    icon: any;
    title: string;
    description: string;
  }> = [
    {
      icon: FaCode,
      title: "Modern Teknolojiler",
      description: "React Native, ReactJS, Node.js, TypeScript ile güncel teknolojileri kullanarak projeler geliştiriyorum."
    },
    {
      icon: FaBullseye,
      title: "Performans Odaklı",
      description: "Lazy Loading, memoization ve diğer optimizasyon tekniklerini kullanarak yüksek performanslı uygulamalar yazıyorum."
    },
    {
      icon: FaBolt,
      title: "Hızlı Geliştirme",
      description: "Agile/Scrum metodolojileri ile hızlı ve verimli çözümler üretiyorum."
    },
    {
      icon: FaUsers,
      title: "Takım Çalışması",
      description: "Code review süreçleri ve bilgi paylaşımı ile takım verimliliğine katkı sağlıyorum."
    }
  ];

  const stats = [
    { label: "Mezuniyet", value: "Akdeniz Üniversitesi YBS", type: "education" },
    { label: "GPA", value: "3.54/4.00", type: "grade" },
    { label: "Konum", value: "Antalya, Türkiye", type: "location" },
    { label: "Durum", value: "Aktif İş Arıyor", type: "status" }
  ];

  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Hakkımda</h2>
          <p className="section-subtitle">
            Tutkulu bir geliştiricinin hikayesi ve vizyonu
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-main" variants={itemVariants}>
              <p className="about-description">
                <strong>Merhaba!</strong> Ben Necati Can Şahin, tutkulu ve sürekli öğrenmeye açık bir 
                <span className="highlight"> Full Stack Developer</span>'ım. 
                Akdeniz Üniversitesi Yönetim Bilişim Sistemleri bölümünden 3.54 GPA ile mezun oldum ve 
                modern teknolojilerle kullanıcı dostu ve yüksek performanslı uygulamalar geliştiriyorum.
              </p>
              
              <p className="about-description">
                Frontend tarafında <strong>ReactJS, NextJS, VueJS</strong> ve 
                <strong> React Native</strong> ile mobile uygulamalar; 
                backend tarafında <strong>Node.js, ExpressJS</strong> ile 
                güvenli ve ölçeklenebilir REST API'ler geliştiriyorum. 
                Redux, React Query, Socket.IO gibi modern kütüphanelerle 
                real-time özellikler ve verimli state management sağlıyorum.
              </p>

              <p className="about-description">
                Competitive programming ve problem çözme konusunda tutkuluyum. 
                <strong> Agile/Scrum</strong> metodolojileri ile çalışmayı seviyorum ve 
                takım içinde bilgi paylaşımı yaparak ortak başarıya katkı sağlamayı hedefliyorum.
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className={`stat-item ${stat.type}`}>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className="highlight-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <div className="highlight-icon">
                    {/* @ts-ignore */}
                    <IconComponent size={24} />
                  </div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="about-interests"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="interests-title">
            {/* @ts-ignore */}
            <FaBook size={20} />
            İlgi Alanları & Hobiler
          </h3>
          <div className="interests-list">
            {[
              { name: 'Futbol', icon: FaFutbol },
              { name: 'Filmler', icon: FaFilm },
              { name: 'Basketbol', icon: FaBasketballBall },
              { name: 'Video Oyunları', icon: FaGamepad },
              { name: 'Boks', icon: FaFistRaised },
              { name: 'Güreş', icon: MdSportsKabaddi },
              { name: 'LLM & AI', icon: FaRobot },
              { name: 'Sürekli Öğrenme', icon: FaGraduationCap }
            ].map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <motion.span
                  key={index}
                  className="interest-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {/* @ts-ignore */}
                  <IconComponent size={16} />
                  {interest.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="about-quote"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote>
            "Sürekli öğrenme, problem çözme ve competitive ortamlarda gelişme konusunda tutkuluyum. 
            Modern teknolojilerle kullanıcı deneyimini ve sistem altyapısını güçlü ve sürdürülebilir 
            bir şekilde yönetebiliyorum."
          </blockquote>
          <div className="quote-author">
            {/* @ts-ignore */}
            <FaTrophy size={16} />
            <span>Necati Can Şahin</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;