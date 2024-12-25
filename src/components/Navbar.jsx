import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <a href="/">
              <img src="/sdream.webp" alt="Sdream_Logo" className="h-8 w-8 md:h-10 md:w-20" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 bday_font2">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">
              About Us
            </a>
            <a href="/services" className="text-gray-800 hover:text-blue-500">
              Services
            </a>
            <a href="/blogs" className="text-gray-800 hover:text-blue-500">
              Blogs
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-500">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="space-y-2 px-2 py-4">
            <a
              href="/"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="/services"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="/blogs"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </a>
            <a
              href="/contact"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
