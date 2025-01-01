"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section
      id="whoWeAre"
      className="relative bg-primary-200 text-white py-12"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* WHO WE ARE Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent"
          >
            WHO WE ARE
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-white text-center lg:text-left leading-relaxed"
          >
            Founded by three passionate friends, Dap Fitness is more than just a
            gym—it&apos;s a community built on friendship, dedication, and a
            shared love for fitness. With over seven years of combined
            experience in the fitness industry, our founders recognized a need
            for a unique fitness experience in Chennai. Their vision was to
            create a space where individuals could not only achieve their
            personal fitness goals but also foster a supportive and motivating
            environment.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 opacity-50 my-12 lg:my-16"></div>

        {/* OUR JOURNEY Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.h2
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent"
          >
            OUR JOURNEY
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-white text-center lg:text-left leading-relaxed"
          >
            What started as a shared passion for health and fitness has evolved
            into a thriving gym that stands out in Chennai. We believe in the
            power of collaboration and community. Dap Fitness is designed to
            empower individuals, regardless of their starting point, to pursue
            their fitness aspirations. Our founders’ commitment to excellence
            ensures that every member feels motivated and inspired.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
