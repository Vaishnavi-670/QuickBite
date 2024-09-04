'use client'
import React, { useState } from 'react';

const RestaurantListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('');
  const [sortOption, setSortOption] = useState('');

  const restaurants = [
    // Example data
    {
      id: 1,
      name: 'The Italian Place',
      cuisine: 'Italian',
      rating: 4.5,
      image: '/path-to-restaurant-image-1.jpg',
      reviews: 150,
    },
    {
      id: 2,
      name: 'Sushi World',
      cuisine: 'Japanese',
      rating: 4.7,
      image: '/path-to-restaurant-image-2.jpg',
      reviews: 98,
    },
    // Add more restaurant objects
  ];

  // Filtering and Sorting Logic
  const filteredRestaurants = restaurants
    .filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCuisine === '' || restaurant.cuisine === filterCuisine)
    )
    .sort((a, b) => {
      if (sortOption === 'rating') {
        return b.rating - a.rating;
      } else if (sortOption === 'reviews') {
        return b.reviews - a.reviews;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-black-100 py-8">
      <div className="container mx-auto px-4">
        {/* Filter and Sort Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 p-2 rounded-md focus:outline-none border border-gray-300 mb-4 md:mb-0"
            />

            {/* Filter by Cuisine */}
            <select
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
              className="w-full md:w-1/4 p-2 rounded-md focus:outline-none border border-gray-300 mb-4 md:mb-0"
            >
              <option value="">All Cuisines</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              {/* Add more cuisine options */}
            </select>

            {/* Sort by */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full md:w-1/4 p-2 rounded-md focus:outline-none border border-gray-300"
            >
              <option value="">Sort by</option>
              <option value="rating">Rating</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Restaurant Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-black p-4 rounded-lg shadow-md">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{restaurant.name}</h3>
              <p className="text-gray-500">{restaurant.cuisine}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-500">{restaurant.rating} ({restaurant.reviews} Reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListingsPage;
