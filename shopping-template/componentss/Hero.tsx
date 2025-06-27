import Image from "next/image";
import React from "react";
import Hero_bottom from "./Hero_bottom";

const Hero = () => {
  return (
    <>
    <div className="bg-[#FBFBEC] pt-[20px] pb-[60px]">
      <img
        src="/Group.png"
        alt="arrow"
        className="w-[386px] h-[124px] ml-[300px]"
      />

      <div className="flex justify-between items-start">
        <div className="ml-[108px] mt-[10px]">
          <p className="text-[#07AC9E] font-roboto font-normal text-[21px] leading-[120%] tracking-[0.28em] capitalize">
            Save Journey
          </p>

          <div className="mt-[10px] max-w-[500px]">
            <h1 className="font-inter font-semibold text-[35px] capitalize">
              Make Your <span className="text-[#FF621F]">Holiday</span> Memorable
            </h1>

            <p className="mt-[10px] max-w-[454px] font-inter font-normal text-[21px] leading-[138%] text-[#4A4A4A]">
              Travor is one of the most popular travel agencies for those who
              want to explore the world and try to make adventure.
            </p>
          </div>
        </div>

        <div className="relative -mt-[60px] mr-[50px]">
          <Image
            src="/unnamed.png"
            alt="Traveler with suitcase"
            width={300}
            height={500}
            className="rounded-md"
          />

          <div className="absolute top-[250px] left-[-60px] bg-white">
            <Image
              src="/BestTour.png" 
              alt="Best Tour Awards"
              width={120}
              height={50}
            />
          </div>

          <div className="absolute top-[70px] right-[-40px] bg-white">
            <Image
              src="/explore.png" 
              alt="Explore Badge"
              width={120}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
      < 
        Hero_bottom/>
      </>
  );
};

export default Hero;
