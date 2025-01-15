import CourseCard from '../( components )/CourseCard'
import Pagination from '../( components )/Pagination'
import Footer from '../( components )/Footer'
import SearchBar from '../( components )/Searchbar'
import FilterSidebar from '../( components )/Sidebar';
import FeaturedCourses from '../( components )/Features';
import { useState } from 'react';

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


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
            <div>
                <SearchBar/>
                <FeaturedCourses/>
            </div>
        </div>
      </main>
    </div>
  )
}
