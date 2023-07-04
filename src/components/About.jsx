import React from 'react';
import Footer from '../components/Footer';
import backgroundImage1 from '../assets/bg-about-2.jpg';

const About = () => {
  return (
    <div className="bg-none">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-cover bg-center rounded-lg mb-4 md:mb-0 hover:bg-orange-800 transition duration-300 ease-in-out" style={{ backgroundImage: `url(${backgroundImage1})`, height: '400px' }}></div>
          <div className="w-full md:w-1/2 bg-white rounded-lg px-6 py-8 md:px-10 md:py-12 flex flex-col justify-center">
            <h2 className="text-4xl text-gray-800 font-bold mb-4">
              <span className="hover:text-orange-800 transition duration-300 ease-in-out">About Us</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Sandie Campus Events Manager is a platform designed to connect students and faculty with exciting events happening on campus. Whether it's academic lectures, workshops, conferences, or social gatherings, our goal is to provide a centralized hub for discovering, organizing, and attending campus events.
            </p>
            <p className="text-lg text-gray-700">
              Join us in creating a vibrant campus community and never miss out on the latest happenings.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;





