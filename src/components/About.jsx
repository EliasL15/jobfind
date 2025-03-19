import React from 'react';

const About = ({ language, translations, onBackToHome }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl border border-gray-100 p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 c assName="text-3xl font-bold text-gray-800">{translations[language].aboutTitle}</h2>
      </div>
      
      <div className="h-1 w-24 bg-blue-600 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations[language]?.mission || "Our Mission"}</h3>
          <p className="text-gray-600">
            {translations[language]?.missionDesc || "We connect talented professionals with companies that value their skills and expertise."}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations[language]?.team || "Our Team"}</h3>
          <p className="text-gray-600">
            {translations[language]?.teamDesc || "Our experienced team of recruitment specialists is dedicated to finding the perfect match for both employers and job seekers."}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{translations[language]?.presence || "Our Presence"}</h3>
          <p className="text-gray-600">
            {translations[language]?.presenceDesc || "With offices across Cyprus and partnerships with leading companies, we offer unparalleled access to job opportunities."}
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{translations[language]?.aboutUs || "About Us"}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {translations[language].aboutDescription}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {translations[language]?.aboutExtraInfo || "Founded in 2020, our platform has helped thousands of professionals find their dream jobs in various industries. We pride ourselves on personalized service, understanding both employer needs and candidate aspirations."}
        </p>
      </div>
      
      <div className="text-center">
        <button
          onClick={onBackToHome}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {translations[language].backToHome}
        </button>
      </div>
    </div>
  );
};

export default About;