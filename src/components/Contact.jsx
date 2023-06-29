import React, { useState } from 'react';
import Footer from './Footer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Submit the form
    alert('Message sent successfully!');
    // You can add your code here to send the message

    // Reset form fields
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="bg-orange-800 text-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
          Have any questions or want to get in touch? Reach out to us using the contact details below or simply fill out the form.
        </p>

        <div className="flex  items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-orange-200">
            <FiMapPin size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <p className="text-gray-500">123 Event Street, Nairobi 535022</p>
          </div>
        </div>

        <div className="flex   items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-orange-200">
            <FiMail size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-500">events@example.com</p>
          </div>
        </div>

        <div className="flex  items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-orange-200">
            <FiPhone size={20} className="text-xl" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-500">123-456-7890</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow-sm bg-neutral-800 text-black text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 border-gray-300 placeholder-gray-400"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="block p-3 w-full text-sm text-black bg-neutral-800 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 placeholder-gray-400"
              placeholder="Regarding Event Inquiry"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-neutral-800 rounded-lg shadow-sm border-gray-300 placeholder-gray-400"
              placeholder="Leave your message here..."
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white hover:bg-orange-800 hover:text-black focus:ring-4 focus:outline-none focus:ring-orange-300"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;


