import React from "react";
import { CalendarCheck2, GraduationCap } from "lucide-react";

export function CourseCard({ course }) {
  const { title, instructor, price, category, duration, students, image } = course;

  return (
    <div className="rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-36 object-cover" />
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
          {category}
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">by {instructor}</p>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span className="mr-4 flex items-center">
            <CalendarCheck2 />
            {duration}
          </span>
          <span className="flex items-center">
            <GraduationCap />
            {students} Students
          </span>
        </div>
      </div>
      <div className="border-t p-4 flex justify-between items-center text-sm">
        <span className={`font-semibold ${price === "Free" ? "text-green-500" : "text-gray-800"}`}>
          {price === "Free" ? price : `$${price}`}
        </span>
        <button className="text-black font-semibold hover:underline">
          View More
        </button>
      </div>
    </div>
  );
}
