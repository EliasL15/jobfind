import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import JobForm from './components/JobForm';
import About from './components/About';
import Footer from './components/Footer';
import translations from './translations.json';

function App() {
  const [language, setLanguage] = useState("en");
  const [view, setView] = useState("index");
  const [formData, setFormData] = useState(Array(10).fill(""));

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleApplyNow = () => {
    setView("form");
    window.scrollTo(0, 0);
  };

  const handleLearnMore = () => {
    setView("about");
  };

  const handleInputChange = (index, value) => {
    const newFormData = [...formData];
    newFormData[index] = value;
    setFormData(newFormData);
  };

  const handleBackToHome = () => {
    setView("index");
    setFormData(Array(10).fill(""));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        language={language}
        translations={translations}
        onLanguageChange={handleLanguageChange}
      />
      <div className="container mx-auto px-4 pt-20 md:pt-24 flex-grow flex items-center justify-center">
        <div className="transition-all duration-300 ease-in-out w-full">
          {view === "index" && (
            <Home
              language={language}
              translations={translations}
              onApplyNow={handleApplyNow}
              onLearnMore={handleLearnMore}
            />
          )}
          {view === "form" && (
            <JobForm
              language={language}
              translations={translations}
              formData={formData}
              onInputChange={handleInputChange}
              onBackToHome={handleBackToHome}
            />
          )}
          {view === "about" && (
            <About
              language={language}
              translations={translations}
              onBackToHome={handleBackToHome}
            />
          )}
        </div>
      </div>
      <Footer 
        language={language}
        translations={translations}
      />
    </div>
  );
}

export default App;
