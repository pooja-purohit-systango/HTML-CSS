'use client'
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="bg-[#FA7436] text-white rounded-[9px] py-16 px-4 relative overflow-hidden text-center">

      <img
        src="/tree.png"
        alt="Tree Illustration"
        className="absolute right-6 top-6 opacity-20 w-[80px] h-auto pointer-events-none"
      />


      <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-10 relative z-10">
        Subscribe and get exclusive <br />
        <span className="text-white">deals & offer</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        <div className="bg-white flex items-center justify-between rounded-full px-2 py-2 shadow-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="✉ Enter your email"
            className="flex-1 px-6 py-3 rounded-l-full text-gray-700 text-sm outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#FA7436] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
