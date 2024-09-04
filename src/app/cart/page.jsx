'use client';
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Deluxe Burger', quantity: 2, price: 9.99 },
    { id: 2, name: 'Cheese Fries', quantity: 1, price: 4.99 },
    { id: 3, name: 'Chocolate Shake', quantity: 1, price: 5.99 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = id => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Cart Heading */}
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {/* Cart Items */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-400">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-700 text-white px-2 py-1 rounded-lg hover:bg-gray-600"
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-700 text-white px-2 py-1 rounded-lg hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">Your cart is empty. Start adding some delicious food!</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax (10%)</span>
            <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
          </div>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-green-600 transition duration-300">
            Proceed to Checkout
          </button>
          <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition duration-300">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
