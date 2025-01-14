import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-4">FikraSpace</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get Help</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Latest Articles</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">Address: 1234 New Design St, Lorem Ipsum10 Hudson Yards, USA</p>
          <p className="text-gray-400">Phone: +1 123 456 7890</p>
          <p className="text-gray-400">Email: support@fikraspace.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 LearnPress LMS | Powered by ThinPress
      </div>
    </footer>
  );
};

export default Footer;
