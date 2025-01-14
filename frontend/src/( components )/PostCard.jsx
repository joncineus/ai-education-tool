import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <p className="text-gray-700">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
