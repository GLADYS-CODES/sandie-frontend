import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Example icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* Example icon */}
              <FiMenu className="h-8 w-8 text-gray-800" />
              <span className="text-lg font-semibold text-gray-800">Sandie</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/events" className="nav-link">
                Events
              </Link>
              <Link to="/student-registration" className="nav-link">
                Student Registration
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger-btn flex items-center px-3 py-2 border rounded text-orange-800 border-orange-900 hover:text-white hover:bg-orange-900 focus:outline-none"
            >
              <span className="sr-only">Toggle mobile menu</span>
              {/* Example icons */}
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/events"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/student-registration"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              Student Registration
            </Link>
            <Link
              to="/login"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/contact-us"
              className="nav-link-mobile"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
