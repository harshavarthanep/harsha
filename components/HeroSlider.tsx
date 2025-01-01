"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const COUNT = [1, 2, 3];

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      {COUNT.map((ele) => (
        <>
          <SwiperSlide key={ele}>
            <div className="h-full flex justify-end pt-48">
              <div className="flex flex-col items-center lg:items-start lg:max-w-[600px]">
                <motion.h1
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h1 text-center lg:text-left mb-2"
                >
                  <span>WELCOME TO DAP FITNESS STUDIO</span>
                </motion.h1>

                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {/* <CustomButton
                    text="Get Started"
                    buttonStyles="w-[196px] h-[62px] bg-accent"
                  /> */}

                  <TextGenerateEffect words={"SCREW IT LETS'S DO IT"} />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}

      {/* swiper nav button */}
      {/* <SwiperNavButton
        containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[600px] z-50 flex justify-center lg:justify-start gap-1"
        btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent hover:text-black transition-all duration-300"
        iconStyles="text-2xl"
      /> */}
    </Swiper>
  );
};

export default HeroSlider;
