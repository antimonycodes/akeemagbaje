import React from "react";
import heroImg from "../../assets/aaimg1.jpg";
// import heroImg from "../../assets/agbaje-green.jpg";

import ScrollIndicator from "./ScrollIndicator";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { PiTiktokLogoBold } from "react-icons/pi";

const Hero = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100095293155758",
    },
    { icon: Twitter, href: "https://twitter.com/akeemaagbaje" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/akeemaagbaje?igsh=MWw4b2EweTg4Y21iNg==",
    },
    {
      icon: PiTiktokLogoBold,
      href: "https://www.tiktok.com/@akeemaagbaje?_t=ZM-8uGRrQZp3rB&_r=1",
    },
  ];

  return (
    <div className="w-full h-full  bg-black/20 flex flex-col md:flex-row items-center justify-between gap-12 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-12 pb-12 relative overflow-hidden">
      {/* <img
        src={herobg}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 font-bold text-center text-black px-4">
        <h1 className="text-4xl md:text-6xl">Hello,</h1>
        <h1 className="text-4xl md:text-6xl">I'm Akeem Agbaje</h1>
        <h1 className="text-xl md:text-2xl font-semibold mt-4">
          Distinguished Legal Practitioner | Entrepreneur | Political Leader
        </h1>
      </div> */}
      {/* Text */}
      <div className=" pt-12 md:pt-0 text-cente space-y-3 lg:space-y-8">
        <h1 className=" text-3xl md:text-5xl font-bold">I am Akeem Agbaje</h1>
        {/* occupation */}
        <div className=" flex items-center flex-wrap gap-2">
          <p className="text-xl font-medium text-gray-600">
            Legal Practitioner
          </p>
          <div className=" h-6 w-1 bg-primary "></div>
          <p className="text-xl font-medium text-gray-600">Entrepreneur</p>
          <div className=" h-6 w-1 bg-primary "></div>

          <p className="text-xl font-medium text-gray-600">Political Leader</p>
        </div>
        {/* cta buttons */}
        <div className=" flex flex- md:flex-row justify-betwee gap-3">
          <button className=" w-fit py-2 px-6 rounded-lg cursor-pointer bg-secondary text-white font-semibold">
            Contact Me
          </button>
          {/* <button className=" w-fit py-2 px-6 rounded-lg border-2 cursor-pointer border-secondary text-white font-semibold">
            Download CV
          </button> */}
        </div>
        {/* social links */}{" "}
        <div className="mx-0 bg-suppor p rounded-2xl  flex items-center justify- gap-4 z-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <social.icon className="h-6 w-6 md:h-8 md:w-8" />
            </a>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className="basis-1/2 w-full aspect-[4/5] md:aspect-[3/3] relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-lg z-10"></div>

        <img
          src={heroImg}
          alt=""
          className="rounded-lg w-full h-full object-cover object-top shadow-md"
        />
      </div>

      <div className="flex items-center justify-center absolute bottom-4 w-full z-10">
        {/* <ScrollIndicator /> */}
      </div>
    </div>
  );
};

export default Hero;
