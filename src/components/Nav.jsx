import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonail", path: "" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div
      className=" fixed top-4 w-full z-[999] rounded-4xl bg-black/20 backdrop-blur-3xl text-[#FD6F00] flex justify-between items-center py-4 px-24 shadow-2xl"
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* logo */}
      <div>
        Akeem Agbaje <span>.</span>
      </div>
      {/* links */}
      <div>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-black text-md font-semibold mx-4"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
