import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-200 to-green-200 p-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Your AI-Powered Path To Knowledge</h1>
        <p className="text-lg text-gray-600 mt-4">Transforming Education for a Smarter Tomorrow</p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;