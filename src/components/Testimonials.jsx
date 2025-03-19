import React, { useState, useEffect } from 'react';

const Testimonials = ({ language, translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalTime = 4000;

  // Build the testimonials array using keys from translations.json
  const testimonials = translations?.[language]?.clientTestimonials

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="relative py-12 px-8">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {translations?.[language]?.whatOurClientsSay}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {translations?.[language]?.whatOurClientsSayDesc}
        </p>
        
        <div 
          className="relative overflow-hidden max-w-4xl mx-auto rounded-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-full bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 shadow-lg">
                    <div className="bg-white rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-blue-600 font-medium">{testimonial.position}</p>
                  </div>
                </div>
                <div className="relative pl-6 border-l-4 border-blue-500">
                  <svg className="absolute -left-3 -top-2 h-6 w-6 text-blue-500 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.586l5.707-5.707c0.391-0.391 0.391-1.024 0-1.414l-4-4c-0.391-0.391-1.024-0.391-1.414 0l-5.707 5.707h-8.586c-2.2 0-4 1.8-4 4v2h8.586l-1.293-1.293c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3 3c0.391 0.391 0.391 1.024 0 1.414l-3 3c-0.391 0.391-1.024 0.391-1.414 0s-0.391-1.024 0-1.414l1.293-1.293h-8.586v2z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg italic leading-relaxed">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
