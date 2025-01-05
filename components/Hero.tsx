import HeroSlider from "./HeroSlider";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
    >
    <Image src="./assets/img/hero.png" className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat" />
      <div className="container mx-auto h-full">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
