// import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, GraduationCap } from "lucide-react";
import img from "../assets/hero.png";

const About = () => {
  const achievements = [
    {
      icon: Briefcase,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clients Served",
    },
    {
      icon: Award,
      value: "50+",
      label: "Major Cases Won",
    },
    {
      icon: GraduationCap,
      value: "20+",
      label: "Legal Publications",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 pt-32">
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
              <img
                src={img}
                alt="Babajide Ogunjobi"
                className="rounded-lg shadow-xl w-full h-[400px]"
              />
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white border border-gray-400  rounded-lg shadow-lg"
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <div className="text-3xl font-bold mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground">
                After graduating from the Nigerian Law School with distinction,
                I began my career at one of Nigeria's most prestigious law
                firms. My passion for public service led me to transition into
                politics, where I've served as a Federal Representative, working
                tirelessly to reform our justice system and create positive
                change in our community.
              </p>
            </motion.section>

            <motion.section
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
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
