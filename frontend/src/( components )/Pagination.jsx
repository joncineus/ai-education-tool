export default function Pagination() {
    return (
      <div className="flex justify-center space-x-2 mt-8">
        <button className="px-3 py-1 rounded-md bg-orange-500 text-white">1</button>
        <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">2</button>
        <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">3</button>
        <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">
          <span className="sr-only">Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
  }
  
  