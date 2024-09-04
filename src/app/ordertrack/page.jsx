'use client';
import React, { useState } from 'react';

const OrderTrackingPage = () => {
  const [orderStatus, setOrderStatus] = useState('Out for Delivery');

  const orderDetails = {
    orderId: '1234567890',
    items: [
      { name: 'Deluxe Burger', quantity: 2, price: 9.99 },
      { name: 'Cheese Fries', quantity: 1, price: 4.99 },
    ],
    total: 24.97,
    deliveryAddress: '123 Main St, Springfield, IL 62704',
    deliveryPerson: {
      name: 'John Doe',
      contact: '+1 555-123-4567',
      image: '/path-to-delivery-person-image.jpg',
    },
    estimatedDeliveryTime: '45 minutes',
    orderPlacedTime: '2:30 PM',
  };

  const orderProgress = [
    { status: 'Order Placed', time: '2:30 PM' },
    { status: 'Preparing', time: '2:45 PM' },
    { status: 'Out for Delivery', time: '3:00 PM' },
    { status: 'Delivered', time: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Order Summary */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4">Order Tracking</h1>
          <p className="text-gray-300">Order ID: {orderDetails.orderId}</p>
          <p className="text-gray-300 mb-4">Delivery Address: {orderDetails.deliveryAddress}</p>

          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {orderDetails.items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-bold text-xl">
            <span>Total</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Order Progress */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Progress</h2>
          <div className="space-y-4">
            {orderProgress.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 ${
                    orderStatus === step.status || orderProgress.findIndex(s => s.status === orderStatus) > index
                      ? 'bg-green-500'
                      : 'bg-gray-700'
                  }`}
                >
                  {orderProgress.findIndex(s => s.status === orderStatus) > index ? (
                    <span className="text-white">✓</span>
                  ) : (
                    <span className="text-white">{index + 1}</span>
                  )}
                </div>
                <div>
                  <p className={`font-semibold ${orderStatus === step.status ? 'text-green-400' : 'text-gray-300'}`}>
                    {step.status}
                  </p>
                  <p className="text-gray-500">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Person Details */}
        {orderStatus === 'Out for Delivery' && (
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Person</h2>
            <div className="flex items-center">
              <img
                src={orderDetails.deliveryPerson.image}
                alt={orderDetails.deliveryPerson.name}
                className="h-16 w-16 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="text-xl font-semibold">{orderDetails.deliveryPerson.name}</p>
                <p className="text-gray-300">Contact: {orderDetails.deliveryPerson.contact}</p>
              </div>
            </div>
          </div>
        )}

        {/* Estimated Delivery Time */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Estimated Delivery Time</h2>
          <p className="text-xl font-bold text-green-400">{orderDetails.estimatedDeliveryTime}</p>
        </div>

        {/* Help/Support Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-4">
            If you have any issues with your order, please contact our customer support team.
          </p>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
