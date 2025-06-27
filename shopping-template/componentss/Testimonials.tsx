import React from 'react';
import userImg from '../images/userImg.png'; // Replace with correct path

export const Testimonials = () => {
  return (
    <div className="w-full bg-[#F7F8FC] py-[50px] flex justify-center mt-[30px]">

      <div className="w-[827.25px] h-[267px] flex items-center justify-between">
        
        <div className="w-[295.5px] h-[201px] flex flex-col justify-between">
          <div>
            <h2 className="text-[24px] font-bold leading-[30px] text-[#27302F]">
              What people say <br />
              <span className="text-[#FA7436]">about us.</span>
            </h2>
            <p className="text-[#666666] text-[14px] mt-2 leading-[20px]">
              Our Clients send us bunch of smilies with our <br /> services and we love them.
            </p>
          </div>
          <div className="flex gap-3 mt-3">
            <button className="w-[30px] h-[30px] rounded-full border border-[#E5E5E5] flex items-center justify-center">
              <span className="rotate-180 text-[#999]">&rarr;</span>
            </button>
            <button className="w-[30px] h-[30px] rounded-full bg-[#FA7436] text-white flex items-center justify-center">
              <span>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="relative w-[405.75px] h-[209.25px]">

          <div className="absolute top-[35px] left-[25px] w-[376.5px] h-[174px] rounded-[7.5px] border-[1.5px] border-[#66666614] shadow-[0px_7.5px_22.5px_0px_#22222259] bg-white z-0 p-5 pl-7">
            <p className="text-[13px] text-[#222222] leading-[20px] mb-4 opacity-50">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.”
            </p>
            <p className="text-[13px] font-bold text-[#222] opacity-50">Jam Thoms</p>
            <p className="text-[11px] text-[#999999] opacity-50">CEO of Red Button</p>
          </div>

          <div className="relative z-10 bg-white rounded-md shadow-lg p-5 pl-7">
            <p className="text-[13px] text-[#222222] leading-[20px] mb-4">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
            </p>
            <p className="text-[13px] font-bold text-[#222]">Mike taylor</p>
            <p className="text-[11px] text-[#999999]">Lahore, Pakistan</p>
          </div>

          <img
            src='Consumer.png'
            alt="User"
            className="absolute -top-4 -left-4 w-[40px] h-[40px] rounded-full border-2 border-white z-20"
          />
        </div>
      </div>
    </div>
  );
};