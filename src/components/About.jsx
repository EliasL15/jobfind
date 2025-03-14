// src/components/About.jsx
import React from 'react';

const About = ({ language, translations, onBackToHome }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{translations[language].aboutTitle}</h2>
      <p className="text-gray-600 mb-6">
        {translations[language].aboutDescription}
      </p>
      <button
        onClick={onBackToHome}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
      >
        {translations[language].backToHome}
      </button>
    </div>
  );
};

export default About;