import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'person' | 'website' | 'organization';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'person' }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Necati Can Şahin",
          "jobTitle": "Full Stack Developer",
          "description": "React, React Native ve Node.js uzmanı Full Stack Developer",
          "url": "https://necaticansahin.com",
          "email": "necatisahin3152@gmail.com",
          "telephone": "+90-XXX-XXX-XXXX",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "Turkey"
          },
          "sameAs": [
            "https://github.com/necatisahhin",
            "https://linkedin.com/in/necatisahhin"
          ],
          "knowsAbout": [
            "React",
            "React Native", 
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Mobile Development",
            "Web Development",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Necati Can Şahin Portfolio",
          "url": "https://necaticansahin.com",
          "description": "Full Stack Developer Necati Can Şahin'in profesyonel portfolio websitesi",
          "author": {
            "@type": "Person",
            "name": "Necati Can Şahin"
          },
          "inLanguage": "tr-TR",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://necaticansahin.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
      
      default:
        return {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;