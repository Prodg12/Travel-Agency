import NatureImg from "../../assets/home-img/nature-img.png";
import CityImg from "../../assets/home-img/city-img.png";
import NatureLineImg from "../../assets/home-img/icons/Nature-line-img.png";
import CityLineImg from "../../assets/home-img/icons/city-line-img.png";
import React, { Component } from "react";
import Slider from "react-slick";
import "./explore.css";

const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: 0,
    prevArrow: 0
  };
  return (
    <div className="">
      <div className="h-[40vh] mt-20 items-center justify-between flex md:hidden">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NatureImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-1/2 h-[40vh] flex flex-col items-center justify-center"
        >
          <h6 className="text-white text-lg lg:text-base md:text-sm sm:text-xs">
            Promotion
          </h6>

          <span className="relative">
            <h1 className="text-white text-4xl font-[volkhov] tracking-wider lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
              Explore Nature
            </h1>

            <img
              src={NatureLineImg}
              alt="image"
              className="absolute right-0 w-[45%] h-[2vh]"
            />
          </span>

          <button className="mt-6 py-2 px-4 border border-solid border-offWhite text-white text-xs rounded-lg hover:bg-white/75 hover:text-navyBlue font-semibold lg:px-3 md:px-2 sm:text-[0.65rem] sm:py-1 xs:text-[0.6rem]">
            View Packages
          </button>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CityImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-1/2 h-[40vh] flex flex-col items-center justify-center"
        >
          <h6 className="text-white text-lg lg:text-base md:text-sm xs:text-xs">
            Promotion
          </h6>

          <span className="relative">
            <h1 className="text-white text-4xl font-[volkhov] tracking-wider lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
              Explore Cities
            </h1>

            <img
              src={CityLineImg}
              alt="image"
              className="absolute right-0 w-[45%] h-[2vh]"
            />
          </span>

          <button className="mt-6 py-2 px-4 border border-solid border-offWhite text-white text-xs rounded-lg hover:bg-white/75 hover:text-navyBlue font-semibold lg:px-3 md:px-2 sm:text-[0.65rem] sm:py-1 xs:text-[0.6rem]">
            View Packages
          </button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="hidden md:block w-full">
        <Slider {...settings}>
          <div className="w-full flex flex-col items-center justify-center h-[40vh] relative top">

            <img src={NatureImg} alt="" className="w-full absolute left-0 -z-10 brightness-50" />

            <h6 className="text-white text-lg lg:text-base md:text-sm z-20">
              Promotion
            </h6>

            <span className="relative z-20">
              <h1 className="text-white text-4xl font-[volkhov] tracking-wider lg:text-3xl md:text-2xl">
                Explore Nature
              </h1>

              <img
                src={NatureLineImg}
                alt="image"
                className="absolute right-0 w-[45%] h-[2vh]"
              />
            </span>

            <button className="mt-6 py-2 px-4 border border-solid border-offWhite text-white text-xs rounded-lg hover:bg-white/75 hover:text-navyBlue font-semibold lg:px-3 md:px-2 sm:text-[0.65rem] sm:py-1 xs:text-[0.6rem]">
              View Packages
            </button>
          </div>

          <div className="w-full h-[40vh] flex flex-col items-center justify-center relative top">
            <img src={CityImg} alt="" className="w-full absolute left-0 -z-10 brightness-50" />

            <h6 className="text-white text-lg lg:text-base md:text-sm z-20">
              Promotion
            </h6>

            <span className="relative">
              <h1 className="text-white text-4xl font-[volkhov] tracking-wider lg:text-3xl md:text-2xl">
                Explore Cities
              </h1>

              <img
                src={CityLineImg}
                alt="image"
                className="absolute right-0 w-[45%] h-[2vh]"
              />
            </span>

            <button className="mt-6 py-2 px-4 border border-solid border-offWhite text-white text-xs rounded-lg hover:bg-white/75 hover:text-navyBlue font-semibold lg:px-3 md:px-2 sm:text-[0.65rem] sm:py-1 xs:text-[0.6rem]">
              View Packages
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Explore;
