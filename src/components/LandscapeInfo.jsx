import GalleryImg1 from "../assets/landscape-img/gallery1.png";
import GalleryImg2 from "../assets/landscape-img/gallery2.png";
import GalleryImg3 from "../assets/landscape-img/gallery3.png";
import GalleryImg4 from "../assets/landscape-img/gallery4.png";
import GalleryImg5 from "../assets/landscape-img/gallery5.png";
import GalleryImg6 from "../assets/landscape-img/gallery6.png";
import LandscapeNav from "./LandscapeNav";
import LandscapePlan from "./LandscapePlan";

const LandscapeInfo = () => {
  return (
    <section className="pb-8 flex justify-center relative -top-14">
      <div className="w-[70%] shadow-lg lg:w-full">
        <LandscapeNav />

        <div className="flex justify-between px-6 pb-12 lg:px-12 lg:mt-16 md:flex-col-reverse sm:px-10 xs:px-8">
          <div className="w-[60%] lg:w-1/2 md:w-full md:mt-16">
            <div className="flex items-center">
              <h2 className="font-[volkhov] text-navyBlue font-semibold text-xl xs:text-lg">
                Switzerland
              </h2>

              <h3 className="text-lg font-medium text-orange ml-5 sm:text-base">1,000 $</h3>

              <p className="text-xl text-gray ml-1">/</p>

              <p className="text-gray text-sm ml-1 xs:text-xs">Per Couple</p>
            </div>

            <div className="flex mt-2">
              <span style={{ color: "#FFBA0A" }}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </span>

              <p className="text-xs text-gray ml-3">(2.3k review)</p>
            </div>

            <p className="text-sm mt-5 leading-relaxed">
              Discover the beauty of Switzerland with our expertly tailored trip
              planning services. We take pride in meticulously curating your
              Swiss adventure, from the stunning Swiss Alps to picturesque
              villages and pristine lakeshores. Our itineraries include scenic
              train rides, outdoor excursions, cultural immersion, and exquisite
              dining experiences, ensuring you experience the very best of
              Switzerland. Let us create your dream Swiss journey, leaving you
              with lasting memories of this breathtaking destination.
            </p>

            <div className="mt-10">
              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Destination</p>

                <p className="text-sm ml-28 lg:ml-20 xs:ml-16">: Zurich, Switzerland</p>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Depature</p>

                <p className="text-sm ml-32 lg:ml-24 xs:ml-20">
                  : Main Sqaure, New City
                </p>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Departure Time</p>

                <p className="text-sm ml-20 lg:ml-16 xs:ml-8">
                  : Approximately 08 : 10 AM
                </p>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Return Time</p>

                <p className="text-sm ml-28 lg:ml-20 xs:ml-16">
                  : Approximately 07 : 20 PM
                </p>
              </span>

              <span className="flex items-center mb-8">
                <p className="text-orange font-semibold xs:text-sm">Dress Code</p>

                <p className="text-sm ml-28 lg:ml-16 xs:ml-10">
                  : Casual, comfortable and light
                </p>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Dress Code</p>

                <span className="ml-28 flex items-center lg:ml-12">
                  <ion-icon name="close-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">Gallery Ticket</p>
                </span>

                <span className="ml-20 flex items-center lg:ml-6">
                  <ion-icon name="close-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">Lunch</p>
                </span>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold xs:text-sm">Not Included</p>

                <span className="ml-24 flex items-center lg:ml-12 xs:ml-10">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">5 star Accomodations</p>
                </span>

                <span className="ml-6 flex items-center xs:ml-4">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">Airport Transfer</p>
                </span>
              </span>

              <span className="flex items-center mb-7">
                <p className="text-orange font-semibold opacity-0">
                  Not Included
                </p>

                <span className="ml-24 flex items-center lg:ml-16 xs:ml-8">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">Breakfast</p>
                </span>

                <span className="ml-28 flex items-center lg:ml-12 xs:ml-8">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>

                  <p className="text-sm ml-2">Personal Guide</p>
                </span>
              </span>
            </div>

            <div className="mt-24">
              <h1 className="text-3xl font-[volkhov] text-navyBlue font-semibold mb-5 md:text-2xl">
                From our gallery
              </h1>

              <p className="text-sm">
                Explore our captivating picture gallery, where stunning images
                from around the world come to life. Immerse yourself in the
                beauty of diverse destinations and let your wanderlust be
                ignited.{" "}
              </p>

              <div className="grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg1}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>

                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg2}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>

                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg3}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>

                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg4}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>

                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg5}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>

                <div className="col-span-4 xs:col-span-6">
                  <img
                    src={GalleryImg6}
                    alt="gallery1-img"
                    className="hover:scale-105 cursor-pointer transition duration-150"
                  />
                </div>
              </div>
            </div>
          </div>

          <LandscapePlan/>
        </div>
      </div>
    </section>
  );
};

export default LandscapeInfo;
