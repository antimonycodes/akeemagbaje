import shape from "../../assets/shape.svg";
import img from "../../assets/aaimg1.jpg";
import imgOne from "../../assets/aaimg4.jpg";
import imgTwo from "../../assets/aaimg8.jpg";
import imgThree from "../../assets/aaimg5.jpg";
import imgFour from "../../assets/image7.jpeg";
import imgFive from "../../assets/image0.jpeg";
import imgSix from "../../assets/aaimg9.jpg";
import imgSeven from "../../assets/image2.jpeg";
import imgEight from "../../assets/aaimg7.jpg";
import { useEffect, useState } from "react";

const BentoGrid = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const allImages = [
    img,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSix,
    imgSeven,
    imgEight,
  ];

  const moveToNext = () => {
    setActiveSlide((prev) => (prev >= allImages.length - 1 ? 0 : prev + 1));
  };

  const moveToPrev = () => {
    setActiveSlide((prev) => (prev <= 0 ? allImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(moveToNext, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeSlide]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <>
      <div className="flex items-center justify-center py-12">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
            Gallery
          </h1>
          <img src={shape} alt="" width={150} />
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden px-4">
        <div className="relative w-full h-[80vh] rounded-xl shadow-lg overflow-hidden">
          {allImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
                index === activeSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Bento Grid */}
      <div className="max-w-full px-2 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 hidden md:block">
        <div className="mx-auto px- py-">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgOne}
                alt="Main"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgTwo}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgThree}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgFour}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgFive}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgSix}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgSeven}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgEight}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt="Image"
                className="w-full h-72 md:h-60 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BentoGrid;
