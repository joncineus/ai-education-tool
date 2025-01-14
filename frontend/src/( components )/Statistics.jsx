import React from 'react';

const Statistics = () => {
  const stats = [
    { label: 'Active Students', value: '25K+' },
    { label: 'Total Courses', value: '899' },
    { label: 'Instructors', value: '158' },
    { label: 'Satisfaction Rate', value: '100%' },
  ];

  return (
    <section className="p-10 bg-orange-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="">
            <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;