// import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, GraduationCap } from "lucide-react";
import img from "../assets/aaimg9.jpg";
import AwardsSection from "../components/About/AwardSection";
import AwardsTimeline from "../components/About/AwardsTimeline";
// import AwardsSection from "./AwardsSection"; // Import the new component

const About = () => {
  const achievements = [
    {
      icon: Briefcase,
      value: "Legal practitioner",
      label:
        "A distinguished legal practitioner of over three decades with vast experience and deep expertise in corporate and public law, complemented by contributions to research and public service.",
    },
    {
      icon: Users,
      value: "Enterpreneur",
      label:
        "An enterpreneur with focus on the energy sector with involvement in Independent Power Projects across several states and the development of natural gas pipelines. ",
    },
    {
      icon: Award,
      value: "Political Leader",
      label:
        "A key player in Oyo State politics, a gubernatorial aspirant for the All Progressives Congress (APC) in both 2019 and 2023. He also served as the Oyo State secretary of the Tinubu/Shettima Grassroots Independent Campaign Council.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <motion.h1
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                As a dedicated legal practitioner and advocate for justice, I
                have committed my career to upholding the rule of law and
                promoting national development. With years of experience in
                legal practice and public service, I have worked tirelessly to
                ensure fairness, protect fundamental rights, and contribute to
                policies that drive positive change in our society. My passion
                for justice and governance continues to shape my efforts in
                fostering a more just and equitable Nigeria.
              </motion.p>
            </div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full aspect-[3/3]">
                <img
                  src={img}
                  alt="Babajide Ogunjobi"
                  className="rounded-lg w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 text-left bg-white rounded-2xl shadow-lg"
              >
                <achievement.icon className="w-12 h-12 mx-aut mb-4 text-primary" />
                <div className="text-xl font-semibold mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-12 py-4">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground">
                Akeem Agbaje is an accomplished and experienced legal
                practitioner. He holds a LL.B (Hons) degree from the prestigious
                Obafemi Awolowo University, Ile-Ife (1990) and was called to the
                Nigerian Bar in 1991. He has over three decades post call active
                legal practice in corporate and public law, public service,
                research and entrepreneurship. He was part of a research team on
                African Economics Research Consortium "External Reserve
                Composition for Debt Management" and a member of the Energy
                Thematic Group of the Vision 2020 committee.
              </p>
            </motion.section>

            {/* Added Awards Section here */}
            {/* <AwardsSection /> */}
            <AwardsTimeline />

            {/* Commented sections remained commented as in original */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
