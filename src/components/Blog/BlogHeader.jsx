// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/autoplay";

// const BlogHeader = ({ blogs }) => {
//   const navigate = useNavigate();

//   const handleReadMore = (blog) => {
//     navigate(`/blog/${blog.id}`, { state: { blog } });
//   };

//   return (
//     <div className="relative w-full h-screen">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop={true}
//         className="w-full h-full"
//       >
//         {blogs.map((blog, index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             <img
//               src={blog.img}
//               alt={blog.heading}
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40"></div>

//             {/* Content Box */}
//             <div className="absolute bottom-12 left-4 lg:left-24 bg-white w-[90%] lg:w-[40%] bg-opacity-90 p-6 rounded-2xl shadow-lg">
//               <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-4">
//                 {blog.heading}
//               </h1>
//               <div
//                 className="mt-auto transition-all duration-700 ease-in-out text-primary flex items-center gap-1 cursor-pointer"
//                 onClick={() => handleReadMore(blog)}
//               >
//                 <p className="text-xs font-semibold">Read post</p>
//                 <ArrowUpRight size={14} />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BlogHeader;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogHeader = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsTransitioning(true);

      // Set new index after transition begins
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);

      // Reset transition flag after animation completes
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with your CSS transition duration

      return () => clearTimeout(transitionTimeout);
    }, 6000); // Slide every 6 seconds (allowing time for transitions)

    return () => clearInterval(interval);
  }, [blogs.length, currentIndex]);

  const handleReadMore = () => {
    navigate(`/blog/${blogs[currentIndex].id}`, {
      state: { blog: blogs[currentIndex] },
    });
  };

  return (
    <div className="relative rounded-3xl w-full h-screen overflow-hidden">
      {/* Current slide */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${
          isTransitioning ? "opacity-100" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${blogs[currentIndex].img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Previous slide (for transition effect) */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${blogs[prevIndex].img})` }}
      />

      {/* Content box with fade-in effect */}
      <div
        className={`absolute bottom-12 left-4 lg:left-24 bg-white w-[90%] lg:w-[40%] bg-opacity-75 p-6 rounded-2xl shadow-lg 
          transition-all duration-700 ease-in-out transform ${
            isTransitioning
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-4">
          {blogs[currentIndex].heading}
        </h1>
        <div
          className="mt-auto transition-all duration-500 ease-in-out text-primary flex items-center gap-1 cursor-pointer hover:gap-2"
          onClick={handleReadMore}
        >
          <p className="text-xs font-semibold">Read post</p>
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {blogs.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-8 bg-secondary"
                : "w-2 bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;
