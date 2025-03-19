import React, { useState, useEffect } from 'react';
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
  const [pageTransition, setPageTransition] = useState(false);
  const [loading, setLoading] = useState(true);

  // Handle initial page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const changeView = (newView) => {
    setPageTransition(true);
    
    setTimeout(() => {
      setView(newView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setPageTransition(false);
    }, 300);
  };

  const handleApplyNow = () => {
    changeView("form");
  };

  const handleLearnMore = () => {
    changeView("about");
  };

  const handleInputChange = (index, value) => {
    const newFormData = [...formData];
    newFormData[index] = value;
    setFormData(newFormData);
  };

  const handleBackToHome = () => {
    changeView("index");
    setFormData(Array(10).fill(""));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header
        language={language}
        translations={translations}
        onLanguageChange={handleLanguageChange}
        onBackToHome={handleBackToHome}
      />
      
      <main className="container mx-auto px-4 pt-24 md:pt-28 lg:pt-32 flex-grow py-8 md:py-12">
        <div 
          className={`transition-all duration-500 ease-in-out w-full 
          ${loading || pageTransition ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}
        >
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
      </main>
      
      <Footer 
        language={language}
        translations={translations}
      />
    </div>
  );
}

export default App;