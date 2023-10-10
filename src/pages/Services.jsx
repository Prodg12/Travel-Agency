import { MagnifyingGlassIcon, PenIcon, PeopleIcon } from "../components/Footericons";
import ServicesHero from "../components/ServicesHero";
import SwitzerlandImg from "../assets/services-img/switzerland-img.png";
import MaldivesImg from "../assets/services-img/maldives-img.png";
import TorontoImg from "../assets/services-img/toronto-img.png";
import ChineseImg from "../assets/services-img/chinese-img.png";
import BerlinImg from "../assets/services-img/berlin-img.png";
import BakuImg from "../assets/services-img/baku-img.png";
import TripImg from "../assets/services-img/trip-img.png";
import SnailImg from "../assets/services-img/snail-img.png";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <main>
      <ServicesHero />

      <section className="pb-8 flex justify-center relative -top-14">
        <div className="w-[70%] shadow-lg lg:w-full">
          <div className="flex items-center justify-between bg-lighterGray py-12 px-16 mb-8 sm:px-5 xs:px-2">
            <span className="flex items-center xs:flex-col text-sm">
              <ion-icon
                name="calendar-number-outline"   
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade lg:text-sm sm:text-xs xs:mt-1">Date</p>
            </span>

            <span className="flex items-center xs:flex-col xs:text-base">
              <ion-icon
                name="push-outline"
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade lg:text-sm sm:text-xs xs:mt-1">
                Price Low to High
              </p>
            </span>

            <span className="flex items-center xs:flex-col xs:text-base">
              <ion-icon
                name="download-outline"
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade lg:text-sm sm:text-xs xs:mt-1">
                Price High to Low
              </p>
            </span>

            <span className="flex items-center xs:flex-col">
              <PenIcon className="w-4 xs:w-3" />

              <p className="ml-2 font-semibold text-darkShade lg:text-sm sm:text-xs xs:mt-1">Name (A-Z)</p>
            </span>
          </div>

          <div className="flex justify-between px-5 md:flex-col-reverse md:px-12 sm:px-10 xs:px-8">
            <div className="grid grid-cols-8 gap-2 gap-y-10 w-[55%] lg:w-[60%] md:w-full md:mt-16">
              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={SwitzerlandImg} alt="switzerland-img" className="xs:w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:items-center sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                      
                    </span>

                    <span className="flex items-center sm:flex-col sm:items-center sm:text-xs">
                      <PeopleIcon className="w-4" />

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Switzerland
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:hidden">
                    Switzerland Awaits: <br /> Majestic Alps, Scenic Beauty, Unforgettable Adventures.
                  </p>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Switzerland Awaits: Majestic Alps, Scenic Beauty, Unforgettable Adventures.
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={BerlinImg} alt="switzerland-img" className="w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:items-center sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                    </span>

                    <span className="flex items-center sm:flex-col sm:items-center sm:text-sm">
                      <PeopleIcon className="w-4" />

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Berlin
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Berlin Beckons: Rich History, Vibrant Culture, Memorable Explorations Awaits You
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={MaldivesImg} alt="switzerland-img" className="w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                    </span>

                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <PeopleIcon className="w-4" />

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Maldives
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Maldives Escape: Pristine Beaches, Luxury Resorts, Tropical Serenity Awaits You.
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={TorontoImg} alt="switzerland-img" className="w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                    </span>

                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <PeopleIcon className="w-4" />

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Torronto
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Toronto Getaway: Discover Cultural Riches, Thriving Arts, Vibrant Urban Exploration.
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={BakuImg} alt="switzerland-img" className="w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                    </span>

                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <PeopleIcon />

                      <p className="ml-2 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Baku
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Baku Awaits: Enriching Culture, Scenic Beauty, Unforgettable Azerbaijani Experience.
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="col-span-4 p-3 pt-5 rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer lg:p-2 xs:col-span-8 xs:p-8 xs:border xs:border-gray">
                <div>
                  <img src={BerlinImg} alt="switzerland-img" className="w-full" />

                  <div className="bg-orange text-white flex items-center px-1 py-2 justify-between md:px-3 sm:px-1 xs:px-2">
                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <ion-icon name="calendar-number-outline"></ion-icon>

                      <p className="ml-1 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">12, September 2022</p>
                    </span>

                    <span className="flex items-center sm:flex-col sm:text-sm">
                      <PeopleIcon />

                      <p className="ml-2 text-[0.65rem] lg:text-[0.55rem] md:text-[0.65rem]">120+ People</p>
                    </span>
                  </div>
                </div>

                <div className="py-4 pl-1">
                  <h1 className="text-2xl font-[volkhov] text-navyBlue font-semibold lg:text-xl">
                    Berlin
                  </h1>

                  <p className="text-sm text-navyBlue mt-3 leading-relaxed lg:text-[0.8rem] md:text-sm sm:text-[0.8rem]">
                    Berlin Beckons: History, Culture, Adventure in Vibrant German Capital.
                  </p>

                  <span className="flex items-center text-sm font-semibold text-[#262626] mt-2">
                    <p>1,100 $</p>

                    <span className="flex ml-8">
                      <ion-icon
                        name="star"
                        style={{ color: "#DF6951" }}
                      ></ion-icon>

                      <p>5.0</p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex ml-48 mb-8 mt-2 sm:ml-36 xs:ml-28">
                <span className="flex items-center justify-center">
                  <ion-icon name="chevron-back-outline"></ion-icon>

                  <button className="py-[0.2rem] px-2 bg-grayShade rounded-full text-xs font-medium mx-2">
                    1
                  </button>
                  <button className="px-2 text-xs font-medium hover:bg-grayShade rounded-full py-[0.2rem] transition duration-300">2</button>
                  <button className="px-2 text-xs font-medium hover:bg-grayShade rounded-full py-[0.2rem] transition duration-300">3</button>
                  <button className="px-2 text-xs font-medium hover:bg-grayShade rounded-full py-[0.2rem] transition duration-300">4</button>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </div>
            </div>

            <div className="w-[35%] flex flex-col md:w-full">
              <div className="py-12 px-8 bg-[#EDEDED]">
                <h2 className="text-3xl font-[volkhov] text-center text-navyBlue font-semibold mb-3 lg:text-2xl">
                  Plan Your Trip
                </h2>

                <p className="text-center leading-relaxed text-sm">
                  Streamline your travel plans with our agency's expert itinerary design, ensuring a smooth, unforgettable journey tailored to your preferences.
                </p>

                <div className="w-full mt-8">
                  <div className="md:flex md:justify-between sm:flex-col">
                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute top-5 left-4 opacity-20" />

                      <input
                        type="text"
                        placeholder="Search Tour"
                        className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
                      />
                    </div>

                    <div className="relative mt-4 md:mt-0 sm:mt-4">
                      <ion-icon
                        name="location-outline"
                        style={{
                          fontSize: "1.4rem",
                          position: "absolute",
                          top: "35%",
                          left: "3.5%",
                          opacity: "0.3",
                        }}
                      ></ion-icon>

                      <input
                        type="text"
                        placeholder="Where To?"
                        className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <ion-icon
                      name="calendar-number-outline"
                      style={{
                        fontSize: "1.2rem",
                        position: "absolute",
                        top: "35%",
                        left: "3.5%",
                        opacity: "0.3",
                      }}
                    ></ion-icon>

                    <input
                      type="date"
                      className="outline-none w-full h-14 pl-10 pr-3 text-gray/80"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-darkShade font-bold tracking-widest">
                      Filter By Price
                    </h3>

                    <div className="h-7 bg-white mt-4 flex justify-between">
                      <span className="bg-orange w-7" />

                      <span className="bg-orange w-7" />
                    </div>

                    <p className="opacity-60 text-sm mt-2">
                      Price: $12 - $3600
                    </p>

                    <div className="flex items-center justify-center mt-6">
                      <button className="bg-orange px-7 py-3 text-white text-xs rounded-md items-center">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <img src={TripImg} alt="trip-img" className="h-[42vh] mt-16 md:hidden" />
            </div>
          </div>
        </div>

        <img
          src={SnailImg}
          alt="snail-img"
          className="absolute right-2 top-48 w-40 lg:hidden"
        />
      </section>
    </main>
  );
};

export default Services;
