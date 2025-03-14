// src/components/Footer.jsx
import React from 'react';

const Footer = ({ language, translations }) => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <h3 className="text-lg font-bold">{translations[language].title}</h3>
            <p className="text-gray-400 text-sm">{translations[language].footerStatement}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">info@jobfindercyprus.com | +357 25 123 456</p>
            <p className="text-gray-400 text-sm mt-1">© 2025 Job Finder Cyprus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;