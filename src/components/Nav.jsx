import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className="fixed top-4 w-full z-[999] px-4">
      <div className="rounded-3xl shadow-2xl py-1 bg-blackl/20 bg-white backdrop-blur-3xl max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-24">
          {/* logo */}
          <div className="text-xl font-bold flex flexcol items-center gap-1">
            <img src={logo} alt="" width={30} />
            <p className="text-primary hidden md:block">Akeem Agbaje</p>
          </div>
          {/* hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? (
                <X className="h-6 w-6 textb" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* links */}
          <div className="hidden md:flex space-x-12 hover:text-support">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-black text-md font-semibold hover:text-support"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* download CV button */}
        </div>
      </div>
      {/* mobile menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-12 right-8 text-black"
        >
          <X className="h-8 w-8" />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-black text-xl font-semibold mb-4"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Nav;
