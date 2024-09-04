'use client'
import React from 'react';

const SocialMediaShare = ({ url, title }) => {
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${url}&text=${title}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Share this on Social Media</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex space-x-4">
          <button
            onClick={shareOnTwitter}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Share on Twitter
          </button>
          <button
            onClick={shareOnFacebook}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Share on Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShare;
