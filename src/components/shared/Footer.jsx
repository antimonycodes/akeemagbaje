// import { Linkedin, Twitter, Instagram } from "lucide-react";
// import { PiTiktokLogoBold } from "react-icons/pi";

// const Footer = () => {
//   const navLinks = [
//     { name: "About", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Skill", href: "#" },
//     { name: "Projects", href: "#" },
//     { name: "Testimonial", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   const socialLinks = [
//     { icon: Linkedin, href: "https://linkedin.com" },
//     { icon: Twitter, href: "https://twitter.com" },
//     { icon: Instagram, href: "https://instagram.com" },
//     { icon: PiTiktokLogoBold, href: "https://tiktok.com" },
//   ];

//   return (
//     <footer className="bg-[#272727] text-gray-300 py-8">
//       {/* Navigation Links */}
//       <div className="flex justify-center space-x-6 mb-6">
//         {navLinks.map((link) => (
//           <a
//             key={link.name}
//             href={link.href}
//             className="hover:text-white transition-colors"
//           >
//             {link.name}
//           </a>
//         ))}
//       </div>

//       {/* Social Media Icons */}
//       <div className=" flex justify-center space-x-6 mb-6">
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

//       {/* Copyright Text */}
//       <div className="text-center mb-4">
//         <p className="text-sm">Copyright © All right reserved - | 2024</p>
//       </div>

//       {/* Built with love text */}
//       {/* <div className="text-center mb-12">
//         <p className="text-sm">
//           Build with love by{" "}
//           <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-semibold">
//             Emmanuel Eze Adinuba
//           </span>
//         </p>
//       </div> */}

//       {/* Large Name Text */}
//       <div className="text-center">
//         <h1 className="text-8xl font-bold bg-gradient-to-r from-yellow-600 to-purple-800 bg-clip-text text-transparent">
//           Akeem Agbaje.
//         </h1>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Linkedin, Twitter, Instagram } from "lucide-react";
import { PiTiktokLogoBold } from "react-icons/pi";

const Footer = () => {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Skill", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: PiTiktokLogoBold, href: "https://tiktok.com" },
  ];

  return (
    <footer className="bg-[#272727] text-gray-300 py-8">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-white transition-colors text-sm md:text-base"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 md:space-x-6 mb-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            <social.icon className="h-6 w-6 md:h-8 md:w-8" />
          </a>
        ))}
      </div>

      {/* Copyright Text */}
      <div className="text-center mb-4">
        <p className="text-xs md:text-sm">
          Copyright © All right reserved - | 2024
        </p>
      </div>

      {/* Large Name Text */}
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-yellow-600 to-purple-800 bg-clip-text text-transparent">
          Akeem Agbaje.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
