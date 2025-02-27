// import shape from "../../assets/shape.svg";
// import img from "../../assets/agbaje-green.jpg";
// const BentoGrid = () => {
//   return (
//     <div className=" max-w-full px-32">
//       <div className=" flex items-center justify-center">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
//             Gallery
//           </h1>
//           <img src={shape} alt="" width={150} />
//         </div>
//       </div>
//       <div className=" mx-auto px-4 py-8">
//         {/* <h1 className="text-4xl font-bold text-center mb-8">
//           Bento Grid Layout with Images
//         </h1> */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* <!-- Large item --> */}
//           <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Nature"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-blac bg-opacity-60  transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 {/* <h3 className="text-2xl font-bold text-white">
//                   Explore Nature
//                 </h3> */}
//                 <p className="text-white">Dinner with co-workers</p>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Two small items --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1493770360161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Food"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Culinary Delights
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Technology"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Tech Innovations
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Three medium items --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Travel"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Travel Adventures
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Art"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Artistic Expressions
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* <!-- bottom cards --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Swimming</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Chess</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Football</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-72 md:h-60  object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Cricket</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;
import shape from "../../assets/shape.svg";
import img from "../../assets/agbaje-green.jpg";
import imgOne from "../../assets/image6.jpeg";
import imgTwo from "../../assets/image3.jpeg";
import imgThree from "../../assets/image0.jpeg";
import imgFour from "../../assets/image7.jpeg";
import imgFive from "../../assets/agbaje-hand-on-chin.jpg";
import imgSix from "../../assets/withArtwork.webp";
import imgSeven from "../../assets/sitting.jpg";
import imgEight from "../../assets/aaimg5.jpg";
import { useEffect, useRef, useState } from "react";

const BentoGrid = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array of all images for the mobile slider
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

  const scrollToNext = () => {
    if (sliderRef.current) {
      // If we're at the last slide, go back to the first
      if (activeSlide >= allImages.length - 1) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setActiveSlide(0);
      } else {
        sliderRef.current.scrollBy({ left: 280, behavior: "smooth" });
        setActiveSlide((prev) => prev + 1);
      }
    }
  };

  // Function to move to previous slide
  const scrollToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: "smooth" });
      setActiveSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  // Set up auto sliding
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        scrollToNext();
      }, 3000); // Change slide every 3 seconds
    }

    // Pause autoplay when user interacts with slider
    const handleInteraction = () => {
      setIsAutoPlaying(false);
      // Resume autoplay after 5 seconds of inactivity
      setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("touchstart", handleInteraction);
      sliderRef.current.addEventListener("mousedown", handleInteraction);
    }

    return () => {
      clearInterval(interval);
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("touchstart", handleInteraction);
        sliderRef.current.removeEventListener("mousedown", handleInteraction);
      }
    };
  }, [isAutoPlaying, activeSlide, allImages.length]);

  // Handle scroll events to update active slide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.offsetWidth * 0.8 + 16; // 80% width + margin
        const newActiveSlide = Math.round(scrollPosition / slideWidth);
        setActiveSlide(newActiveSlide);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
      {/* Mobile Slider - Only visible on small screens */}
      <div className="md:hidden">
        <div className="relative px-4">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className="snap-center flex-none w-4/5 mr-4 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index}`}
                  className="w-full h-72 object-cover"
                />
                {/* {index === 0 && (
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <h3 className="text-lg font-bold text-white">Title</h3>
                    <p className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    </p>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4">
            {allImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === activeSlide ? "bg-secondary" : "bg-gray-300"
                }`}
                onClick={() => {
                  if (sliderRef.current) {
                    const slideWidth = sliderRef.current.offsetWidth * 0.8 + 16;
                    sliderRef.current.scrollTo({
                      left: slideWidth * index,
                      behavior: "smooth",
                    });
                    setActiveSlide(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }
                }}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            onClick={scrollToPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            onClick={scrollToNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-full px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="mx-auto px- py-12 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large Image */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group ">
              <img
                src={imgOne}
                alt="Main Image"
                className="w-full h-[500px] object-cover"
              />
              {/* <div class="transition-height absolute bottom-0 h-10 w-full overflow-hidden bg-[#00000080] p-2.5 text-white shadow-[0_3px_10px_#00000033] duration-500 ease-in-out group-hover:h-28">
                <label class="font-bold">Title</label>
                <p class="mt-[11px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div> */}
            </div>

            {/* Small Images */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgTwo}
                alt="Food"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgFour}
                alt="Tech"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>

            {/* Medium Images */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgThree}
                alt="Travel"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgFive}
                alt="Art"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>

            {/* Bottom Row */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgSix}
                alt="Sport"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgSeven}
                alt="Chess"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={imgEight}
                alt="Football"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={img}
                alt="Cricket"
                className="w-full h-72 md:h-60  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CSS for hiding scrollbars */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default BentoGrid;
