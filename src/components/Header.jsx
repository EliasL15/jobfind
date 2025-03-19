// src/components/Header.jsx
import React from 'react';

const Header = ({ language, translations, onLanguageChange, onBackToHome }) => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          <div 
            onClick={onBackToHome}
            className="flex items-center cursor-pointer group"
          >
            <div className="mr-3 bg-blue-600 text-white p-2 rounded-lg shadow-md transition-all duration-300 group-hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 transition-all duration-300 group-hover:from-blue-700 group-hover:to-indigo-800">
                {translations[language].title}
              </span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <label htmlFor="language-select" className="text-gray-700 font-medium">
                {translations[language].language || "Language"}
              </label>
            </div>
            <div className="relative">
              <select
                id="language-select"
                value={language}
                onChange={onLanguageChange}
                className="appearance-none bg-white text-gray-800 text-sm md:text-base font-medium py-2 pl-4 pr-10 rounded-lg border border-gray-300 shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="en">English</option>
                <option value="gr">Greek</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;