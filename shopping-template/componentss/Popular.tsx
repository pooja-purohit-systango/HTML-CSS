import React from "react";

const destinations = [
  {
    title: "Madrid",
    country: "🇪🇸 Spain",
    price: "$950",
    image: "pop1.png",
  },
  {
    title: "Loga Sea",
    country: "🌴 Oeanian",
    price: "$850",
    image: "pop2.png",
  },
  {
    title: "Desert",
    country: "🇬🇧 UK",
    price: "$750",
    image: 'pop3.png',
  },
  {
    title: "Falling",
    country: "🇮🇳 India",
    price: "$650",
    image: "Image.png",
  },
];

const Popular = () => {
  return (
    <section className="py-15 px-24 bg-[#F7F8FC] mt-[30px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-blue-500 font-medium">Most Attractive</p>
            <h2 className="text-2xl font-bold text-gray-800">Popular Destination</h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-teal-400 text-white text-sm px-3 py-1 rounded-full">Beach</button>
            <button className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700">Waterfall</button>
            <button className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700">Mountains</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={dest.image} alt={dest.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{dest.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{dest.country}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">⭐ 4.0</span>
                  <span className="text-gray-400 line-through text-sm">$990</span>
                  <span className="text-orange-500 font-bold">{dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
