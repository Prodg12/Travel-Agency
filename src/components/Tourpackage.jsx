import Tour1 from "../assets/home-img/switzerland-img.png";
import Tour2 from "../assets/home-img/brazil-img.png";
import Tour3 from "../assets/home-img/egypt-img.png";
import Tour1flag from "../assets/home-img/icons/switzerland-flag.png";
import Tour2flag from "../assets/home-img/icons/brazil-flag.png";
import Tour3flag from "../assets/home-img/icons/egypt-flag.png";
import React, { Component } from "react";
import Slider from "react-slick";
import "../App.css";

const Tourpackage = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="py-24 px-32 xl:px-20 tour-wrapper">
        <h5 className="text-orange text-center font-semibold md:text-sm">
          TRENDY
        </h5>

        <h1 className="text-navyBlue font-bold text-4xl font-[volkhov] text-center leading-snug mb-16 lg:text-3xl md:text-2xl xs:text-xl">
          Our Trending Tour
          <br /> Packages
        </h1>

        <div className="grid grid-cols-12 gap-24 xl:gap-12 lg:gap-4 lg:hidden">
          <div className="col-span-4 xs:col-span-12 mb-20">
            <div className="relative mb-8">
              <img src={Tour1} alt="tour1" />

              <img
                src={Tour1flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:text-xs lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:text-xs lg:ml-1">25 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">
                Switzerland
              </h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Europe</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,000 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Experience the enchanting beauty of Switzerland with our
                meticulously crafted tour packages. Immerse yourself in
                breathtaking landscapes, vibrant cities, and rich culture on a
                journey of a lifetime.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange  font-semibold
            "
            >
              Explore Now
            </button>
          </div>

          <div className="col-span-4 xs:col-span-12 mb-20">
            <div className="relative mb-8">
              <img src={Tour2} alt="tour2" />

              <img
                src={Tour2flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm lg:text-xs">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">30 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">
                Amazon
              </h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Brazil</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,223 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Discover the vibrant rhythms of Brazil with our tailored tour
                packages. From the Amazon Rainforest to Rio's samba beats, let
                us guide you through this diverse and captivating destination.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange font-semibold
            "
            >
              Explore Now
            </button>
          </div>

          <div className="col-span-4 xs:col-span-12">
            <div className="relative mb-8">
              <img src={Tour3} alt="tour3" />

              <img
                src={Tour3flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm lg:text-xs">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">155 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">Giza</h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Egypt</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,200 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Uncover the wonders of ancient Egypt with our expertly designed
                tour packages. Explore timeless treasures like the pyramids and
                the Nile, and experience the magic of this historic land.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange font-semibold
            "
            >
              Explore Now
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Slider {...settings}>
          <div className="">
            <div className="relative mb-8">
              <img src={Tour1} alt="tour1" />

              <img
                src={Tour1flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:text-xs lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:text-xs lg:ml-1">25 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">
                Switzerland
              </h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Europe</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,000 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Experience the enchanting beauty of Switzerland with our
                meticulously crafted tour packages. Immerse yourself in
                breathtaking landscapes, vibrant cities, and rich culture on a
                journey of a lifetime.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange  font-semibold
            "
            >
              Explore Now
            </button>
          </div>

          <div className="">
            <div className="relative mb-8">
              <img src={Tour2} alt="tour2" />

              <img
                src={Tour2flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm lg:text-xs">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">30 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">
                Amazon
              </h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Brazil</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,223 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Discover the vibrant rhythms of Brazil with our tailored tour
                packages. From the Amazon Rainforest to Rio's samba beats, let
                us guide you through this diverse and captivating destination.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange font-semibold
            "
            >
              Explore Now
            </button>
          </div>

          <div className="">
            <div className="relative mb-8">
              <img src={Tour3} alt="tour3" />

              <img
                src={Tour3flag}
                alt="country-img"
                className="w-20 absolute -bottom-12 left-2"
              />
            </div>

            <div className="flex items-center mb-3 text-gray text-sm lg:text-xs">
              <span className="flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">8 Days</h6>
              </span>

              <span className="ml-12 flex items-center lg:ml-6">
                <ion-icon name="person-outline"></ion-icon>

                <h6 className="ml-2 lg:ml-1">155 People Going</h6>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-dark font-bold text-xl lg:text-base">Giza</h2>

              <span style={{ color: "#FFBA0A", fontSize: "0.8rem" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>
            </div>

            <div className="flex items-center mt-1 mb-1 text-gray">
              <ion-icon name="location-outline"></ion-icon>

              <h3 className="ml-1 text-sm">Egypt</h3>
            </div>

            <div className="flex items-center mb-2">
              <h3 className="text-orange text-xl lg:text-base">1,200 $</h3>

              <span className="ml-3 text-sm line-through text-gray">
                1,200 $
              </span>
            </div>

            <span>
              <p className="text-sm leading-relaxed mb-6">
                Uncover the wonders of ancient Egypt with our expertly designed
                tour packages. Explore timeless treasures like the pyramids and
                the Nile, and experience the magic of this historic land.
              </p>
            </span>

            <button
              className="bg-orange py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
              hover:text-orange font-semibold
            "
            >
              Explore Now
            </button>
          </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Tourpackage;
