import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full lg:w-1/2 p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email or Username*
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter email or username"
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
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 focus:ring-orange-500"
          />
          <label htmlFor="rememberMe" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </button>
        <p className="text-sm mt-4 text-orange-500 cursor-pointer">
          Lost your password?
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
