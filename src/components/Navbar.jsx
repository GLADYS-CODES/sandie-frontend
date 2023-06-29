
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

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
            <Link to="/" className="flex items-center text-lg font-semibold text-gray-800">
              Sandie
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/events" className="nav-link">
                Events
              </Link>
              <Link to="/signup" className="nav-link">
              SignUp
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger-btn flex items-center px-3 py-2 border rounded text-orange-800 border-orange-900 hover:text-white hover:bg-orange-900 focus:outline-none transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-200 transition duration-300">
          <div className="flex flex-col items-center py-2 space-y-2">
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
              to="/contact"
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
