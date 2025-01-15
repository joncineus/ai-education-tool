import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getCustomPathName = (path) => {
    const pathMap = {
      'courses': 'Courses',
      'quiz': 'Quizzes',
      'study-assistant': 'Study Assistant',
      'community': 'Community',
      'faq': 'FAQ',
    };
    return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 py-4">
          <Link 
            to="/"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <ChevronRight size={16} className="text-gray-400" />
                {isLast ? (
                  <span className="text-blue-600 font-medium">
                    {getCustomPathName(name)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {getCustomPathName(name)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
