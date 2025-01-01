import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import WhyDap from "@/components/WhyDap";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <WhyDap />
      <Blog />
      <Team />
      <Testimonial />
    </main>
  );
}
