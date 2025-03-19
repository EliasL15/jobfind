import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const Home = ({ language, translations, onApplyNow, onLearnMore }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 scroll-smooth">
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <Hero
              language={language}
              translations={translations}
              onApplyNow={onApplyNow}
              onLearnMore={onLearnMore}
            />
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <Features language={language} translations={translations} />
          </section>

          </section>
          
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <CallToAction language={language} translations={translations} onApplyNow={onApplyNow} />
          </section>
          
          <section className="transform transition-all duration-500 hover:scale-[1.01]">
            <Testimonials language={language} translations={translations}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;