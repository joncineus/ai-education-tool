import React, { useState, useMemo } from "react";
import { Grid, Search, Filter, Clock, BookOpen, Award, RefreshCw } from "lucide-react";
import Sidebar from "../( components )/Quizsidebar.jsx";
import PostCard from "../( components )/PostCard";
import SearchBar from "../( components )/Searchbar";
import NavigationBar from "../NavigationBar.jsx";
import Footer from "../( components )/Footer.jsx";
import Breadcrumb from "../( components )/Breadcrumb.jsx";

const QuizCategories = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Quizzes', icon: Grid },
    { id: 'popular', name: 'Popular', icon: Award },
    { id: 'recent', name: 'Recent', icon: Clock },
    { id: 'learning', name: 'Learning Path', icon: BookOpen },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {categories.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            activeCategory === id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icon size={18} />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

const QuizFilters = ({ onFilterChange, onReset, filters }) => {
  const filterOptions = [
    { label: 'Difficulty', options: ['Beginner', 'Intermediate', 'Advanced'] },
    { label: 'Duration', options: ['< 15 mins', '15-30 mins', '> 30 mins'] },
    { label: 'Type', options: ['Multiple Choice', 'True/False', 'Mixed'] },
  ];

  return (
    <div className="flex items-center gap-4 mb-6">
      {filterOptions.map((filter) => (
        <select
          key={filter.label}
          value={filters[filter.label.toLowerCase()] || ''}
          onChange={(e) => onFilterChange(filter.label.toLowerCase(), e.target.value)}
          className="px-4 py-2 border rounded-lg text-gray-600 bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">{filter.label}</option>
          {filter.options.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      ))}
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
      >
        <RefreshCw size={16} />
        Reset Filters
      </button>
    </div>
  );
};

const Quiz = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState({
    difficulty: '',
    duration: '',
    type: '',
    category: '',
    tag: ''
  });
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
      difficulty: "Beginner",
      duration: "15 mins",
      participants: 1234,
      rating: 4.5,
    },
    {
      id: 2,
      title: "JavaScript Basics",
      date: "Feb 10, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Learn the basics of JavaScript in this beginner-friendly quiz.",
      difficulty: "Beginner",
      duration: "10 mins",
      participants: 980,
      rating: 4.7,
    },
    {
      id: 3,
      title: "Advanced CSS Techniques",
      date: "Mar 5, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Test your knowledge of advanced CSS techniques.",
      difficulty: "Advanced",
      duration: "20 mins",
      participants: 750,
      rating: 4.6,
    },
    {
      id: 4,
      title: "React for Beginners",
      date: "Apr 12, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "A quiz for beginners to test their React knowledge.",
      difficulty: "Beginner",
      duration: "15 mins",
      participants: 1120,
      rating: 4.8,
    },
    {
      id: 5,
      title: "Node.js and Express",
      date: "May 20, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Test your skills in Node.js and Express.",
      difficulty: "Intermediate",
      duration: "25 mins",
      participants: 890,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Python Programming",
      date: "Jun 15, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "A comprehensive quiz on Python programming.",
      difficulty: "Advanced",
      duration: "30 mins",
      participants: 1340,
      rating: 4.9,
    },
    {
      id: 7,
      title: "Digital Marketing Basics",
      date: "Jul 8, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Test your knowledge of digital marketing basics.",
      difficulty: "Beginner",
      duration: "12 mins",
      participants: 670,
      rating: 4.4,
    },
    {
      id: 8,
      title: "UI/UX Design Fundamentals",
      date: "Aug 22, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "A quiz on the fundamentals of UI/UX design.",
      difficulty: "Intermediate",
      duration: "18 mins",
      participants: 920,
      rating: 4.7,
    },
    {
      id: 9,
      title: "Photography Techniques",
      date: "Sep 30, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "Test your knowledge of photography techniques.",
      difficulty: "Advanced",
      duration: "22 mins",
      participants: 810,
      rating: 4.6,
    },
    {
      id: 10,
      title: "Music Production Basics",
      date: "Oct 15, 2023",
      image: "/images/OIP.jpeg",
      excerpt: "A quiz on the basics of music production.",
      difficulty: "Beginner",
      duration: "14 mins",
      participants: 560,
      rating: 4.3,
    },
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value.toLowerCase() }));
  };

  const handleResetFilters = () => {
    setFilters({
      difficulty: '',
      duration: '',
      type: '',
      category: '',
      tag: ''
    });
    setActiveCategory('all');
    setSearchTerm('');
  };

  const getDurationInMinutes = (durationStr) => {
    return parseInt(durationStr.split(' ')[0]);
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // Search filter (single search implementation)
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        if (!post.title.toLowerCase().includes(searchLower) &&
            !post.excerpt.toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'popular' && post.participants < 1000) return false;
        if (activeCategory === 'recent' && new Date(post.date) < new Date('2023-06-01')) return false;
        if (activeCategory === 'learning' && !post.isLearningPath) return false;
      }

      // Filters
      if (filters.difficulty && post.difficulty.toLowerCase() !== filters.difficulty) return false;
      if (filters.duration) {
        const minutes = getDurationInMinutes(post.duration);
        if (filters.duration === '< 15 mins' && minutes >= 15) return false;
        if (filters.duration === '15-30 mins' && (minutes < 15 || minutes > 30)) return false;
        if (filters.duration === '> 30 mins' && minutes <= 30) return false;
      }
      if (filters.type && post.type?.toLowerCase() !== filters.type) return false;
      if (filters.category) {
        const categoryMatch = post.categories?.some(cat => 
          cat.toLowerCase() === filters.category
        );
        if (!categoryMatch) return false;
      }
      if (filters.tag) {
        const tagMatch = post.tags?.some(tag => 
          tag.toLowerCase() === filters.tag
        );
        if (!tagMatch) return false;
      }

      return true;
    });
  }, [posts, activeCategory, filters, searchTerm]);

  const handleCategorySelect = (category) => {
    // Update your filters based on category
    setFilters(prev => ({ ...prev, category: category.toLowerCase() }));
  };

  const handleTagSelect = (tag) => {
    // Update your filters based on tag
    setFilters(prev => ({ ...prev, tag: tag.toLowerCase() }));
  };

  return (
    <>
      <NavigationBar />
      <Breadcrumb />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="flex gap-8 relative">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Quizzes</h2>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2 border rounded-lg p-1">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded ${view === 'grid' ? 'bg-gray-100' : ''}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded ${view === 'list' ? 'bg-gray-100' : ''}`}
                  >
                    <Filter size={20} />
                  </button>
                </div>
              </div>
            </div>

            <QuizCategories
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <QuizFilters 
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
              filters={filters}
            />

            <div className={`grid ${
              view === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid-cols-1 gap-4'
            }`}>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    view={view}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No quizzes found matching your criteria
                </div>
              )}
            </div>

            {/* Add mobile filter button */}
            <button
              className="md:hidden fixed bottom-4 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Filter size={24} />
            </button>
          </div>

          <Sidebar
            className="hidden md:block w-80 flex-shrink-0"
            onCategorySelect={handleCategorySelect}
            onTagSelect={handleTagSelect}
            onReset={handleResetFilters}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            activeFilters={filters}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;