import React from 'react';

const Feedback = () => {
  const feedbacks = [
    {
      name: "Roe Smith",
      role: "Designer",
      feedback: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..."
    },
    {
      name: "Roe Smith",
      role: "Designer",
      feedback: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..."
    },
    {
      name: "Roe Smith",
      role: "Designer",
      feedback: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..."
    }
  ];

  return (
    <section className="py-12 bg-gray-100 mt-10">
      <div className="container mx-auto p-10">
        <h2 className="text-3xl font-bold mb-6">Student Feedbacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <p className="text-gray-700 italic">"{item.feedback}"</p>
              <h4 className="text-lg font-bold mt-4">{item.name}</h4>
              <p className="text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;