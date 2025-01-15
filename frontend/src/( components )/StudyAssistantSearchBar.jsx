import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center my-6">
      <input
        type="text"
        placeholder="Search"
        className="w-3/4 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default SearchBar;
