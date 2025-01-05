"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";

const trainerData = [
  {
    image: "./assets/img/trainers/david.jpg",
    name: "Prasanth",
    role: "Body builder coach",
    description: "He'll push you to your limits and help you achieve your goals.",
  },
  // {
  //   image: "/assets/img/trainers/matt.jpg",
  //   name: "Matt",
  //   role: "Body builder coach",
  //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  // },
];

const Team = () => {
  return (
    <section
      className="py-8 md:py-12 h-auto bg-primary-200 text-white"
      id="team"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-center mb-6"
        >
          Our Trainers
        </motion.h2>

        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center space-y-4"
                key={index}
              >
                {/* image */}
                <div className="relative w-[250px] h-[280px] sm:w-[300px] sm:h-[330px] lg:w-[350px] lg:h-[390px] mx-auto mb-4">
                  <Image
                    src={trainer.image}
                    fill
                    alt={trainer.name}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  {trainer.name}
                </h4>
                <p className="uppercase text-xs md:text-sm tracking-[2px] md:tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="text-sm md:text-base max-w-[280px] md:max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;


// if more trainers are there then
//           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12 w-full"

