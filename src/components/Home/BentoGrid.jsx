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

const BentoGrid = () => {
  const allImages = [
    img,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSix,
    imgSeven,
    // imgEight,
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center py-12">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
            Gallery
          </h1>
          <img src={shape} alt="decorative shape" width={150} />
        </div>
      </div>

      {/* Mobile Infinite Scroll Slider */}
      <div className="md:hidden px-4 overflow-hidden relative">
        <div className="flex w-max animate-scroll">
          {[...allImages, ...allImages].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index}`}
              className="w-48 h-60 object-cover rounded-lg mx-2"
            />
          ))}
        </div>
      </div>

      {/* Desktop Bento Grid */}
      <div className="max-w-full px-2 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 hidden md:block">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={imgOne}
                alt="Main"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index}`}
                  className="w-full h-72 md:h-60 object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Keyframe Animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default BentoGrid;
