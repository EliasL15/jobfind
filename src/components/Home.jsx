import React from 'react';

const Home = ({ language, translations, onApplyNow, onLearnMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {translations[language].findDreamJob}
      </h2>
      <p className="text-gray-600 mb-6">
        {translations[language].description}
      </p>
      <div className="flex flex-col sm:flex-row gap-8">
        <button
          onClick={onApplyNow}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
        >
          {translations[language].applyNow}
        </button>
        <button
          onClick={onLearnMore}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
        >
          {translations[language].learnMore}
        </button>
      </div>
    </div>
  );
};

export default Home;
