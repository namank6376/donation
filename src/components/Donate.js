import React from 'react';

const Donate = () => {
  return (
    <div className="text-center py-16 px-8 bg-gray-100">
      <h2 className="text-4xl text-red-600 font-bold mb-6">Support Our Mission</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        Your contribution will help us bring advanced medical technology to underserved areas. Together, we can save lives and provide better healthcare for all.
      </p>
      <button
        onClick={() => window.location.href = 'https://your-donation-link.com'}
        className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
