import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import img from "../../assets/image6.jpeg";
import manowaImg from "../../assets/image7.jpeg";
import withBaaleImg from "../../assets/image1.jpeg";
import withTailors from "../../assets/image8.jpeg";
import lionsClub from "../../assets/image10.jpeg";

const AwardsTimeline = () => {
  const awards = [
    {
      title: "Award of Excellence and Distinguished Leadership",
      year: "2024",
      organization: "Council of Traditional Baales in Ibadanland",
      description:
        "Honored at the Ibadan House for outstanding leadership and commitment to the community.",
      image: withBaaleImg,
    },
    {
      title: "Prestigious Award for Leadership",
      year: "2024",
      organization: "Lions Clubs International, District 404B-4 Nigeria",
      description:
        "Recognized for unwavering commitment to humanity at the LAW HUB, Ring Road, Ibadan.",
      image: lionsClub,
    },
    {
      title: "Excellence Award by Man O’ War Nigeria",
      year: "2024",
      organization: "Man O’ War Nigeria",
      description:
        "Awarded at the 2nd National Commanders’ Conference for immense contributions to societal growth.",
      image: manowaImg,
    },
    {
      title: "Most Distinguished Ibadan Indigene",
      year: "2024",
      organization: "Central Council of Ibadan Indigenes (CCII)",
      description:
        "Honored for remarkable contributions to the progress of Ibadan and its people.",
      image: img,
    },
    {
      title: "Gold Award of Excellence",
      year: "2024",
      organization: "Nigerian Union of Tailors, Ibadan South West Special",
      description:
        "Recognized for dedication to community development and professional excellence.",
      image: withTailors,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="my-16"
    >
      <div className="flex items-center gap-3 mb-12">
        <Award className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">Awards & Recognition</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-support transform -translate-x-1/2"></div>

        {awards.map((award, index) => (
          <div key={index} className="mb-16 relative">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-support rounded-full flex items-center justify-center transform -translate-x-1/2 z-10"
              >
                <Calendar className="w-4 h-4 text-support" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.2 }}
                className={`md:w-5/12 ${
                  index % 2 === 0
                    ? "md:mr-auto pl-4 md:pl-0 md:pr-12"
                    : "md:ml-auto pl-4 md:pl-12"
                }`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{award.title}</h3>
                    {/* <span className="bg-secondary text-white font-bold py-1 px-3 rounded-full text-sm">
                      {award.year}
                    </span> */}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    {award.organization}
                  </p>
                  <div className="mb-4">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AwardsTimeline;
