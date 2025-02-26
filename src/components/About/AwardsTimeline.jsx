import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import img from "../../assets/image6.jpeg";

const AwardsTimeline = () => {
  const awards = [
    {
      title: "Senior Advocate of Nigeria",
      year: "2015",
      organization: "Legal Practitioners' Privileges Committee",
      description:
        "Conferred with the prestigious rank of Senior Advocate of Nigeria in recognition of exceptional contribution to the legal profession.",
      image: img, // Replace with actual image path
    },
    {
      title: "Distinguished Service Award",
      year: "2018",
      organization: "Nigerian Bar Association",
      description:
        "Recognized for outstanding contributions to the development of law and justice in Nigeria.",
      image: img, // Replace with actual image path
    },
    {
      title: "Legal Excellence Award",
      year: "2020",
      organization: "African Legal Awards",
      description:
        "Honored for exemplary leadership and significant impact in corporate and public law practice.",
      image: img, // Replace with actual image path
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
        <Award className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold">Awards & Recognition</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>

        {awards.map((award, index) => (
          <div key={index} className="mb-16 relative">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Date circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="absolute left-0 md:left-1/2 w-10 h-10 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10"
              >
                <Calendar className="w-4 h-4 text-yellow-400" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.2 }}
                className={`md:w-5/12 ${
                  index % 2 === 0
                    ? "md:mr-auto pl-12 md:pl-0 md:pr-12"
                    : "md:ml-auto pl-12 md:pl-12"
                }`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{award.title}</h3>
                    <span className="bg-yellow-400 text-white font-bold py-1 px-3 rounded-full text-sm">
                      {award.year}
                    </span>
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
