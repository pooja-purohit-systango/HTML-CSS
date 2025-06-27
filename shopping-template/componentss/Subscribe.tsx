const Subscribe = () => {
  return (
    <div className="bg-[#FA7436] text-white rounded-[9px] py-16 px-4 relative overflow-hidden text-center">
     
      <div className="absolute top-0 right-0 w-[90px] h-[90px] z-0 pointer-events-none opacity-80  lg:block">
        <img
          src="Tree.png"
          alt="Tree Illustration"
          className="w-full h-full object-contain"
        />
      </div>

     
      <div className="absolute bottom-[-50px] left-0 w-[300px] h-[300px] z-0 pointer-events-none opacity-90 lg:block">
        <img
          src="Spiral.png"
          alt="Curve Illustration"
          className="w-full h-full object-contain"
        />
      </div>


      <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-10 relative z-10">
        Subscribe and get exclusive <br />
        <span className="text-white">deals & offer</span>
      </h2>

     <form className="relative z-10 w-full max-w-lg mx-auto">
  <div className="bg-white flex items-center justify-between px-2 py-2 shadow-md rounded-md">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-6 py-3 text-gray-700 text-sm outline-none rounded-l-md"
      required
    />
    <button
      type="submit"
      className="bg-[#FA7436] text-white px-6 py-3 rounded-r-md font-medium hover:opacity-90 transition"
    >
      Subscribe
    </button>
  </div>
</form>

    </div>
  );
};

export default Subscribe;
