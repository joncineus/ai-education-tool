import React from 'react';


const FeaturedCourses = () => {
  const courses = [
    {
      title: 'Create An LMS Website With LearnPress',
      duration: '7 Weeks',
      students: '136',
      price: '$29.0',
      discountPrice: '$25.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'Design A Website With ThimPress',
      duration: '7 Weeks',
      students: '156',
      price: '$59.0',
      discountPrice: '$49.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'Mastering JavaScript',
      duration: '6 Weeks',
      students: '200',
      price: '$39.0',
      discountPrice: '$35.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'Advanced CSS Techniques',
      duration: '5 Weeks',
      students: '180',
      price: '$49.0',
      discountPrice: '$45.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'React for Beginners',
      duration: '8 Weeks',
      students: '220',
      price: '$69.0',
      discountPrice: '$59.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'Node.js and Express',
      duration: '7 Weeks',
      students: '150',
      price: '$59.0',
      discountPrice: '$50.0',
      image: '/images/OIP.jpeg',
    },
    {
      title: 'Python Programming',
      duration: '10 Weeks',
      students: '300',
      price: '$79.0',
      discountPrice: '$69.0',
      image: '/images/OIP.jpeg',
    },
  ];

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg"
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500">{course.duration}</p>
            <p className="text-sm text-gray-500">{course.students} Students</p>
            <div className="mt-4">
              <span className="line-through text-gray-400 mr-2">{course.price}</span>
              <span className="text-orange-500 font-bold">{course.discountPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
