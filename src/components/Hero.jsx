import React from 'react';

const Hero = ({ language, translations, onApplyNow, onLearnMore }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {translations[language]?.findDreamJob}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8">
            {translations[language]?.missionDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onApplyNow}
              className="bg-white text-blue-700 hover:text-blue-800 px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              {translations[language]?.applyNow}
            </button>
            <button 
              onClick={onLearnMore}
              className="bg-transparent text-white hover:bg-white hover:bg-opacity-10 border-2 border-white px-6 sm:px-8 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              {translations[language]?.learnMore}
            </button>
          </div>
        </div>
        
        {/* Responsive icon container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transform scale-90 sm:scale-100">
            {/* Mobile optimization: simplified layers on small screens */}
            <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full shadow-xl transform rotate-45 hidden sm:block"></div>
            <div className="absolute inset-0 sm:inset-4 bg-white bg-opacity-20 rounded-full shadow-xl"></div>
            <div className="absolute inset-4 sm:inset-8 bg-white bg-opacity-30 rounded-full shadow-xl"></div>
            <div className="absolute inset-8 sm:inset-12 bg-white bg-opacity-40 rounded-full shadow-xl transform -rotate-12"></div>
            <div className="absolute inset-12 sm:inset-16 bg-white rounded-full shadow-xl flex items-center justify-center">
              {/* Responsive icon size */}
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-blue-700" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;