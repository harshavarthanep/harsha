"use client";

import React from "react";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Tabs } from "./ui/tabs";
import { CardSpotlight } from "./ui/card-spotlight";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";



const testimonialData = [
  {
    img: "/assets/img/testimonial/gym1.jpg",
    content:
      "Personalized fitness and nutrition coaching delivered right to your door. Our expert trainers will create a customized plan to help you reach your health goals.",
    title: "F&N Coaching Online",
  },
  {
    img: "/assets/img/testimonial/gym1.jpg",
    content:
      "Experience the ultimate in personalized training. Our high-ticket personal training programs offer exclusive access to top trainers and cutting-edge techniques.",
    title: "Hi Ticket PT",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Build a strong, muscular physique naturally. Learn about the principles of natural bodybuilding, including proper nutrition, training, and supplementation.",
    title: "Natural Body Building",
  },
  {
    img: "/assets/img/testimonial/gym2.jpg",
    content:
      "Get the best of both worlds with our semi-private training. Train with a small group of like-minded individuals while receiving personalized coaching from a certified trainer.",
    title: "Semi Personal Training",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Join our virtual fitness community and workout from the comfort of your own home. Our live and on-demand group classes offer a variety of workouts to suit all fitness levels.",
    title: "Virtual Group Training",
  },
  {
    img: "/assets/img/testimonial/gym2.jpg",
    content:
      "Discover the power of food with our expert nutritionists. We'll help you create a sustainable eating plan that fits your lifestyle and supports your well-being.",
    title: "Nutrition Coaching",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Discover the healing power of movement. Our programs are designed to help you recover from injuries, manage chronic pain, and improve your quality of life.",
    title: "Healing Process",
  },
  ];

const WhatWeDo = () => {
  return (
    
<section id="whatWeDo" className="py-12">
    <div className="container mx-auto flex flex-col items-center gap-6 mb-4">
          
        <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-center text-lg"
          >
            At Dap Fitness, we&apos;re committed to helping you achieve your
            fitness goals through a variety of tailored services designed to
            meet your unique needs. Whether you’re a beginner or a seasoned athlete, 
            we have something for everyone. Explore our offerings below.
            
          </motion.p>
      </div>

  
    <div className="xl:py-3 h-full container mx-auto flex flex-col">
{/*         <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Services
        </motion.h2> */}

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
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-2xl font-semibold max-w-[380px) mb-8">{person.title}</p>
                      <span className="text-xl font-bold text-white">
                      <CardSpotlight>
                            <p className="relative z-20 mt-2">{person.content}</p>
                      </CardSpotlight>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
{/*           <SwiperNavButton
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            /> */}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
