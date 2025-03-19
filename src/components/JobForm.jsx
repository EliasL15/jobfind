import React, { useState, useEffect } from 'react';

const JobForm = ({ language, translations, formData, onInputChange, onBackToHome }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [errorMessage, setErrorMessage] = useState('');

  // Map input types based on question context
  const getInputType = (index) => {
    if (index === 1) return "email"; // Email address
    if (index === 2) return "tel";   // Phone number
    return "text";                  // Default
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload with all questions in English mapped to their raw responses
    const form_data = translations['en'].questions.reduce((acc, question, index) => {
      acc[question] = formData[index];
      return acc;
    }, {});

    // Include name, email, and phone in the data dictionary
    const data = {
      Name: formData[0],
      Email: formData[1],
      Phone: formData[2],
      Data: form_data
    };


    try {
      const response = await fetch('./submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Submission successful
        setIsSuccess(true);
        setSubmitted(true);
      } else {
        // Submission failed
        setIsSuccess(false);
        setErrorMessage(translations[language].submissionFailedMessage);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setIsSuccess(false);
      setErrorMessage(translations[language].submissionFailedMessage);
      setSubmitted(true);
    }
  };

  // Countdown effect for successful submission
  useEffect(() => {
    if (submitted && isSuccess) {
      const intervalId = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(intervalId);
            onBackToHome();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [submitted, isSuccess, onBackToHome]);

  // If submitted, display a message instead of the form
  if (submitted) {
    if (isSuccess) {
      return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            {translations[language].submissionSuccess}
          </h2>
          <p className="text-gray-600 mb-4">
            {translations[language].redirectMessage.replace('{countdown}', countdown)}
          </p>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            {translations[language].submissionFailed}
          </h2>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
          >
            {translations[language].tryAgain}
          </button>
        </div>
      );
    }
  }

  // Render the form if not yet submitted
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {translations[language].applicationFormTitle}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {translations[language].questions.map((question, index) => (
            <div key={index} className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">{question}</label>
              {index === 4 ? (
                <textarea
                  value={formData[index]}
                  onChange={(e) => onInputChange(index, e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800"
                  rows="3"
                />
              ) : (
                <input
                  type={getInputType(index)}
                  value={formData[index]}
                  onChange={(e) => onInputChange(index, e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800"
                  required
                />
              )}
            </div>
          ))}
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
              onClick={onBackToHome}
              >
              {translations[language].backToHome}
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-sm transition-all duration-200"
            >
              {translations[language].submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
