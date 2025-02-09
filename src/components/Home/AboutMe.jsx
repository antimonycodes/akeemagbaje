import React from "react";
import aboutImg from "../../assets/hero.png";
import { ArrowBigRight } from "lucide-react";
import shape from "../../assets/shape.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="px-24 py-8 flex items-center justify-between w-full bg-gray-100">
      {/* content */}
      <div>
        <h1 className="text-3xl font-bold">About Me</h1>
        <img src={shape} alt="" width={140} />

        <motion.h3
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-lg"
        >
          {"With over three decades of experience in legal practice, I specialize in corporate and public law, while also playing a significant role in the energy sector and Oyo State politics."
            .split("")
            .map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
        </motion.h3>
        <Link to="/about">
          <button className="bg-[#FD6F00] border flex items-center gap-2 text-xs text-white px-4 py-2 rounded-lg mt-4 cursor-pointer">
            Learn More About Me
            <span>
              <ArrowBigRight />
            </span>
          </button>
        </Link>
      </div>
      {/* image */}
      <div>
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
