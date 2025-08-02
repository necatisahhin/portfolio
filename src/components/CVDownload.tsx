import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaMobileAlt, FaFileAlt } from 'react-icons/fa';

interface CVOption {
  id: string;
  title: string;
  description: string;
  filename: string;
  icon: any;
  color: string;
  bgColor: string;
}

interface CVDownloadProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

const CVDownload: React.FC<CVDownloadProps> = ({ 
  title = "CV İndir", 
  subtitle = "İlgilendiğiniz pozisyona uygun CV'mi indirin",
  showTitle = true 
}) => {
  const cvOptions: CVOption[] = [
    {
      id: 'fullstack',
      title: 'Full Stack Developer CV',
      description: 'Web geliştirme, React, Node.js ve full stack teknolojiler',
      filename: 'necatisahinCVFullStack.pdf',
      icon: FaCode,
      color: '#3B82F6',
      bgColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
      id: 'mobile',
      title: 'Mobile Developer CV',
      description: 'React Native, mobil uygulama geliştirme ve native teknolojiler',
      filename: 'necatisahinCVMobileDeveloper.pdf',
      icon: FaMobileAlt,
      color: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    }
  ];

  const handleDownload = (cv: CVOption) => {
    const link = document.createElement('a');
    link.href = `/${cv.filename}`;
    link.download = cv.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <motion.div 
      className="cv-download-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {showTitle && (
        <motion.div className="cv-download-header" variants={itemVariants}>
          <h3 className="cv-download-title">{title}</h3>
          <p className="cv-download-subtitle">{subtitle}</p>
        </motion.div>
      )}
      
      <motion.div className="cv-options" variants={containerVariants}>
        {cvOptions.map((cv) => {
          const IconComponent = cv.icon;
          return (
            <motion.div
              key={cv.id}
              className="cv-option"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ 
                backgroundColor: cv.bgColor,
                borderColor: cv.color 
              }}
            >
              <div className="cv-option-icon" style={{ color: cv.color }}>
                {/* @ts-ignore */}
                <IconComponent size={24} />
              </div>
              
              <div className="cv-option-content">
                <h4 className="cv-option-title">{cv.title}</h4>
                <p className="cv-option-description">{cv.description}</p>
              </div>
              
              <motion.button
                className="cv-download-btn"
                onClick={() => handleDownload(cv)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: cv.color }}
              >
                {/* @ts-ignore */}
                <FaDownload size={16} />
                <span>İndir</span>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div className="cv-info" variants={itemVariants}>
        <div className="cv-info-item">
          {/* @ts-ignore */}
          <FaFileAlt size={16} />
          <span>PDF formatında</span>
        </div>
        <div className="cv-info-item">
          <span>•</span>
          <span>Güncel versiyon</span>
        </div>
        <div className="cv-info-item">
          <span>•</span>
          <span>Hemen indirilebilir</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CVDownload;