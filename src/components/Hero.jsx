import Navbar from "./Navbar";
import TextDesign from "../assets/home-img/icons/text-design-img.png";
import PartnersImg from "../assets/home-img/partners-img.png";
import HeroImg from "../assets/home-img/homepage-img.png";

const Hero = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-screen hero overflow-hidden"
    >
      <Navbar />

      <div className="px-32 py-7 xl:px-20 xl:pt-1 lg:px-16 lg:pt-32 md:px-12 sm:px-10 xs:px-6">
        <img
          src={TextDesign}
          alt="textdesign"
          className="w-16 lg:w-12 sm:w-10 xs:w-9"
        />

        <h2 className="text-5xl font-bold text-white w-[45%] mt-3 leading-[55px] xl:text-4xl lg:w-[90%] lg:text-4xl md:text-3xl md:w-full sm:font-semibold sm:text-[1.7rem] xs:text-2xl xs:mt-1">
          No matter where you're going to, we'll take you there
        </h2>

        <div className="bg-offWhite/50 backdrop-blur-md h-20 mt-8 flex items-center w-[55%] rounded pl-7 xl:w-[70%] lg:min-w-[80%] md:min-w-[85%] sm:min-w-full sm:flex md:items-center md:justify-center md:pl-2 z-10">
          <span className="text-offWhite text-xs">Where to?</span>

          <span className="ml-8 h-10 border text-offWhite/10 backdrop-blur-md lg:ml-4 sm:ml-2 xs:ml-1" />

          <select className="ml-8 text-xs bg-offWhite/0 text-offWhite outline-0 lg:ml-4 sm:ml-2 xs:ml-1">
            <option value="#">Travel Type &nbsp;</option>
          </select>

          <span className="ml-8 h-10 border text-offWhite/10 backdrop-blur-md lg:ml-4 sm:ml-2 xs:ml-1" />

          <select className="ml-8 text-xs bg-offWhite/0 text-offWhite outline-0 lg:ml-4 sm:ml-2 xs:ml-1">
            <option value="#">Duration &nbsp;</option>
          </select>

          <span className="ml-8 h-10 border text-offWhite/10 backdrop-blur-md md:ml-4 sm:ml-2 xs:ml-1" />

          <button className="ml-8 bg-orange py-[0.6rem] px-10 rounded-md text-white text-xs lg:px-7 md:px-4 md:py-[0.4rem] md:ml-4 xs:px-2 xs:py-[0.3rem] xs:ml-2">
            Submit
          </button>
        </div>

        <div className="flex items-center mt-6">
          <img
            src={PartnersImg}
            alt="partners-img"
            className="w-24 md:w-20 sm:w-16"
          />

          <p className="text-white text-xs ml-3 sm:text-[0.6rem] xs:text-[0.55rem]">
            2,500 people booked Tommorowland Event in last 24 hours
          </p>
        </div>
      </div>

      <div
        className="w-[13rem] h-[13rem] border border-dotted border-offWhite/75
       rounded-full relative -bottom-2 -left-5 flex items-center justify-center lg:w-[12rem] lg:h-[12rem]  xl:bottom-8 lg:-bottom-7 md:-bottom-10 sm:-bottom-14 sm:w-[10rem] sm:h-[10rem] xs:-bottom-[15%] xs:w-[9rem] xs:h-[9rem]"
      >
        <span
          className="absolute w-[6rem] h-[6rem] border border-dotted
         border-offWhite/75 rounded-full text-xs text-offWhite/75"
        >
          <br /> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Scroll
        </span>
      </div>
    </main>
  );
};

export default Hero;
