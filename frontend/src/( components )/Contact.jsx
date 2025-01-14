import Footer from "./Footer";
import React from "react";

const Contact = () => {
  return (
    <>
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      {/* Upper Section: Contact Info and Map */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Contact Info */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Need A Direct Line?</h2>
          <p className="text-gray-600">
            Cras massa et odio donec faucibus in. Vitae pretium massa dolor
            ullamcorper lectus elit quam.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <img
                  src="https://img.icons8.com/ios-filled/50/fa314a/phone.png"
                  alt="phone icon"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-lg font-semibold">(123) 456 7890</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <img
                  src="https://img.icons8.com/ios-filled/50/fa314a/email.png"
                  alt="email icon"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-lg font-semibold">contact@thimpress.com</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:w-1/2">
          <img
            src="/images/OIP.jpeg"
            alt="Map"
            className="rounded-md shadow-md w-full"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-gray-300"></div>

      {/* Lower Section: Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-500">*</span>
        </p>
        <form className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
          </div>
          <textarea
            placeholder="Comment"
            className="border border-gray-300 p-3 rounded-md w-full h-40"
            required
          ></textarea>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info" className="text-gray-600">
              Save my name, email in this browser for the next time I comment
            </label>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
