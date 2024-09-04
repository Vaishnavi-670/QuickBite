'use client'
import React, { useState } from 'react';

const FoodItemPage = () => {
  const [size, setSize] = useState('Medium');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const foodItem = {
    id: 1,
    name: 'Deluxe Burger',
    description:
      'A juicy beef patty topped with cheddar cheese, fresh lettuce, tomatoes, onions, and our special sauce, all sandwiched between a toasted brioche bun.',
    price: 9.99,
    image: '/path-to-food-image.jpg',
    nutritionalInfo: {
      calories: 750,
      fat: '45g',
      carbohydrates: '50g',
      protein: '35g',
    },
    reviews: [
      {
        id: 1,
        user: 'Alice Johnson',
        rating: 5,
        comment: 'Absolutely delicious! The best burger I have ever had.',
      },
      {
        id: 2,
        user: 'Mark Spencer',
        rating: 4,
        comment: 'Great taste, but the portion size could be bigger.',
      },
      // Add more reviews as needed
    ],
    relatedItems: [
      {
        id: 2,
        name: 'Cheese Fries',
        price: 4.99,
        image: '/path-to-related-item-1.jpg',
      },
      {
        id: 3,
        name: 'Caesar Salad',
        price: 5.99,
        image: '/path-to-related-item-2.jpg',
      },
      // Add more related items as needed
    ],
  };

  const availableSizes = ['Small', 'Medium', 'Large'];
  const availableToppings = ['Extra Cheese', 'Bacon', 'Mushrooms', 'Avocado'];

  const handleToppingsChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((item) => item !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: foodItem.id,
      name: foodItem.name,
      size,
      toppings,
      quantity,
      price: foodItem.price, // You might want to adjust the price based on size and toppings
    };
    // Implement cart logic here (e.g., update context or Redux store)
    console.log('Added to cart:', cartItem);
    alert('Item added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Food Item Details */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{foodItem.name}</h1>
              <p className="text-gray-300 mb-4">{foodItem.description}</p>

              {/* Customization Options */}
              <div className="mb-4">
                {/* Size Selection */}
                <h2 className="text-xl font-semibold mb-2">Select Size</h2>
                <div className="flex space-x-4">
                  {availableSizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded ${
                        size === s
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings Selection */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Add Toppings</h2>
                <div className="flex flex-wrap">
                  {availableToppings.map((topping) => (
                    <label key={topping} className="mr-4 mb-2 flex items-center">
                      <input
                        type="checkbox"
                        value={topping}
                        checked={toppings.includes(topping)}
                        onChange={() => handleToppingsChange(topping)}
                        className="mr-2"
                      />
                      {topping}
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Quantity</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="px-3 py-1 bg-gray-700 rounded-l hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-gray-700 rounded-r hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div>
              <p className="text-2xl font-bold mb-4">
                Price: ${(foodItem.price * quantity).toFixed(2)}
              </p>
              <button
                onClick={handleAddToCart}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Nutritional Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-300">Calories</p>
              <p className="font-semibold">{foodItem.nutritionalInfo.calories} kcal</p>
            </div>
            <div>
              <p className="text-gray-300">Fat</p>
              <p className="font-semibold">{foodItem.nutritionalInfo.fat}</p>
            </div>
            <div>
              <p className="text-gray-300">Carbohydrates</p>
              <p className="font-semibold">{foodItem.nutritionalInfo.carbohydrates}</p>
            </div>
            <div>
              <p className="text-gray-300">Protein</p>
              <p className="font-semibold">{foodItem.nutritionalInfo.protein}</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {foodItem.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-700 pb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </span>
                  <span className="text-gray-300">{review.user}</span>
                </div>
                <p className="mt-2 text-gray-400">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodItem.relatedItems.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400 mb-4">${item.price.toFixed(2)}</p>
                  <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemPage;


