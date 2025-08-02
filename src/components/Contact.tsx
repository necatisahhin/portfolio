import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane, 
  FaComments,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import CVDownload from './CVDownload';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo: Array<{
    icon: any;
    title: string;
    value: string;
    link: string | null;
    description: string;
  }> = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'necatisahin3152@gmail.com',
      link: 'mailto:necatisahin3152@gmail.com',
      description: 'En hızlı iletişim yolu'
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: '+90 531 572 55 06',
      link: 'tel:+905315725506',
      description: 'Acil durumlar için'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Konum',
      value: 'Antalya, Türkiye',
      link: null,
      description: 'Mevcut lokasyon'
    },
    {
      icon: FaClock,
      title: 'Çalışma Saatleri',
      value: '09:00 - 18:00',
      link: null,
      description: 'Pazartesi - Cuma'
    }
  ];

  const socialLinks: Array<{
    icon: any;
    name: string;
    url: string;
    color: string;
  }> = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/necatisahhin',
      color: '#0A66C2'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/necatisahhin',
      color: '#333'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS konfigürasyonu
      const templateParams = {
        to_name: 'Necati Şahin',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_portfolio', // EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact', // EmailJS template ID
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key' // EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">İletişime Geçin</h2>
          <p className="section-subtitle">
            Birlikte harika projeler geliştirelim
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-intro" variants={itemVariants}>
              <h3>Hadi Konuşalım!</h3>
              <p>
                Yeni projeler, iş fırsatları veya teknik sorularınız için 
                benimle iletişime geçmekten çekinmeyin. 
                Her zaman yeni fikirler ve challenges için heyecanlıyım!
              </p>
            </motion.div>

            <div className="contact-methods">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="contact-icon">
                      {/* @ts-ignore */}
                      <IconComponent size={24} />
                    </div>
                    <div className="contact-details">
                      <h4>{contact.title}</h4>
                      {contact.link ? (
                        <a href={contact.link} className="contact-value">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="contact-value">{contact.value}</span>
                      )}
                      <p className="contact-description">{contact.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div className="social-section" variants={itemVariants}>
              <h4>Sosyal Medya</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: social.color }}
                    >
                      {/* @ts-ignore */}
                      <IconComponent size={20} />
                      <span>{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div className="availability-status" variants={itemVariants}>
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span>Yeni projeler için müsait</span>
              </div>
              <p>
                Freelance projeler ve tam zamanlı pozisyonlar için açığım. 
                Remote çalışma deneyimim ve flexible çalışma saatlerim bulunuyor.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CVDownload />
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              {/* @ts-ignore */}
              <FaComments size={24} />
              <h3>Mesaj Gönderin</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Adınızı girin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-button ${submitStatus}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Gönderiliyor...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    {/* @ts-ignore */}
                    <FaCheckCircle size={20} />
                    Gönderildi!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    {/* @ts-ignore */}
                    <FaExclamationCircle size={20} />
                    Tekrar Deneyin
                  </>
                ) : (
                  <>
                    {/* @ts-ignore */}
                    <FaPaperPlane size={20} />
                    Mesaj Gönder
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* @ts-ignore */}
                  <FaCheckCircle size={20} />
                  <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* @ts-ignore */}
                  <FaExclamationCircle size={20} />
                  <span>Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin veya doğrudan email ile iletişime geçin.</span>
                </motion.div>
              )}
            </form>

            <div className="form-note">
              <p>
                * Mesajınıza genellikle 24 saat içinde yanıt veriyorum. 
                Acil durumlar için telefon ile iletişime geçebilirsiniz.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Birlikte Harika İşler Çıkaralım!</h3>
            <p>
              İster startup, ister enterprise - her türlü projede deneyimim var. 
              Modern teknolojilerle scalable çözümler üretmeye hazırım.
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Yanıt Süresi</span>
              </div>
              <div className="cta-stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Tamamlanan Proje</span>
              </div>
              <div className="cta-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;