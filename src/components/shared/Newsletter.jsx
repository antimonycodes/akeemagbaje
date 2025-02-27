import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className=" bg-gray-100">
      <section className="relative  -bottom-32 mx-auto max-w-7xl py-6 lg:py-20 px-4 md:px-2 rounded-2xl bg-secondary text-white">
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          <div className="md:basis-[50%] mb-8 md:mb-0 text-center md:text-left">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Stay Informed
            </motion.h2>
            <p className="text-base md:text-lg">
              Subscribe to my newsletter for the latest updates on legal
              insights, political developments, and energy sector news.
            </p>
          </div>
          <div className="w-full md:max-w-lg">
            <motion.form
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow flex items-center py-2 px-2 bg-white rounded-full border border-white focus-within:ring-2 focus-within:ring-white">
                <input
                  type="email"
                  name="email"
                  pattern=".+@.+\..{2,}$"
                  required
                  title="Enter a valid email address"
                  className="flex-grow px-4 py-3 rounded-full text-gray-800 bg-transparent focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="py-3 px-5 bg-black text-white rounded-full group">
                  <span className="sr-only">Subscribe</span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="new-arrow-right"
                  >
                    <path
                      d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
