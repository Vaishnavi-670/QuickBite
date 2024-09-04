'use client'
import React, { useState, useEffect } from 'react';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations based on user preferences or order history
    // setRecommendations(fetchedRecommendations);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Recommended for You</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-xl font-semibold">{rec.name}</h2>
                <p className="text-gray-400">{rec.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
