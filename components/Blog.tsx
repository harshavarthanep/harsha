"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";

const blogData = [
  {
    img: "./assets/img/blog/goku1.jpg",
    date: "Jan 01, 2025",
    title: "Unleash your inner Goku potential at DAP",
    href: "",
  },
  {
    img: "./assets/img/blog/dap1.jpg",
    date: "Jan 01, 2025",
    title: "Embrace the challenge. Let's do it!",
    href: "",
  },
  {
    img: "./assets/img/blog/dap3.jpg",
    date: "Jan 01, 2025",
    title: "Your fitness journey begins here.",
    href: "",
  },
  {
    img: "./assets/img/blog/dap2.jpg",
    date: "Jan 01, 2025",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "./assets/img/blog/dap4.jpg",
    date: "Jan 01, 2025",
    title: "Your happy place is here. Let's train!",
    href: "",
  },
  // {
  //   img: "/assets/img/blog/post1.jpg",
  //   date: "May 10, 2024",
  //   title: "Maintain a perfect structure after workout",
  //   href: "",
  // },
];

const Blog = () => {
  return (
    <section className="bg-primary-200 h-auto text-white py-12" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          DAP Moments
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
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      src={post.img}
                      width={320}
                      height={266}
                      alt=""
                      className="mb-6"
                    />

                    <div className="flex flex-col items-start">
                      <p className="max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>

                      <Link
                        className="hover: text-accent transition-all duration-300"
                        href={post.href}
                      >
                        <h5 className="5">{post.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButton
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <a href="https://maps.app.goo.gl/6dDcpfzJEMmspv2X8">
          <CustomButton
            buttonStyles="block w-[196px] h-[62px] mx-auto"
            text="Visit Now"
          />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
