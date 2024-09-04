import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url(/path-to-your-hero-image.jpg)' }}>
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Foodie Hub</h1>
          <p className="mb-8">Find the best restaurants around you</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="w-80 p-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 p-2 rounded-r-md text-white hover:bg-red-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Restaurants Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example restaurant card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/path-to-restaurant-image.jpg" alt="Restaurant" className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">Restaurant Name</h3>
            <p className="text-gray-500">Cuisine Type</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-500">(120 Reviews)</span>
            </div>
          </div>
          {/* Repeat for other restaurants */}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
          {/* Example testimonial */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 mb-6 md:mb-0">
            <p className="text-gray-600">"Amazing food and quick delivery!"</p>
            <div className="mt-4">
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-gray-500">Verified Customer</p>
            </div>
          </div>
          {/* Repeat for other testimonials */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
