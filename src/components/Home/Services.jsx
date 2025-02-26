import { Gavel, Users, Scale, MessageSquare, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import shape from "../../assets/shape.svg";

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: "Legal Expertise",
      description: "Specialized in constitutional and corporate law.",
    },
    {
      icon: Users,
      title: "Political Advocacy",
      description: "Champion for community rights and social justice.",
    },
    {
      icon: Scale,
      title: "Ethical Leadership",
      description: "Committed to transparency and integrity.",
    },
    {
      icon: MessageSquare,
      title: "Public Speaking",
      description: "Engaging orator for various forums and events.",
    },
  ];
  return (
    <div>
      <section className="  bg-gray-100 py-24">
        <div className="px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className=" text-center flex items-center justify-center">
            <div>
              <h1 className=" text-3xl font-bold text-center">Services</h1>
              <img src={shape} alt="" width={140} />
            </div>
          </div>

          <div
            text="Services & Expertise"
            className="text-4xl font-bold mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon
                  className="service-icon w-12 h-12 mb-4 text-primary
                "
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
