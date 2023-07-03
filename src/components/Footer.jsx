import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-orange-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <span className="text-lg font-semibold text-gray-800 mb-4 md:mb-0">Sandie:  </span>

          <div className="flex items-center space-x-4">
            <div className="social-icon hover:text-black transition duration-300">
              <FiFacebook className="text-gray-800" />
            </div>
            <div className="social-icon hover:text-black transition duration-300">
              <FiTwitter className="text-gray-800" />
            </div>
            <div className="social-icon hover:text-black transition duration-300">
              <FiInstagram className="text-gray-800" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-800">Subscribe to our newsletter:  </span>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-l px-4 py-2 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="text-center mt-8">
          <span className="text-gray-800 text-sm">&copy; {new Date().getFullYear()} Sandie. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

