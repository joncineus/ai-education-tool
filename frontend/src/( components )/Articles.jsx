import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      image: "/images/OIP.jpeg",
    },
    {
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      image: "/images/OIP.jpeg",
    },
    {
      title: "Best LearnPress WordPress Theme Collection For 2023",
      date: "Jan 24, 2023",
      image: "/images/OIP.jpeg",
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-bold mt-4">{article.title}</h3>
              <p className="text-gray-500 text-sm">{article.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
