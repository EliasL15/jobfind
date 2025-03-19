import React from 'react';

const Features = ({ language, translations }) => {
  const features = [
    { 
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "from-blue-500 to-blue-600",
      title: translations[language]?.benefits,
      description: translations[language]?.benefitsDesc
    },
    { 
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "from-indigo-500 to-indigo-600",
      title: translations[language]?.flexibility,
      description: translations[language]?.flexibilityDesc
    },
    { 
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "from-purple-500 to-purple-600",
      title: translations[language]?.growth,
      description: translations[language]?.growthDesc
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="relative py-12 px-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{translations[language]?.whyChooseUs}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">{translations[language]?.whyChooseDesc}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-6">
                <div className={`rounded-full p-4 mb-6 bg-gradient-to-br ${feature.color} transform group-hover:scale-110 transition-transform duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;