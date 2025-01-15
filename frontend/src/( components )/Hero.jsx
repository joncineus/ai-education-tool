import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Brain, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { icon: Users, count: '10K+', label: 'Active Students' },
    { icon: BookOpen, count: '500+', label: 'Courses' },
    { icon: Star, count: '4.8', label: 'Average Rating' },
    { icon: Brain, count: '24/7', label: 'AI Support' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-yellow-50 via-blue-50 to-pink-50 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Learn Smarter with
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-transparent bg-clip-text">
              AI-Powered Education
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transform your learning journey with personalized AI assistance, interactive quizzes, and expert-led courses designed to help you succeed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/courses" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              Start Learning
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/study-assistant" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
              Try AI Assistant
              <Brain className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Right Column - Stats & Visual Elements */}
        <div className={`flex-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            <img 
              src="/images/boy.png" 
              alt="Learning Illustration" 
              className="w-full max-w-24 mx-auto"
              layout="responsive"
            />
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
