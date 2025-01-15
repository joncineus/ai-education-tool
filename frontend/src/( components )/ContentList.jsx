import React from "react";
import Item from "./Item";

const ContentList = () => {
  const items = [
    { label: "Help me understand quadratic equations", category: "Today" },
    { label: "What are the main theories of evolution?", category: "Today", isNew: true },
    { label: "The events that led to World War II", category: "Last Week" },
    { label: "Can you provide tips to reduce procrastination?", category: "Last Week" },
  ];

  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="w-3/4 mx-auto bg-gray-50 shadow-lg p-6 rounded-lg">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-lg font-semibold my-3">{category}</h3>
          <ul>
            {items
              .filter((item) => item.category === category)
              .map((item, index) => (
                <Item key={index} label={item.label} isNew={item.isNew} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
