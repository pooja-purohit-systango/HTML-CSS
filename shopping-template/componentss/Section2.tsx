import React from "react";

const Section2 = () => {
  return (
    <section className="relative bg-[#F9FAFB] py-12 mt-10 overflow-hidden">
      {/* Background Airplane Illustration */}
      <div className="absolute top-15 right-40 w-[120px] h-[120px] z-0 pointer-events-none opacity-100 lg:block">
        <img
          src="Element.png"
          alt="Airplane Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Things you need <span className="text-orange-500">to do</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-sm mx-auto text-sm sm:text-base">
          We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
        </p>

        {/* Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl shadow-md p-6 text-left border border-gray-100">
            <div className="text-2xl mb-4 text-orange-500">
              <img src="Signup.png" alt="signup" />
            </div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">Sign Up</h3>
            <p className="text-sm text-gray-500">
              Complete all the work associated with planning and processing.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left border border-gray-100">
            <div className="text-2xl mb-4 text-blue-500"><img src="Vector.png" alt="vector" /></div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">Worth of Money</h3>
            <p className="text-sm text-gray-500">
              After successful access then book from exclusive deals & pricing.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-left border border-gray-100">
            <div className="text-2xl mb-4 text-yellow-500"><img src="Travel.png" alt="travel" /></div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">Exciting Travel</h3>
            <p className="text-sm text-gray-500">
              Start and explore a wide range of exciting travel experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
