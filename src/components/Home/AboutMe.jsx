import React from "react";
import aboutImg from "../../assets/hero.png";
import img from "../../assets/image2.jpeg";
import { ArrowBigRight, ArrowRight, ArrowUpRight } from "lucide-react";
import shape from "../../assets/shape.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import img from "../../assets/agbaje-hand-upjpg.jpg";

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
    <div className="px-4 md:px-32 py-24 flex flex-col md:flex-row items-center justify-between w-full bg-gray-100">
      {/* content */}
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>
        <img src={shape} alt="" width={140} className=" mb-8" />

        <motion.h3
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-lg max-w-[79%]"
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
          <button className="bg-secondary border flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg mt-4 cursor-pointer">
            Read More
            <span>
              <ArrowRight size={14} />
            </span>
          </button>
        </Link>
      </div>
      {/* image */}
      <div className="w-[500px] flex justify-center">
        <img
          src={img}
          alt=""
          className="w-full h-auto min-h-96 rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMe;
