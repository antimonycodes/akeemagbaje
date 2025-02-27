import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/agbaje-logo-design-no-bg.png";

const Preloader = ({ onComplete }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    function startLoader() {
      const counter = counterRef.current;
      if (!counter) return;

      let currentValue = 0;

      // Speed up the counter to complete faster
      const updateCounter = () => {
        if (currentValue === 100) {
          return;
        }

        // Increase by larger increments to reach 100% faster
        currentValue += Math.floor(Math.random() * 5) + 5;
        if (currentValue > 100) {
          currentValue = 100;
        }

        counter.textContent = currentValue + "%";

        // Shorter delay between updates
        let delay = Math.floor(Math.random() * 100) + 100;
        setTimeout(updateCounter, delay);
      };

      updateCounter();
    }

    startLoader();

    // Create a faster timeline for 5-second total duration
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    // Compressed animation timeline (total ~4.7s)
    tl.from(".circles", {
      duration: 0.8, // Reduced from 2
      top: "-100%",
      ease: "elastic.out(1, 0.5)", // Faster elastic
    })
      .to(
        ".circle-inner",
        {
          duration: 0.5, // Reduced from 1
          width: "clamp(50px, 15vw, 75px)",
          height: "clamp(50px, 15vw, 75px)",
          ease: "power2.inOut",
        },
        "+=0.2"
      ) // Reduced delay
      .to(
        ".circle-inner-rotator",
        {
          scale: 1,
          duration: 0.5, // Reduced from 1
          ease: "power2.inOut",
        },
        "+=0.1"
      ) // Reduced delay
      .to(
        ".circles",
        {
          duration: 0.7, // Reduced from 1.5
          rotation: 360,
          ease: "power2.inOut",
        },
        "+=0.1"
      ) // Reduced delay

      // .fromTo(
      //   ".container",
      //   {
      //     left: "100%",
      //     scale: 0.5,
      //     ease: "power2.inOut",
      //   },
      //   {
      //     duration: 0.8, // Reduced from 2
      //     left: "50%",
      //     transform: "translateX(-50%)",
      //     scale: 0.5,
      //   }
      // )

      .to(
        ".loader",
        {
          opacity: 0,
          duration: 0.3, // Reduced from 0.5
          ease: "power1.inOut",
        },
        "+=0.1"
      ); // Reduced from 0.5
  }, [onComplete]);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary">
      <div className="loader fixed top-0 left-0 w-full h-full bg-prim z-50">
        <h1
          ref={counterRef}
          className="counter w-full h-full fixed flex justify-center items-center font-light font-lobster italic z-[1000] text-white text-4xl md:text-6xl"
        >
          0%
        </h1>
        <div className="site-teaser absolute top-0 right-0 text-secondary p-2 md:p-4">
          <span>Akeem Agbaje</span>
        </div>
        {/* circles */}
        <div className="circles absolute left-[5%] md:left-[5rem] bottom-[5%] md:bottom-[5rem] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full">
          <div className="circle circle-outer"></div>
          <div className="circle circle-inner"></div>
          <div className="circle-inner-rotator"></div>
          {/* <div className="block">
            <div className="flex items-center justify-center mt-4 md:mt-8 lg:mt-16">
              <img
                src={logo}
                alt=""
                className="size-12 md:size-16 lg:size-24"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
