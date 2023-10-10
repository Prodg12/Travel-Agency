import AboutHero from "../components/AboutHero";
import PopularImg from "../assets/about-img/popular-city-img.png";
import CircularDesign from "../assets/about-img/icons/circle-img.png";
import DashDesign from "../assets/about-img/icons/dash-design-img.png";
import PlansImg from "../assets/about-img/plans-img.png";
import Group1 from "../assets/about-img/icons/Group1.png";
import Group2 from "../assets/about-img/icons/Group2.png";
import Group3 from "../assets/about-img/icons/Group3.png";
import SeaShell from "../assets/about-img/icons/sea-shell-img.png";
// importing packages img
import BarclonaImg from "../assets/about-img/barcelona-img.png";
import BarclonaImg2 from "../assets/about-img/barcelona-img2.png";
import BarclonaRivers from "../assets/about-img/barcelona-rivers-img.png";
import BarclonaMountains from "../assets/about-img/barcelona-mountains-img.png";
import RioImg from "../assets/about-img/rio-de-jenero-img.png";
import MaldivesImg from "../assets/about-img/maldives-img.png";
import PakistanImg from "../assets/about-img/pakistan-img.png";
import LosangelesImg from "../assets/about-img/los-angeles-img.png";
import TomorrowlandImg from "../assets/about-img/tomorrow-land-img.png";
import SwitzerlandImg from "../assets/about-img/switzerland-img.png";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const About = () => {
  return (
    <main>
      <AboutHero />

      {/* Promotion section */}
      <section className="py-24 px-28 flex items-center justify-between lg:px-16 md:px-12 md:py-16 sm:px-10 sm:flex-col xs:px-8 xs:py-12">
        <div className="w-[50%] sm:w-full">
          <h6 className="text-orange font-semibold mb-1 md:text-sm sm:text-xs">PROMOTION</h6>

          <h1 className="text-4xl font-[volkhov] text-navyBlue font-bold leading-snug lg:text-3xl md:text-2xl xs:text-xl">
            We Provide You Best Europe Sightseeing Tours
          </h1>

          <p className="leading-relaxed mt-4 text-sm">
            Embark on a remarkable journey through Europe with our sightseeing tours. From historic landmarks to picturesque landscapes, our expertly curated itineraries promise a diverse and unforgettable exploration of this continent's treasures
          </p>

          <button className="mt-6 bg-orange border border-solid border-orange font-semibold text-white text-sm px-4 py-3 rounded-lg hover:bg-white hover:text-orange lg:py-2 sm:px-2 sm:text-xs sm:font-normal">
            View Packages
          </button>
        </div>

        <div className="relative w-[35%] sm:w-[80%] sm:mt-16">
          <img src={PopularImg} alt="popular-img" className="w-[90%]" />

          <img
            src={CircularDesign}
            alt="circular-design"
            className="w-[98%] absolute -top-4 -left-4 md:-top-2 md:-left-2 sm:-left-4 sm:-top-4 xs:-top-3 xs:-left-3"
          />

          <img
            src={DashDesign}
            alt="dash-design-img"
            className="w-[90rem] h-[20rem] absolute -top-3 -left-14 -z-10 md:-top-16 md:-left-3"
          />
        </div>
      </section>

      {/* Trend section */}
      <section className="py-16 px-24 flex items-center justify-between relative lg:px-16 md:px-12 sm:px-10 sm:flex-col-reverse xs:py-10 xs:px-8">
        <img src={PlansImg} alt="plans-img" className="w-[40%] sm:w-[70%] sm:mt-12" />

        <div className="w-[45%] md:w-[55%] sm:w-full">
          <h6 className="text-orange font-semibold text-lg md:text-sm">Trend</h6>

          <h1 className="text-4xl font-[volkhov] text-navyBlue font-bold mt-2 lg:text-3xl md:text-2xl xs:text-xl">
            Our Popular Tour Plans
          </h1>

          <p className="leading-relaxed text-sm mt-4 w-[80%] lg:w-[100%]">
           Discover our popular tour plans, carefully crafted to suit all tastes and budgets. Whether you crave cultural immersion, adventure, or relaxation, we have the perfect adventure waiting for you.
          </p>

          <div className="flex items-center mt-8 xs:mt-4">
            <img src={Group1} alt="group1-img" className="w-20 lg:w-16 md:w-12 xs:w-10" />

            <img src={Group2} alt="group2-img" className="w-20 ml-10 lg:w-16 md:w-12 xs:w-10" />

            <img src={Group3} alt="group3-img" className="w-[5.7rem] ml-10 lg:w-[4.5rem] md:w-[3.5rem] xs:w-[3rem]" />
          </div>
        </div>

        <img
          src={SeaShell}
          alt="sea-shell-img"
          className="w-[14%] flex absolute right-5 top-20 lg:w-[12%] lg:right-2 md:hidden"
        />
      </section>

      {/* Internation package section */}
      <section className="py-20 px-24 mb-10 lg:px-16 md:px-12 md:py-12 sm:px-10 xs:px-8">
        <h6 className="text-center text-orange font-semibold text-lg mb-4 sm:text-sm">
          Explore More
        </h6>

        <h1 className="text-navyBlue text-4xl text-center font-[volkhov] font-bold sm:text-3xl xs:text-2xl">
          Our International Packages
        </h1>

        <div className="grid grid-cols-12 gap-8 mt-20 lg:gap-4 md:gap-y-10 md:gap-x-6 sm:mt-12 xs:gap-x-4">

          {/* Barcelona img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BarclonaImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Barcelona</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Switzerland img */}
          <div
            style={{
              backgroundImage: `url(${SwitzerlandImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Switzerland</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Rio de jenero img */}
          <div
            style={{
              backgroundImage: `url(${RioImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 row-span-2 relative hover:scale-105 cursor-pointer transition duration-150 md:col-span-6 md:row-span-3"
          >
              <p className="text-white font-semibold text-sm absolute left-3 bottom-16 lg:text-xs">Rio de Jenero</p>

              <p className="text-white font-semibold ml-20 text-sm absolute right-3 bottom-16 lg:text-xs">$840</p>
          </div>

          {/* Barcelona mountains img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${BarclonaMountains})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Barcelona</p>

              <p className="text-white font-semibold ml-28 text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Tomorrowland img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${TomorrowlandImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Tomorrowland</p>

              <p className="text-white font-semibold ml-20 text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Los angeles img */}
          <div
            style={{
              backgroundImage: `url(${LosangelesImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Los angeles</p>

              <p className="text-white font-semibold ml-24 text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* India img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BarclonaMountains})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">India</p>

              <p className="text-white font-semibold ml-36 text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Barcelona img2 */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BarclonaImg2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Barcelona</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Maldives img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaldivesImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Maldives</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Barcelona rivers img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BarclonaRivers})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-6"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Barcelona</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>

          {/* Pakistan img */}
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${PakistanImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="col-span-3 relative h-[41vh] hover:scale-105 cursor-pointer transition duration-150 md:col-span-12"
          >
              <p className="text-white font-semibold text-sm absolute left-4 bottom-6 lg:text-xs">Pakistan</p>

              <p className="text-white font-semibold text-sm absolute right-4 bottom-6 lg:text-xs">$840</p>
          </div>
        </div>
      </section>

      <Testimonial/>
    </main>
  );
};

export default About;
