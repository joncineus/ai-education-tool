import React from "react";
import Sidebar from "../( components )/Quizsidebar.jsx";
import PostCard from "../( components )/PostCard";
import SearchBar from "../( components )/Searchbar";

const Quiz = () => {
  const posts = [
    { id: 1, title: "Best LearnPress WordPress Theme Collection For 2023", date: "Jan 24, 2023", image: "/images/OIP.jpeg", excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme?" },
    { id: 2, title: "Best LearnPress WordPress Theme Collection For 2023", date: "Jan 24, 2023", image: "/images/OIP.jpeg", excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme?" },
    { id: 3, title: "Best LearnPress WordPress Theme Collection For 2023", date: "Jan 24, 2023", image: "/images/OIP.jpeg", excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme?" },
    { id: 4, title: "Best LearnPress WordPress Theme Collection For 2023", date: "Jan 24, 2023", image: "/images/OIP.jpeg", excerpt: "Looking for an amazing & well-functional LearnPress WordPress Theme?" },
  ];

  return (
    <>
      <div className="max-w-7xl justify-center mx-auto px-4 sm:px-6 lg:px-10 py-8 flex gap-4">
        <div className="flex-1 max-w-6xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Quizzes</h1>
              <SearchBar />
            </div>
            <div className="flex flex-1 gap-6 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
          <Sidebar />
      </div>
    </>
  );
};

export default Quiz;
