import React from "react";
import herobg from "../assets/hero.png";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Services from "../components/Home/Services";
import Testimonial from "../components/Home/Testimonial";
import Contact from "../components/shared/Contact";
import Newsletter from "../components/shared/Newsletter";
import Projects from "../components/Home/Projects";
import Blog from "../components/Home/Blog";
import Gallery from "../components/Home/Gallery";
import BentoGrid from "../components/Home/BentoGrid";

const Index = () => {
  return (
    <div className=" bg-gray-100 h-full">
      <Hero />
      <AboutMe />
      <Services />
      {/* <Projects /> */}
      {/* <Gallery /> */}
      <BentoGrid />

      <Testimonial />
      <Blog />
      <div id="contact">
        <Contact />
      </div>
      {/* <Newsletter /> */}
    </div>
  );
};

export default Index;
