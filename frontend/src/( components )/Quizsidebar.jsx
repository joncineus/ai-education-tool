import React, { useState } from 'react';
import { ChevronDown, X, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar({ onCategorySelect, onTagSelect, onReset, className, isOpen, onClose, activeFilters }) {
  const [expandedSections, setExpandedSections] = useState(['category', 'recent', 'tags']);

  const categories = [
    { name: 'Commercial', count: 15 },
    { name: 'Office', count: 12 },
    { name: 'Shop', count: 8 },
    { name: 'Educate', count: 20 },
    { name: 'Academy', count: 16 },
    { name: 'Single family home', count: 10 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Best LearnPress WordPress Theme Collection For 2023',
      date: '2023-10-15'
    },
    {
      id: 2,
      title: 'How to Create an Online Course Website',
      date: '2023-10-10'
    },
    {
      id: 3,
      title: 'Top Educational WordPress Themes',
      date: '2023-10-05'
    }
  ];

  const tags = [
    { name: 'Free courses', count: 25 },
    { name: 'Marketing', count: 18 },
    { name: 'Idea', count: 12 },
    { name: 'LMS', count: 30 },
    { name: 'LearnPress', count: 22 },
    { name: 'Instructor', count: 15 }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <aside className={`
      ${className}
      bg-white p-4 rounded-lg shadow-sm
      transition-all duration-300
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      md:translate-x-0
      fixed top-0 right-0 h-full md:relative
      z-50 md:z-0
      w-80
    `}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">Filters</h2>
        {/* Reset button */}
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          title="Reset all filters"
        >
          <RefreshCw size={16} />
          <span className="text-sm">Reset</span>
        </button>
      </div>

      {/* Mobile close button */}
      <button 
        onClick={onClose}
        className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
      >
        <X size={20} />
      </button>

      <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-2rem)]">
        {/* Categories Section */}
        <div>
          <button
            onClick={() => toggleSection('category')}
            className="w-full flex justify-between items-center font-bold text-lg mb-4"
          >
            <span>Category</span>
            <ChevronDown
              className={`transition-transform ${
                expandedSections.includes('category') ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {expandedSections.includes('category') && (
            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category.name}
                  onClick={() => onCategorySelect?.(category.name)}
                  className={`
                    flex justify-between text-gray-700 cursor-pointer transition-colors
                    ${activeFilters.category === category.name.toLowerCase() 
                      ? 'text-blue-600 font-medium' 
                      : 'hover:text-blue-600'
                    }
                  `}
                >
                  <span>{category.name}</span>
                  <span className="bg-gray-100 px-2 rounded-full text-sm">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Recent Posts Section */}
        <div>
          <button
            onClick={() => toggleSection('recent')}
            className="w-full flex justify-between items-center font-bold text-lg mb-4"
          >
            <span>Recent Posts</span>
            <ChevronDown
              className={`transition-transform ${
                expandedSections.includes('recent') ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {expandedSections.includes('recent') && (
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="group block"
                  >
                    <h3 className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tags Section */}
        <div>
          <button
            onClick={() => toggleSection('tags')}
            className="w-full flex justify-between items-center font-bold text-lg mb-4"
          >
            <span>Tags</span>
            <ChevronDown
              className={`transition-transform ${
                expandedSections.includes('tags') ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {expandedSections.includes('tags') && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  onClick={() => onTagSelect?.(tag.name)}
                  className={`
                    text-sm px-3 py-1 rounded-full cursor-pointer transition-colors
                    ${activeFilters.tag === tag.name.toLowerCase()
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                >
                  {tag.name} ({tag.count})
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
