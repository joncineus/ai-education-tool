import React from 'react';
import { Star } from 'lucide-react';

const FilterSidebar = () => {
  const categories = [
    { name: 'Math', count: 15 },
    { name: 'AI and Machine Learning', count: 15 },
    { name: 'Web Development', count: 15 },
    { name: 'Science', count: 15 },
    { name: 'Academy', count: 15 },
    { name: 'Arabic', count: 15 },
    { name: 'Physics', count: 15 },
    { name: 'Spanish', count: 15 }
  ];

  return (
    <div className="w-64 space-y-6">
      <div>
        <h2 className="font-semibold mb-4">Course Category</h2>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.name} className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="flex-1">{category.name}</span>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Price</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="flex-1">All</span>
            <span className="text-gray-500 text-sm">15</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="flex-1">Free</span>
            <span className="text-gray-500 text-sm">15</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="flex-1">Paid</span>
            <span className="text-gray-500 text-sm">15</span>
          </label>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Review</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="flex items-center gap-1">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5-rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
              </span>
              <span className="text-gray-500 text-sm">(1,025)</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Level</h2>
        <div className="space-y-2">
          {['All levels', 'Beginner', 'Intermediate', 'Expert'].map(level => (
            <label key={level} className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="flex-1">{level}</span>
              <span className="text-gray-500 text-sm">15</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;