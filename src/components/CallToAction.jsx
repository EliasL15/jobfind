import React from 'react';

const CallToAction = ({language, translations, onApplyNow}) => {
  const stats = [
    { number: '1000+', label: translations[language]?.jobPlacement },
    { number: '95%', label: translations[language]?.successRate },
    { number: '48h', label: translations[language]?.averageResponse },
  ];


  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl p-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{translations[language]?.joinThousands}</h2>
        <p className="text-lg text-blue-100">{translations[language]?.joinThousandsDesc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center transform transition-all duration-500 hover:scale-110">
            <div className="text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center">

        <button 
          onClick= {onApplyNow}
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
          {translations[language]?.startYourJourney}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;