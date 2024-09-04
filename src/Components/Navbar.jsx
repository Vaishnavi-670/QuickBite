import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      <nav className="h-[100px] w-full">
        <div className="text-white h-full w-full flex items-center justify-evenly bg-gray-800 shadow-md">
          <Link href='/advancedSearch'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Advanced Search</span>
          </Link>
          <Link href='/dashboard'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Dashboard</span>
          </Link>
          <Link href='/aiBased'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">AI Based</span>
          </Link>
          <Link href='/cart'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Cart</span>
          </Link>
          <Link href='/faq'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">FAQ</span>
          </Link>
          <Link href='/fooditem'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Food Item</span>
          </Link>
          <Link href='/help'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Help</span>
          </Link>
          <Link href='/loyaltyPrograms'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Loyalty Program</span>
          </Link>
          
          <Link href='/ordertrack'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Order Track</span>
          </Link>
          <Link href='/profile'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Profile</span>
          </Link>
          <Link href='/resturant'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Restaurant</span>
          </Link>
          <Link href='/review'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Review</span>
          </Link>
          <Link href='/socialMedia'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Social Media</span>
          </Link>
          <Link href='/userprofile'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">User Profile</span>
          </Link>
          <Link href='/realtimeordertrack'>
            <span className="cursor-pointer hover:text-blue-400 transition duration-300">Real-Time Order Track</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
