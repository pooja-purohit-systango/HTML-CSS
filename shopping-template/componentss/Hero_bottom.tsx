import React from "react";

const Hero_bottom = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center max-w-3xl mx-auto mt-[-39px] ">
      <div className="flex flex-col px-4 border-r border-gray-200">
        <label className="text-sm font-semibold text-gray-700">
          Destination <span className="text-orange-500">▼</span>
        </label>
        <input
          type="text"
          placeholder="Search Location"
          className="outline-none text-sm text-gray-500 placeholder-gray-400"
        />
      </div>


      <div className="flex flex-col px-4 border-r border-gray-200">
        <label className="text-sm font-semibold text-gray-700">
          Date <span className="text-orange-500">▼</span>
        </label>
        <input
          type="text"
          placeholder="Type Date"
          className="outline-none text-sm text-gray-500 placeholder-gray-400"
        />
      </div>

      <div className="flex flex-col px-4 border-r border-gray-200">
        <label className="text-sm font-semibold text-gray-700">
          Guest <span className="text-orange-500">▼</span>
        </label>
        <input
          type="text"
          placeholder="Number of guest"
          className="outline-none text-sm text-gray-500 placeholder-gray-400"
        />
      </div>


      <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition">
        Explore Now
      </button>
    </div>
  );
};

export default Hero_bottom;
