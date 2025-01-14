function Sidebar() {
    return (
      <aside className="w-1/4 p-4">
        <h2 className="font-bold text-lg mb-4">Category</h2>
        <ul className="space-y-2">
          {['Commercial', 'Office', 'Shop', 'Educate', 'Academy', 'Single family home'].map((category) => (
            <li key={category} className="flex justify-between text-gray-700">
              <span>{category}</span>
              <span>15</span>
            </li>
          ))}
        </ul>
        <h2 className="font-bold text-lg mt-8 mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          {Array(3).fill('Best LearnPress WordPress Theme Collection For 2023').map((post, idx) => (
            <li key={idx} className="text-gray-700 hover:text-orange-600">
              {post}
            </li>
          ))}
        </ul>
        <h2 className="font-bold text-lg mt-8 mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {['Free courses', 'Marketing', 'Idea', 'LMS', 'LearnPress', 'Instructor'].map((tag) => (
            <span key={tag} className="text-sm bg-gray-100 hover:bg-orange-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </aside>
    );
  }
  
  export default Sidebar;
