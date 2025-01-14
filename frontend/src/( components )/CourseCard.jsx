export default function CourseCard({ course }) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-600">by {course.author}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-600">{course.students} Students</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-orange-500 font-semibold">{course.price === 0 ? 'Free' : `$${course.price}`}</span>
            <button className="text-sm text-gray-600 hover:text-orange-500">View More</button>
          </div>
        </div>
      </div>
    )
  }
  
  