'use client'
import React, { useState } from 'react';

const ReviewForm = ({ itemId }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review and rating
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Leave a Review</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-6">
          <label className="block text-lg font-semibold mb-2">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-4"
            required
          />
          <label className="block text-lg font-semibold mb-2">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
