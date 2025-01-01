"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/card-spotlight";

const WhyDap = () => {
  return (
    <section
      id="whyDap"
      className="relative lg:py-24 py-12 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* WHY DAP Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-black"
          >
            WHY DAP
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-center lg:text-left leading-relaxed"
          >
            At DAP Fitness, we believe in more than just workouts. We foster a vibrant 
            community where you'll find support, motivation, and the drive to succeed. 
            We organize exciting events, challenges, and competitions to keep you engaged 
            and on track towards your goals. Our state-of-the-art facilities, expert guidance, 
            and diverse programs cater to all fitness levels, ensuring you always 
            have the tools and support you need to achieve your fitness aspirations.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 opacity-50 my-12 lg:my-16"></div>

        {/* VALUES Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.h2
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-black"
          >
            VALUES
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-5xl mx-auto text-base md:text-lg lg:text-xl text-center lg:text-left leading-relaxed grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12"
          >
            <CardSpotlight className="w-full md:w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                We are driven by a genuine love for fitness and wellness. We
                believe in building lasting relationships and supporting each
                other in the Dap community.
              </p>
            </CardSpotlight>
            <CardSpotlight className="w-full md:w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                We continuously seek new ways to enhance our services and
                facilities, and we prioritize transparency, professionalism, and
               respect in all we do.
              </p>
            </CardSpotlight>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyDap;
