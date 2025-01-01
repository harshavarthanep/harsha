import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

// const FEATURED = [
//   {
//     icon: <FaUsers />,
//     title: "award-winning trainer",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore.",
//   },
//   {
//     icon: <IoIosPricetags />,
//     title: "excellent prices",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore.",
//   },
//   {
//     icon: <FaDumbbell />,
//     title: "modern equipment",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore.",
//   },
// ];

const About = () => {
  return (
    <section id="about" className="pt-8 pb-14 lg:pt-16 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-left"
          >
            At Dap Fitness, we&apos;re committed to helping you achieve your
            fitness goals through a variety of tailored services designed to
            meet your unique needs. Whether you&apos;re a beginner or a seasoned
            athlete, we have something for everyone. Explore our offerings
            below.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            WHO WE ARE
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-left"
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

        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            OUR JOURNEY
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-left"
          >
            What started as a shared passion for health and fitness has evolved
            into a thriving gym that stands out in Chennai. We believe in the
            power of collaboration and community. Dap Fitness is designed to
            empower individuals, regardless of their starting point, to pursue
            their fitness aspirations. Our founders commitment to excellence
            ensures that every member feels welcomed, motivated, and inspired.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            WHY DAP
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-left"
          >
            Our Mission At Dap Fitness, our mission is simple: to provide a
            holistic fitness experience that transforms lives. We strive to
            offer state-of-the-art facilities, expert guidance, and diverse
            programs that cater to all fitness levels. Our goal is to create an
            inclusive atmosphere where everyone can feel confident and supported
            on their fitness journey.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            VALUES
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 2.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-left"
          >
            We are driven by a genuine love for fitness and wellness, We believe
            in building lasting relationships and supporting each other IN A DAP
            COMMUNITY. We continuously seek new ways to enhance our services and
            facilities, We prioritize transparency, professionalism, and respect
            in all we do.
          </motion.p>
        </div>

        {/* featured items */}
        {/* <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {FEATURED.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10"
                key={index}
              >
                <div className="text-4xl bg-primary-200 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div> */}

        {/* <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
