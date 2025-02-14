// import React from "react";
// import herobg from "../../assets/hero.png";
// import ScrollIndicator from "./ScrollIndicator";
// import { Linkedin, Twitter, Instagram } from "lucide-react";
// import { PiTiktokLogoBold } from "react-icons/pi";

// const Hero = () => {
//   const socialLinks = [
//     { icon: Linkedin, href: "https://linkedin.com" },
//     { icon: Twitter, href: "https://twitter.com" },
//     { icon: Instagram, href: "https://instagram.com" },
//     { icon: PiTiktokLogoBold, href: "https://tiktok.com" },
//   ];

//   return (
//     <div className="w-full h-screen bg-black/20 flex items-center justify-center pt-32 relative">
//       <img
//         src={herobg}
//         alt=""
//         className="absolute w-full h-[500px] object-contain"
//       />
//       <div className="relative font-bold text-6xl text-center text-orange-400">
//         <h1>Hello,</h1>
//         <h1>I'm Akeem Agbaje</h1>
//         <h1 className="text-2xl font-semibold">
//           Distinguished Legal Practitioner | Entrepreneur | Political Leader
//         </h1>
//       </div>
//       <div className="flex items-center justify-center absolute bottom-4 w-full">
//         <ScrollIndicator />
//       </div>
//       <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
//         {socialLinks.map((social, index) => (
//           <a
//             key={index}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-yellow-500 transition-colors"
//           >
//             <social.icon className="h-8 w-8" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import herobg from "../../assets/hero.png";
import ScrollIndicator from "./ScrollIndicator";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { PiTiktokLogoBold } from "react-icons/pi";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: PiTiktokLogoBold, href: "https://tiktok.com" },
  ];

  return (
    <div className="w-full h-screen max-h-screen bg-black/20 flex flex-col items-center justify-center pt-32 relative overflow-hidden">
      <img
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
      </div>
      <div className="flex items-center justify-center absolute bottom-4 w-full z-10">
        <ScrollIndicator />
      </div>
      <div className="absolute bg-suppor p-2 rounded-2xl right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
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
  );
};

export default Hero;
