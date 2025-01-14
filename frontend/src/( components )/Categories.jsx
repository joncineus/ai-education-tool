import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Art & Design', count: 33 },
    { name: 'Development', count: 38 },
    { name: 'Communication', count: 38 },
    { name: 'Videography', count: 33 },
    { name: 'Photography', count: 33 },
    { name: 'Marketing', count: 38 },
    { name: 'Content Writing', count: 38 },
    { name: 'Finance', count: 30 },
    { name: 'Science', count: 30 },
    { name: 'Network', count: 35 },
  ];

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow text-center hover:bg-orange-100"
          >
            <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count} Courses</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
