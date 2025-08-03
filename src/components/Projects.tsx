import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaMobile, 
  FaGlobe, 
  FaCalendarAlt,
  FaBullseye,
  FaBolt,
  FaWrench
} from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "El Emeği Rüya Uygulaması",
      description: "Kullanıcıların rüyalarını analiz edebileceği, kaydedebileceği ve paylaşabileceği platform. Gemini AI ile İslami rüya yorumları entegrasyonu.",
      longDescription: "React Native ile geliştirilmiş bu uygulama, kullanıcıların rüyalarını detaylı şekilde kaydedip analiz etmelerini sağlar. Gemini AI entegrasyonu sayesinde İslami kaynaklara dayalı rüya yorumları sunar.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Redux", "Axios", "MVVM", "Node.js", "Prisma", "PostgreSQL", "Gemini AI"],
      category: "mobile",
      type: "Mobile App",
      status: "Completed",
      date: "2024",
      features: [
        "AI destekli rüya analizi",
        "Rüya kayıt ve kategorizasyon",
        "Sosyal paylaşım özellikleri",
        "İslami rüya yorumları",
        "Kullanıcı deneyimi optimizasyonu"
      ],
      linkedin: "https://www.linkedin.com/posts/necatisahhin_elemeafbi-raesyayorumlama-mobiluygulama-activity-7325153378831855616-cOKd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj4qr8ByQ41hBroJnwZds-B1PtgnGnOs3U",
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: "Para Yönet Harcama Uygulaması",
      description: "Kullanıcıların aylık harcamalarını kaydedebildiği ve günlük/aylık istatistiksel analizleri görüntüleyebildiği expense tracking uygulaması.",
      longDescription: "Modern React Native teknolojileri ile geliştirilmiş kapsamlı bir finansal takip uygulaması. Gelir-gider analizi, bütçe planlaması ve tasarruf hedefleri belirleme özellikleri içerir.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Redux", "Axios", "MVVM", "Node.js", "Prisma", "PostgreSQL", "Chart.js"],
      category: "mobile",
      type: "Mobile App",
      status: "Completed",
      date: "2024",
      features: [
        "Harcama kategorileri ve analizi",
        "Gelir-gider takibi",
        "Görsel grafikler ve raporlar",
        "Bütçe planlama araçları",
        "Tasarruf hedefleri"
      ],
      linkedin: "https://www.linkedin.com/posts/necatisahhin_parayaemnet-baestaexeyaemnetimi-mobiluygulama-activity-7325154349356142593-v77m?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj4qr8ByQ41hBroJnwZds-B1PtgnGnOs3U",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "E-RCT (Tarım Uygulaması)",
      description: "Çiftçilerin bitki hastalıklarına göre ilaçları filtreleyebildiği büyük ölçekli tarım uygulaması. Staj döneminde baştan sona geliştirdiğim gelir getirici proje.",
      longDescription: "Tarım sektörü için geliştirilmiş bu kapsamlı platform, çiftçilere bitki hastalıkları için uygun ilaç önerilerinde bulunur. Google Maps entegrasyonu, hava durumu API'si ve real-time bildirimler içerir.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Redux", "Google Maps", "Weather API", "Socket.IO", "React Navigation", "Reanimated", "Expo"],
      category: "mobile",
      type: "Enterprise App",
      status: "Live",
      date: "2024",
      features: [
        "Bitki hastalığı tanı sistemi",
        "İlaç filtreleme ve öneriler",
        "Harita entegrasyonu",
        "Hava durumu takibi",
        "Real-time bildirimler",
        "Çiftçi iletişim platformu"
      ],
      linkedin: "",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Modern Günlük Uygulaması",
      description: "Kullanıcıların günlük journal girişlerini kolayca oluşturabileceği ve yönetebileceği modern tasarımlı platform.",
      longDescription: "React ve TypeScript ile geliştirilmiş, responsive tasarıma sahip web uygulaması. Material UI komponentleri ve JWT tabanlı authentication sistemi içerir.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Axios", "JWT", "Node.js"],
      category: "web",
      type: "Web App",
      status: "Completed",
      date: "2024",
      features: [
        "Günlük yazı editörü",
        "Kategori ve etiket sistemi",
        "Arama ve filtreleme",
        "Responsive tasarım",
        "Güvenli authentication"
      ],
      linkedin: "https://www.linkedin.com/posts/necatisahhin_metin-temelli-sanal-terapi-ve-modern-activity-7335674426031493120-H1E9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj4qr8ByQ41hBroJnwZds-B1PtgnGnOs3U",
      demo: "https://demo-link.com",
      featured: false
    },
    {
      id: 5,
      title: "Task Management Platform",
      description: "InnoLCare için geliştirilen, küçük ve orta ölçekli işletmeler için takım aktivitelerini organize eden web platformu.",
      longDescription: "Full-stack web uygulaması olarak geliştirilen bu platform, takım çalışmasını optimize eder. Kanban board, real-time collaboration ve otomatik görev hatırlatmaları içerir.",
      image: "/api/placeholder/400/250",
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Node.js", "Socket.IO", "PostgreSQL", "Prisma", "RabbitMQ"],
      category: "web",
      type: "Web Platform",
      status: "Live",
      date: "2024",
      features: [
        "Kanban board tasarımı",
        "Real-time collaboration",
        "Otomatik hatırlatmalar",
        "Takım iletişim araçları",
        "Proje analitikleri"
      ],
      linkedin: "https://www.linkedin.com/posts/necatisahhin_typescript-nodejs-postgresql-activity-7341447705770000384-8YhS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj4qr8ByQ41hBroJnwZds-B1PtgnGnOs3U",
      demo: null,
      featured: true
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Socket.IO ve modern frontend teknolojileri ile geliştirilmiş real-time mesajlaşma uygulaması.",
      longDescription: "WebSocket teknolojisi kullanarak anlık mesajlaşma, grup sohbetleri ve dosya paylaşımı özelliklerini sunan modern chat uygulaması.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.IO", "Node.js", "Express", "MongoDB", "JWT"],
      category: "web",
      type: "Web App",
      status: "Completed",
      date: "2023",
      features: [
        "Anlık mesajlaşma",
        "Grup sohbetleri",
        "Dosya paylaşımı",
        "Online kullanıcı takibi",
        "Message history"
      ],
      linkedin: null,
      demo: "https://demo-link.com",
      featured: false
    },
    {
      id: 7,
      title: "Öğrenci Pazarı",
      description: "Üniversite öğrencileri için full-stack e-ticaret platformu. React + TypeScript frontend ve Node.js backend ile sıfırdan geliştirilen ikinci el ürün alım-satım uygulaması.",
      longDescription: "Full-stack web uygulaması olarak geliştirilen bu platform, öğrencilerin dolap, koltuk, buzdolabı gibi ürünleri güvenli şekilde alıp satmasını sağlar. JWT kimlik doğrulama, çoklu resim yükleme ve PostgreSQL veritabanı ile güçlü bir altyapıya sahiptir.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "Material-UI", "Redux Toolkit"],
      category: "web",
      type: "Full Stack App",
      status: "Completed",
      date: "2024",
      features: [
        "JWT tabanlı güvenli giriş sistemi",
        "Çoklu resim yükleme (max 10, 5MB)",
        "RESTful API backend",
        "PostgreSQL + Prisma ORM",
        "Redux Toolkit state management",
        "Swagger UI API dokümantasyonu"
      ],
      linkedin: "https://www.linkedin.com/posts/necatisahhin_fullstack-nodejs-react-activity-7340124690104877056-km7C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj4qr8ByQ41hBroJnwZds-B1PtgnGnOs3U",
      demo: null,
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'Tümü', count: projects.length },
    { key: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

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

  return (
    <section className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projelerim</h2>
          <p className="section-subtitle">
            Geliştirdiğim uygulamalar ve çözümler
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
              <span className="filter-count">{filter.count}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >



              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="project-type">
                      {/* @ts-ignore */}
                      {project.category === 'mobile' ? <FaMobile size={16} /> : <FaGlobe size={16} />}
                      {project.type}
                    </span>
                    <span className="project-date">
                      {/* @ts-ignore */}
                      <FaCalendarAlt size={14} />
                      {project.date}
                    </span>
                  </div>
                  <div className="project-actions">
                    {project.linkedin && (
                      <motion.a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="LinkedIn Post"
                      >
                        {/* @ts-ignore */}
                        <FaLinkedin size={20} />
                      </motion.a>
                    )}
                    <span className={`project-status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Özellikler:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="more-features">+{project.features.length - 3} daha fazla</li>
                    )}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3>Proje Geliştirme Yaklaşımım</h3>
            <p>
              Her projede <strong>kullanıcı deneyimi</strong>, <strong>performans</strong> ve 
              <strong> ölçeklenebilirlik</strong> önceliklerimi göz önünde bulundururum. 
              Modern teknolojiler ve best practice'ler kullanarak, 
              sürdürülebilir ve maintainable çözümler geliştirmeye odaklanırım.
            </p>
            
            <div className="approach-highlights">
              <div className="approach-item">
                <span className="approach-icon">
                  {/* @ts-ignore */}
                  <FaBullseye size={24} />
                </span>
                <div>
                  <h4>User-Centric Design</h4>
                  <p>Kullanıcı ihtiyaçlarını ön planda tutarak UX odaklı geliştirme</p>
                </div>
              </div>
              
              <div className="approach-item">
                <span className="approach-icon">
                  {/* @ts-ignore */}
                  <FaBolt size={24} />
                </span>
                <div>
                  <h4>Performance First</h4>
                  <p>Optimizasyon teknikleri ile hızlı ve responsive uygulamalar</p>
                </div>
              </div>
              
              <div className="approach-item">
                <span className="approach-icon">
                  {/* @ts-ignore */}
                  <FaWrench size={24} />
                </span>
                <div>
                  <h4>Clean Code</h4>
                  <p>Maintainable, scalable ve well-documented kod yazımı</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;