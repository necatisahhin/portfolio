import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBriefcase 
} from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "React Native / React Developer",
      company: "Bestnet GreenSoft Teknoloji",
      location: "Antalya, Türkiye",
      period: "Ekim 2024 – Şubat 2025",
      type: "Full-time",
      description: "TypeScript ve React Native kullanarak Android ve iOS platformları için performans odaklı ve ölçeklenebilir mobil uygulamalar geliştirdim.",
      achievements: [
        "Redux, Redux Toolkit ve React Query ile güçlü state management ve data caching yapıları uyguladı",
        "Firebase (Authentication, Firestore, Cloud Messaging, Remote Config) entegrasyonu gerçekleştirdi",
        "React Navigation, Deep Linking ve push notification sistemleri (FCM, Expo) entegre etti",
        "Lazy Loading, memoization (React.memo, useMemo, useCallback) ve FlatList optimizasyonları uyguladı",
        "Jest, React Native Testing Library ve Detox ile unit ve end-to-end test süreçleri oluşturdu",
        "Expo EAS, GitLab CI ve Fastlane ile otomatik test, build ve deployment workflow'ları yönetti",
        "Atomic Design prensiplerini takip ederek modüler ve yeniden kullanılabilir bileşen yapıları oluşturdu"
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Jest", "GitLab CI"]
    },
    {
      title: "Full Stack Developer",
      company: "PixelEdgeLTM",
      location: "Freelance",
      period: "Temmuz 2024 – Aralık 2024",
      type: "Freelance",
      description: "Modern frontend ve backend teknolojileri kullanarak ölçeklenebilir ve kullanıcı dostu web uygulamaları geliştirdim.",
      achievements: [
        "ReactJS, TypeScript, Tailwind CSS ve Material-UI ile responsive ve dinamik kullanıcı arayüzleri tasarladı",
        "Redux ve React Query ile kompleks uygulamalarda state management'ı verimli şekilde yönetti",
        "Node.js, ExpressJS ile güvenli ve robust RESTful API'ler geliştirdi",
        "Redis entegrasyonu ile performans optimizasyonu için caching uyguladı",
        "Socket.IO ile bildirimler ve canlı güncellemeler gibi real-time özellikler geliştirdi",
        "Prisma ORM ve PostgreSQL ile verimli veritabanı yönetimi ve yapılandırılmış query optimizasyonu",
        "RabbitMQ ile asenkron task processing ve background job handling",
        "Jest ile unit ve integration testleri yaparak kod kalitesini artırdı"
      ],
      technologies: ["ReactJS", "Node.js", "PostgreSQL", "Redis", "Socket.IO", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "InnoLCare",
      location: "Freelance",
      period: "Ocak 2024 – Temmuz 2024",
      type: "Freelance",
      description: "Küçük ve orta ölçekli işletmeler için takım aktivitelerini verimli şekilde organize etmek ve izlemek amacıyla web tabanlı task management platformu geliştirdim.",
      achievements: [
        "ReactJS, TypeScript, Tailwind CSS ve Material-UI ile kullanıcı dostu ve responsive arayüz oluşturdu",
        "Redux ve React Query ile real-time veri senkronizasyonu sağladı",
        "Framer Motion ile yumuşak animasyonlar ve geçişler ekleyerek kullanıcı deneyimini geliştirdi",
        "Node.js, ExpressJS ile RESTful API'ler tasarladı ve geliştirdi",
        "Socket.IO ile real-time task güncellemeleri ve bildirimler için entegrasyon",
        "JWT ve Passport.js ile güvenli kullanıcı authentication ve authorization",
        "RabbitMQ ile email bildirimleri ve hatırlatma tetikleyicileri için background task processing",
        "PostgreSQL ve Prisma ORM ile yapılandırılmış ve verimli veritabanı operasyonları",
        "Redis ile sık erişilen verileri cache'leyerek API response sürelerini iyileştirdi",
        "Drag-and-drop fonksiyonalitesi ile 'Kanban board' özelliği oluşturdu",
        "Team üyelerinin yorum yapabildiği ve anlık güncellemeler alabileceği real-time collaboration tool geliştirdi",
        "Tekrarlayan tasklar ve otomatik hatırlatmalar ile productivity artışı sağladı"
      ],
      technologies: ["ReactJS", "Node.js", "PostgreSQL", "RabbitMQ", "Socket.IO", "Framer Motion"]
    }
  ];

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
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <section className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Deneyimlerim</h2>
          <p className="section-subtitle">
            Profesyonel kariyerimde aldığım rol ve sorumluluklar
          </p>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="experience-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-meta">
                    <h3 className="experience-title">{exp.title}</h3>
                                      <div className="experience-company">
                    {/* @ts-ignore */}
                    <FaBriefcase size={16} />
                    <span>{exp.company}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                  <div className="experience-details">
                    <div className="experience-period">
                      {/* @ts-ignore */}
                      <FaCalendarAlt size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      {/* @ts-ignore */}
                      <FaMapMarkerAlt size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-achievements">
                  <h4>Başlıca Başarılar & Sorumluluklar:</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4>Kullanılan Teknolojiler:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Deneyim Özeti</h3>
            <p>
              2+ yıllık deneyimim boyunca <strong>6+ proje</strong> geliştirdim ve 
              <strong> mobile & web development</strong> alanlarında uzmanlaştım. 
              Modern teknolojilerle <strong>performans odaklı</strong> ve 
              <strong> ölçeklenebilir</strong> çözümler üretme konusunda deneyim kazandım.
            </p>
            
            <div className="summary-highlights">
              <div className="highlight">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Yıl Deneyim</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Tamamlanan Proje</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Farklı Şirket</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;