import React from "react";

const RegisterForm = () => {
  return (
    <div className="w-full lg:w-1/2 p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="username">
            Username*
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password*
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Confirm password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
