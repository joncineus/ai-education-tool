import { CourseCard } from './CourseCard';
import CourseSearch from './SearchCourse';
const courses = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

export function CourseList() {
  return (
    <div className="course-list-container p-6">
      <div className='mb-6 flex justify-between items-center'>
      <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
      <CourseSearch/>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
