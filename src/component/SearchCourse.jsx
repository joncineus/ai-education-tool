import React from 'react';
import { Search } from 'lucide-react';

const CourseSearch = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default CourseSearch;