import React from 'react';
import plane from '../Images/plane1.png';

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md p-6">

      <div className="flex-1 font-primary">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl">Subscribe to</h2>
          <img src={plane} alt="Plane" className="w-12 sm:w-14 md:w-16 lg:w-20" />
        </div>

        <p className="mb-2 text-xl sm:text-2xl lg:text-3xl">
          my <span className="font-bold">News Letter</span>
        </p>
        <p className="mb-2 text-base sm:text-lg lg:text-xl font-tertiary">
          Join a growing community of likeminded people
        </p>
      </div>

      <div className="flex-1 font-primary flex flex-col justify-center">
        <span className="text-base sm:text-lg lg:text-xl font-bold mb-4">
        Your Canadian Journey Starts Here — <span className='font-normal'>Subscribe for Real Tips, Real Stories, and Real Success as an International Student! </span>
        </span>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <input
            type="email"
            placeholder="example@email.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-300 hover:bg-yellow-400 px-6 py-2 rounded-md font-semibold text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
