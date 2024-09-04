'use client'
import React, { useState } from 'react';

const HelpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Your message has been sent!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Help Topics */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">Help Topics</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Technical Support</h2>
              <p className="text-gray-400">Get assistance with technical issues related to our platform.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Order Issues</h2>
              <p className="text-gray-400">Help with tracking orders, returning items, and resolving order problems.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Account Management</h2>
              <p className="text-gray-400">Assistance with managing your account, including password resets and profile updates.</p>
            </div>
            {/* Add more help topics here */}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
