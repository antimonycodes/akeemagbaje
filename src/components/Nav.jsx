import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/agbaje-logo-design-no-bg.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "#" },
    { name: "Services", path: "#" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "#" },
  ];

  return (
    <div className="fixed top-4 w-full z-[999] px-4">
      <div className=" rounded-3xl  shadow-2xl  bg-blackl/20 bg-white backdrop-blur-3xl max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-24">
          {/* logo */}
          <div className="text-xl font-bold flex flexcol items-center gap-1">
            <img src={logo} alt="" width={30} />
            <p className=" text-primary">Akeem Agbaje</p>
          </div>
          {/* hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-black text-md font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* download CV button */}
          <button className="hidden md:block borde py-1 px-3 rounded-lg bg-secondary text-white font-semibold">
            Download CV
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {/* {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-md font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="borde py-1 px-3 rounded-lg bg-[#FD6F00] text-white">
            Download CV
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Nav;
