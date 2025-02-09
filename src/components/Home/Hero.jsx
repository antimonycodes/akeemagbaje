import React from "react";
import herobg from "../../assets/hero.png";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-black/20 flex items-center justify-center pt-32"
      //   style={{
      //     background: "linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
      //   }}
    >
      <img
        src={herobg}
        alt=""
        className="absolute w-full h-[500px] object-contain"
      />
      <div className="relative font-bold text-6xl text-center text-orange-400">
        <h1>Hello,</h1>
        <h1>I'm Akeem Agbaje</h1>
        <h1 className="text-2xl font-normal">
          Distinguished Legal Practitioner | Entrepreneur | Political Leader
        </h1>
      </div>
      <div className=" flex items-center justify-center absolute bottom-4 w-full">
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
