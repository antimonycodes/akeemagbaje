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

const Index = () => {
  return (
    <div className=" bg-gray-100">
      <Hero />
      <AboutMe />
      <Services />
      <Projects />

      <Testimonial />
      <Blog />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Index;
