'use client'

import React, { useState } from 'react';

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 555-123-4567',
    profilePicture: '/path-to-profile-picture.jpg',
  });

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: '2024-09-01', total: 24.99, items: ['Deluxe Burger', 'Cheese Fries'] },
    { id: 2, date: '2024-08-25', total: 15.49, items: ['Veggie Pizza'] },
  ]);

  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main St, Springfield, IL 62704' },
    { id: 2, address: '456 Oak St, Springfield, IL 62701' },
  ]);

  const handleEditProfile = () => {
    // Functionality to edit profile details
  };

  const handlePasswordChange = () => {
    // Functionality to change password
  };

  const handleLogout = () => {
    // Functionality to log out
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Profile Information */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
          <div className="flex items-center mb-6">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover mr-6"
            />
            <div>
              <p className="text-xl font-semibold">{user.name}</p>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-400">{user.phone}</p>
            </div>
          </div>
          <button
            onClick={handleEditProfile}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Edit Profile
          </button>
        </div>

        {/* Order History */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order History</h2>
          {orderHistory.length > 0 ? (
            <ul className="space-y-4">
              {orderHistory.map(order => (
                <li key={order.id} className="border-b border-gray-700 pb-4">
                  <p className="text-lg font-semibold">Order ID: {order.id}</p>
                  <p className="text-gray-400">Date: {order.date}</p>
                  <p className="text-gray-400">Total: ${order.total.toFixed(2)}</p>
                  <p className="text-gray-400">Items: {order.items.join(', ')}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">You haven't placed any orders yet.</p>
          )}
        </div>

        {/* Address Management */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Saved Addresses</h2>
          {addresses.length > 0 ? (
            <ul className="space-y-4">
              {addresses.map(address => (
                <li key={address.id} className="border-b border-gray-700 pb-4">
                  <p className="text-gray-400">{address.address}</p>
                  {/* Add Edit and Delete buttons for each address */}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No addresses saved yet.</p>
          )}
        </div>

        {/* Password Management */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <button
            onClick={handlePasswordChange}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Change Password
          </button>
        </div>

        {/* Logout Button */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
