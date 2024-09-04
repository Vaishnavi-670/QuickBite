'use client'
import React from 'react';
// import { HiUsers, HiShoppingCart, HiRestaurant, HiChartBar, HiBell } from 'react-icons/hi';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#users" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <HiUsers className="w-6 h-6 mr-3" /> */}
                Users
              </a>
            </li>
            <li className="mb-4">
              <a href="#orders" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <HiShoppingCart className="w-6 h-6 mr-3" /> */}
                Orders
              </a>
            </li>
            <li className="mb-4">
              <a href="#restaurants" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <HiRestaurant className="w-6 h-6 mr-3" /> */}
                Restaurants
              </a>
            </li>
            <li className="mb-4">
              <a href="#analytics" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <HiChartBar className="w-6 h-6 mr-3" /> */}
                Analytics
              </a>
            </li>
            <li>
              <a href="#notifications" className="flex items-center text-lg text-gray-300 hover:text-white">
                {/* <HiBell className="w-6 h-6 mr-3" /> */}
                Notifications
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Users Section */}
        <section id="users" className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          {/* User Management Content */}
          <p className="text-gray-400">Manage users here...</p>
        </section>

        {/* Orders Section */}
        <section id="orders" className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
          {/* Order Management Content */}
          <p className="text-gray-400">Manage orders here...</p>
        </section>

        {/* Restaurants Section */}
        <section id="restaurants" className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Restaurant Management</h2>
          {/* Restaurant Management Content */}
          <p className="text-gray-400">Manage restaurants here...</p>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
          {/* Analytics Content */}
          <p className="text-gray-400">View analytics here...</p>
        </section>

        {/* Notifications Section */}
        <section id="notifications" className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          {/* Notifications Content */}
          <p className="text-gray-400">View system notifications here...</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
