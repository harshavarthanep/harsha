import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
