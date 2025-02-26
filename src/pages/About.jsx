// import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, GraduationCap } from "lucide-react";
import img from "../assets/aaimg1.jpg";

const About = () => {
  const achievements = [
    // {
    //   icon: Briefcase,
    //   value: "15+",
    //   label: "Years Experience",
    // },
    // {
    //   icon: Users,
    //   value: "1000+",
    //   label: "Clients Served",
    // },
    // {
    //   icon: Award,
    //   value: "50+",
    //   label: "Major Cases Won",
    // },
    // // {
    // //   icon: GraduationCap,
    // //   value: "20+",
    // //   label: "Legal Publications",
    // // },
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
        "A key player in Oyo State politics, a gubernatorial aspirant for the All Progressives Congress (APC) in both 2019 and 2023. He also served as the Oyo State secretary of the Tinubu/Shettima Grassroots Independent Campaign Council.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" mx-auto px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <motion.h1
                className="text-4xl font-bold mb-6"
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
                As a Senior Advocate of Nigeria and Federal Representative, I've
                dedicated my career to upholding justice and representing the
                interests of our great nation. My journey in law and public
                service has been driven by a commitment to positive change and
                national development.
              </motion.p>
            </div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="  w-full h-[600px]">
                <img
                  src={img}
                  alt="Babajide Ogunjobi"
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 text-left bg-white rounded-2xl shadow-lg"
              >
                <achievement.icon className="w-12 h-12 mx-aut mb-4 text-yellow-400" />
                <div className="text-xl font-semibold mb-2">
                  {achievement.value}
                </div>
                <div className=" text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-12 py-4">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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

            {/* <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Nigerian Law School</strong>
                  <br />
                  Barrister at Law (BL), First Class Honours
                </li>
                <li>
                  <strong>University of Lagos</strong>
                  <br />
                  Bachelor of Laws (LL.B), First Class Honours
                </li>
                <li>
                  <strong>Harvard Law School</strong>
                  <br />
                  Master of Laws (LL.M), International Law
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Constitutional Law</li>
                <li>Legislative Affairs</li>
                <li>Corporate Law</li>
                <li>Environmental Law</li>
                <li>Human Rights Advocacy</li>
                <li>Public Policy Development</li>
              </ul>
            </motion.section> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
