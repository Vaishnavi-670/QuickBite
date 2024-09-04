'use client'
import React, { useEffect, useState } from 'react';

const OrderTrackingPage = ({ orderId }) => {
  const [status, setStatus] = useState('Pending');
  
  useEffect(() => {
    // Simulate real-time updates with WebSockets or an API
    const socket = new WebSocket(`ws://example.com/order/${orderId}`);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStatus(data.status);
    };
    
    return () => socket.close();
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Order Tracking</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order ID: {orderId}</h2>
          <p className="text-lg">Current Status: <span className="font-bold">{status}</span></p>
          {/* Add more details and tracking map if needed */}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
