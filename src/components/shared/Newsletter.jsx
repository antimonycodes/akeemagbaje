import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-20 bg-[#FD6F00] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Stay Informed
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl mb-8 text-center">
            Subscribe to my newsletter for the latest updates on legal insights,
            political developments, and energy sector news.
          </p>
          <motion.form
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full text-gray-800 border border-white focus:outline-white focus:ring-2 focus:ring-white"
              //   required
            />
            <motion.button
              type="submit"
              className="bg-white text-[#FD6F00] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
