import EarthCanvas from "./canvas/Earth";
import "../src/app/globals.css";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto bg-hero-pattern ">
        <EarthCanvas />
      </section>
      <div
        id="scroll-container"
        className="border border-b-slate-950 border-t-slate-950 border-solid"
      >
        <h2
          className=" tracking-wider font-semibold text-black lg:text-[50px] sm:text-[20px] xs:text-[20px] text-[30px] lg:leading-[90px]  text-left font-TuskerGrotesk "
          id="scroll-text"
        >
          Good Enough , Is Never Enough
        </h2>
      </div>
    </>
  );
};

export default Hero;
