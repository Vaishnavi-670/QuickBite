'use client'
import React, { useState, useEffect } from 'react';

const LoyaltyProgram = () => {
  const [points, setPoints] = useState(0);
  
  useEffect(() => {
    // Fetch points from API or local storage
    // setPoints(fetchedPoints);
  }, []);

  const redeemPoints = () => {
    // Logic to redeem points for discounts or rewards
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Loyalty Program</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Points: {points}</h2>
          <button
            onClick={redeemPoints}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Redeem Points
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
