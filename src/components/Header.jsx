// src/components/Header.jsx
import React from 'react';

const Header = ({ language, translations, onLanguageChange }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex items-center justify-center h-16 md:h-20 w-full max-w-4xl">
          <div className="flex-1 flex justify-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                {translations[language].title}
              </span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <label htmlFor="language-select" className="text-gray-700 font-medium">
                Language
              </label>
            </div>
            <select
              id="language-select"
              value={language}
              onChange={onLanguageChange}
              className="bg-white text-gray-800 text-sm md:text-base font-medium py-1.5 md:py-2 px-2 md:px-4 rounded-lg border border-gray-300 shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="en">English</option>
              <option value="gr">Greek</option>
              <option value="ru">Russian</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

