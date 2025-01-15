import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FikraSpace</h3>
          <p className="text-gray-400 mb-4">Your go-to platform for creative ideas, design inspiration, and learning resources. Join the community of forward thinkers.</p>
          <div className="flex space-x-4">
            {/* Social Media Links */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        {/* Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Latest Articles</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Support Center</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Address: 1234 New Design St, Hudson Yards, USA</p>
          <p className="text-gray-400 mb-2">Phone: <a href="tel:+11234567890" className="text-gray-400 hover:text-white">+1 123 456 7890</a></p>
          <p className="text-gray-400 mb-4">Email: <a href="mailto:support@fikraspace.com" className="text-gray-400 hover:text-white">support@fikraspace.com</a></p>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 FikraSpace. All Rights Reserved.</p>
        <p>Powered by ThinPress</p>
      </div>
    </footer>
  );
};

export default Footer;
