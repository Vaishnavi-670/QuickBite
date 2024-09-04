'use client'
import React, { useState } from 'react';

const AdvancedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
  });

  const handleSearch = () => {
    // Implement search logic
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Search and Filters</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <input
            type="text"
            placeholder="Search for restaurants or food..."
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex mb-4">
            <label className="flex items-center mr-6">
              <input
                type="checkbox"
                checked={filters.vegan}
                onChange={() => setFilters({ ...filters, vegan: !filters.vegan })}
                className="form-checkbox"
              />
              <span className="ml-2">Vegan</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.glutenFree}
                onChange={() => setFilters({ ...filters, glutenFree: !filters.glutenFree })}
                className="form-checkbox"
              />
              <span className="ml-2">Gluten-Free</span>
            </label>
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
