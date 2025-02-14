import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../../assets/mm.png";
import shape from "../../assets/shape.svg";

const testimonials = [
  {
    name: "Council of Ibadan Traditional Baales",
    // role: "Manager Director",
    text: "Barr. Akeem Agbaje has consistently shown his belief in the preservation and promotion of Yoruba culture and values. His love for Ibadanland and his generosity toward mankind distinguish him as a leader of excellence. This award is a testament to his remarkable contributions and a call to do even more",
    image: img,
  },
  {
    name: "the Olubadan, His Imperial Majesty Oba Akinloye Owolabi Olakulehin",
    // role: "CEO, TechCorp",
    text: "This award is a testament to Barr Akeem Agbaje’s enduring contributions to our community. His dedication to the welfare of our people and the progress of our land is exemplary",
    image: img,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="flex flex-col md:flex-row items-cente justify-between py-12 px-4 md:px-24">
      <div className="md:w-1/4 text-left mb-8 md:mb-0">
        <h3 className="text-3xl text-black font-bold">Testimonials</h3>
        <img src={shape} alt="" width={180} />
        <h2 className="text-xl font-medium text-gray-900 mt-2">
          Hear what people say about me.
        </h2>
        <div className="mt-4 h-1 w-24 bg-gray-200"></div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center relative">
        <div className="relative flex flex-col sm:flex-row w-full gap-12 max-w-xl">
          <div className="overflow-hidden w-full min-w-[250px]  h-[300px]">
            <img
              key={currentIndex}
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className={`w-full h-full object-cover rounded-md transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <div className="text- mt- flex flex-col items- relative">
            <FaQuoteLeft className="  top-0 left-0 text-primary text-3xl mb-2" />
            <p
              className={`text-gray-700 text-sm italic transition-opacity duration-500  ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              "{testimonials[currentIndex].text}"
            </p>
            <h4
              className={`font-bold text-sm text-gray-900 mt-1 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {testimonials[currentIndex].name}
            </h4>
            <p
              className={`text-gray-500 text-sm transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {testimonials[currentIndex].role}
            </p>
            <div className=" absolute bottom-0 flex gap-4 mt-2">
              <button
                onClick={handlePrevious}
                disabled={isAnimating}
                className="bg-primary text-white p-2 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="bg-primary text-white p-2 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
