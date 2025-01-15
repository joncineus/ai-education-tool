import React from "react";

const Item = ({ label, isNew }) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{label}</span>
      {isNew && <span className="text-sm text-white bg-orange-500 px-2 py-1 rounded-full">New</span>}
    </li>
  );
};

export default Item;
