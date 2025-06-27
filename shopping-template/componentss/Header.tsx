import React from "react";

const   Header = () => {
  return (
    <header className="w-full bg-[#FBFBEC]">
      <div className="max-w-[1215px] h-[74.46px] mx-auto flex items-center justify-between px-6 ">
        <img
          src="/logo.png"
          alt="Travon"
          className="w-[151px] h-[36px] px-[10px] ml-[30px]"
        />

        <nav>
          <ul className="flex gap-[42px] text-gray-800 text-[12px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer ">Destination</li>
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer">About us</li>
          </ul>
        </nav>

        <button className="w-[70px] h-[26px] mr-[30px] border border-orange-400 text-[12px] rounded-sm cursor-pointer hover:border-gray-400">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
