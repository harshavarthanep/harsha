"use client";

import "swiper/css";
import "swiper/css/pagination";

// testimonial data

const testimonialData = [
  {
    img: "./assets/img/testimonial/gym1.jpg",
    message:
      "Impressed with knowledgeable & supportive trainers! Fantastic ambiance - clean & motivating. Highly recommend!",
    name: "Pawon Channd",
  },
  {
    img: "./assets/img/testimonial/gym2.jpg",
    message:
      "I have recently joined the DAP fitness for unisex. Great ambiance! Trainers are helpful and supportive, even without PT. Very good experience.",
    name: "Manjula Manju",
  },
  {
    img: "./assets/img/testimonial/gym3.jpg",
    message:
      "New gym in Sholinganallur, near Elcot/Accenture. Affordable packages with discounts. Friendly and supportive trainers.",
    name: "Dinesh",
  },
  {
    img: "./assets/img/testimonial/gym1.jpg",
    message:
      "I recently joined this unisex gym, nice experience here, they will teach us from scratch and trainers are good and super supportive persons",
    name: "Devi ramakrishnaa",
  },
  {
    img: "./assets/img/testimonial/gym2.jpg",
    message:
      "Happy with the packages which are in affordable manner. seems trainers also friendly and supportive.",
    name: "Mourish",
  },
  {
    img: "./assets/img/testimonial/gym3.jpg",
    message:
      "I have recently joined here, the trainers are too friendly and they Guide the beginners very well.",
    name: "Ritthika Murugan",
  },
  // {
  //   img: "./assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
  // {
  //   img: "./assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
  // {
  //   img: "./assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
];

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28 h-full" id="testimonial">
      <div className="container mx-auto flex flex-col gap">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Testimonials
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[420px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2x1 text-gray-300" />
                      <p className="max-w-[380px) mb-4">{person.message}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
