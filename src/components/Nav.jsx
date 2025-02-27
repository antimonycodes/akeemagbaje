import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../assets/agbaje-logo-design-no-bg.png";
import cvPdf from "../assets/file/AKEEM-AGBAJE-CV.pdf";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Blog", path: "/blog" },
    // { name: "Contact", path: "contact" }, // This will be a scroll link
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const handleNavClick = (path) => {
    if (path === "contact") {
      if (location.pathname !== "/") {
        navigate("/#contact");
      } else {
        scroll.scrollTo(document.getElementById("contact").offsetTop);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === "contact") {
      return location.hash === "#contact";
    }
    return location.pathname === path;
  };

  return (
    <div className="fixed top-4 w-full z-[999] px-4 ">
      <div className="rounded-3xl shadow-2xl py-1 bg-blackl/20 bg-white backdrop-blur-3xl max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-6 md:px-24">
          {/* logo */}
          <Link to="/">
            <div className="text-xl font-bold flex flexcol items-center gap-1">
              <img src={logo} alt="" width={30} />
              <p className="text-primary hidden md:block">Akeem Agbaje</p>
            </div>
          </Link>
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
            {navLinks.map((link) =>
              link.path === "contact" ? (
                <ScrollLink
                  key={link.name}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className={`text-md font-semibold cursor-pointer ${
                    isActive(link.path)
                      ? "text-support font-bold"
                      : "text-black"
                  }`}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                  {/* {isActive(link.path) && (
                    <span className="ml-2 inline-block w-2 h-2 bg-support rounded-full"></span>
                  )} */}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-md font-semibold ${
                    isActive(link.path)
                      ? "text-support font-bold"
                      : "text-black"
                  }`}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                  {/* {isActive(link.path) && (
                    <span className="ml-2 inline-block w-2 h-2 bg-support rounded-full"></span>
                  )} */}
                </Link>
              )
            )}
          </div>
          {/* download CV button */}
          <a
            href={cvPdf} // Use the imported CV file path
            download="Akeem_Agbaje_CV.pdf" // Specify the filename for download
            className="hidden md:block borde py-2 px-4 rounded-lg bg-secondary hover:bg-[#600F0B]  text-white text-sm font-medium  transition-all duration-300 
 ease-linear delay-0  hover:translate-y-[-7px] active:translate-y-[-1px]"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* mobile menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-primary z-50 flex flex-col items-center justify-center"
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
        {navLinks.map((link) =>
          link.path === "contact" ? (
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={500}
              className={`text-xl font-semibold mb-4 cursor-pointer ${
                isActive(link.path) ? "text-support font-bold" : "text-black"
              }`}
              onClick={() => handleNavClick(link.path)}
            >
              {link.name}
              {/* {isActive(link.path) && (
                <span className="ml-2 inline-block w-2 h-2 bg-support rounded-full"></span>
              )} */}
            </ScrollLink>
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-semibold mb-4 ${
                isActive(link.path) ? "text-support font-bold" : "text-black"
              }`}
              onClick={() => handleNavClick(link.path)}
            >
              {link.name}
              {/* {isActive(link.path) && (
                <span className="ml-2 inline-block w-2 h-2 bg-support rounded-full"></span>
              )} */}
            </Link>
          )
        )}
        <a
          href={cvPdf} // Use the imported CV file path
          download="Akeem_Agbaje_CV.pdf" // Specify the filename for download
          className="borde py-2 px-4 rounded-lg bg-secondary text-white font-semibold"
          onClick={() => setIsOpen(false)}
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Nav;
