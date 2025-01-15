import React from 'react';
import { Search } from 'lucide-react';
import Logo from './Logo';

const NavigationBar = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Quizzes', href: '/quiz' },
    { title: 'Study Assistant', href: '/study-assistant' },
  ];

  return (
    <header className="border-b bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-xl font-bold text-orange-500">EduPlatform</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600">
              Upload Notes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 focus:outline-none hover:text-orange-500">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
