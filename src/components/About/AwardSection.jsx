import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import img from "../../assets/image2.jpeg";

// Import award images (you'll need to add these to your assets folder)
// Example:
// import award1 from "../assets/award1.jpg";
// import award2 from "../assets/award2.jpg";
// import award3 from "../assets/award3.jpg";

const AwardsSection = () => {
  const awards = [
    {
      title: "Senior Advocate of Nigeria",
      year: "2015",
      organization: "Legal Practitioners' Privileges Committee",
      description:
        "Conferred with the prestigious rank of Senior Advocate of Nigeria in recognition of exceptional contribution to the legal profession.",
      // image: award1,
      // Placeholder until you add your image
      image: img,
    },
    {
      title: "Distinguished Service Award",
      year: "2018",
      organization: "Nigerian Bar Association",
      description:
        "Recognized for outstanding contributions to the development of law and justice in Nigeria.",
      // image: award2,
      image: img,
    },
    {
      title: "Legal Excellence Award",
      year: "2020",
      organization: "African Legal Awards",
      description:
        "Honored for exemplary leadership and significant impact in corporate and public law practice.",
      // image: award3,
      image: img,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="my-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <Award className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold">Awards & Recognition</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-white font-bold py-1 px-3 rounded-full">
                {award.year}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{award.organization}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AwardsSection;
