'use client'
import React, { useState } from 'react';

const RestaurantProfilePage = () => {
  const [cart, setCart] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);

  const restaurant = {
    id: 1,
    name: 'The Italian Place',
    cuisine: 'Italian',
    rating: 4.5,
    image: '/path-to-restaurant-image.jpg',
    address: '123 Main St, City, Country',
    phone: '+123456789',
    hours: '10:00 AM - 10:00 PM',
    menu: [
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella and basil.',
        price: 12.99,
        image: '/path-to-menu-item-1.jpg',
      },
      {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'Traditional Italian pasta with eggs, cheese, and pancetta.',
        price: 14.99,
        image: '/path-to-menu-item-2.jpg',
      },
      // Add more menu items
    ],
    reviews: [
      {
        id: 1,
        user: 'John Doe',
        rating: 5,
        comment: 'Amazing food and great service!',
      },
      {
        id: 2,
        user: 'Jane Smith',
        rating: 4,
        comment: 'Delicious pizza, will order again!',
      },
      // Add more reviews
    ],
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const submitReview = () => {
    if (reviewText && reviewRating) {
      const newReview = {
        id: restaurant.reviews.length + 1,
        user: 'Anonymous', // You might want to get the user's name if logged in
        rating: reviewRating,
        comment: reviewText,
      };
      restaurant.reviews.push(newReview);
      setReviewText('');
      setReviewRating(0);
    }
  };

  return (
    <div className="min-h-screen bg-black-100 py-8">
      <div className="container mx-auto px-4">
        {/* Restaurant Header */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-500">{restaurant.cuisine}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-500">{restaurant.rating} ({restaurant.reviews.length} Reviews)</span>
            </div>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Add to Favorites
            </button>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                <p className="text-gray-500">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {restaurant.reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-gray-500">{review.rating}</span>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
                <p className="mt-2 text-gray-500">- {review.user}</p>
              </div>
            ))}
          </div>

          {/* Submit Review */}
          <div className="bg-white p-4 rounded-lg shadow-md mt-8">
            <h3 className="text-lg font-bold mb-4">Leave a Review</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>
            <div className="flex items-center mt-4">
              <select
                value={reviewRating}
                onChange={(e) => setReviewRating(parseInt(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option value={0}>Rating</option>
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
              <button
                onClick={submitReview}
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600"><strong>Address:</strong> {restaurant.address}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {restaurant.phone}</p>
          <p className="text-gray-600"><strong>Hours:</strong> {restaurant.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfilePage;
