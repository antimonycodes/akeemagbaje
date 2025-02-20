import campaignsImg from "../../assets/campaigns.png";
// import dostbanner from "../../assets/dots-banner.png";
import { motion } from "framer-motion";
import shape from "../../assets/shape.svg";

const Projects = () => {
  const cards = [
    {
      img: campaignsImg,
      heading: "Project DOTS",
    },
    {
      img: campaignsImg,
      heading: "Project CDS",
    },
    {
      img: campaignsImg,
      heading: "BeatNTDs",
    },
  ];

  return (
    <div className=" px-4 md:px-32 py-12">
      <div className=" flex items-center justify-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
            Projects
          </h1>
          <img src={shape} alt="" width={150} />
        </div>
      </div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8   my-8 mx-auto ">
        {cards.map((card, i) => (
          <div
            key={i}
            className=" mx-aut w-full px-4 py-8 bg-white  flex flex-col gap-2 rounded-md shadow-lg"
          >
            <img src={card.img} alt="Campaign" className="rounded-md" />
            <h2 className="text-base md:text-xl text-[#1D1D1D]  font-medium">
              {card.heading}s{" "}
            </h2>

            <motion.div
              // whileHover={{ scale: 0.95, rotate: "2.5deg" }}
              // whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              // transition={{
              //   duration: 0.125,
              //   ease: "easeInOut",
              // }}
              className="border bg-orange-300 hover:bg-[#B00512]  text-white  transition-all duration-700 ease-in-out w-fit py-2 px-4 rounded-md mt-2 cursor-pointer"
            >
              View more
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
