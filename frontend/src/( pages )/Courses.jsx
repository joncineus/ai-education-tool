import CourseCard from '../( components )/CourseCard'
import Pagination from '../( components )/Pagination'
import Footer from '../( components )/Footer'
import SearchBar from '../( components )/Searchbar'
import FilterSidebar from '../( components )/Sidebar';
import FeaturedCourses from '../( components )/Features';
import React, { useState, useRef } from 'react';

const courses = [
  {
    id: 1,
    title: 'Create An LMS Website With LearnPress',
    author: 'DemonstrateProfits',
    image: 'https://v0.dev/placeholder.svg',
    rating: 4.5,
    students: 156,
    price: 0,
  },
  {
    id: 2,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 99.99,
    rating: 4.8,
    reviews: 2150,
    image: "/placeholder.svg?height=200&width=400",
    category: "Development",
    duration: "48 hours",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    instructor: "Mike Wilson",
    price: 89.99,
    rating: 4.6,
    reviews: 1830,
    image: "/placeholder.svg?height=200&width=400",
    category: "Business",
    duration: "32 hours",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    instructor: "Emily Chen",
    price: 79.99,
    rating: 4.7,
    reviews: 1550,
    image: "/placeholder.svg?height=200&width=400",
    category: "Design",
    duration: "24 hours",
  },
  {
    id: 5,
    title: "Python for Data Science",
    instructor: "David Kim",
    price: 94.99,
    rating: 4.9,
    reviews: 2750,
    image: "/placeholder.svg?height=200&width=400",
    category: "Development",
    duration: "36 hours",
  },
  {
    id: 6,
    title: "Photography Masterclass",
    instructor: "Lisa Anderson",
    price: 69.99,
    rating: 4.5,
    reviews: 1250,
    image: "/placeholder.svg?height=200&width=400",
    category: "Photography",
    duration: "20 hours",
  },
  {
    id: 7,
    title: "Music Production Basics",
    instructor: "James Wilson",
    price: 59.99,
    rating: 4.4,
    reviews: 850,
    image: "/placeholder.svg?height=200&width=400",
    category: "Music",
    duration: "16 hours",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
            <div>
                <SearchBar />
                <FeaturedCourses />
            </div>
        </div>
      </main>
    </div>
  )
}
