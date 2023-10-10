import TripImg from "../assets/services-img/trip-img.png";

const LandscapePlan = () => {
  return (
    <div className="w-[35%] flex flex-col lg:w-[45%] md:w-full">
      <div className="py-12 px-8 bg-[#EDEDED]">
        <h2 className="text-3xl font-[volkhov] text-center text-navyBlue font-semibold mb-3">
          Plan Your Trip
        </h2>

        <p className="text-center leading-relaxed text-sm">
          Streamline your travel plans with our agency's expert itinerary
          design, ensuring a smooth, unforgettable journey tailored to your
          preferences..
        </p>

        <div className="w-full mt-8">
          <div className="md:flex md:justify-between sm:flex-col">
            <div className="relative mt-2">
              <ion-icon
                name="person-outline"
                style={{
                  fontSize: "1.4rem",
                  position: "absolute",
                  top: "30%",
                  left: "3.5%",
                  opacity: "0.3",
                }}
              ></ion-icon>

              <input
                type="text"
                placeholder="Search Tour"
                className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
              />
            </div>

            <div className="relative mt-2">
              <ion-icon
                name="mail-outline"
                style={{
                  fontSize: "1.4rem",
                  position: "absolute",
                  top: "30%",
                  left: "3.5%",
                  opacity: "0.3",
                }}
              ></ion-icon>

              <input
                type="text"
                placeholder="Email"
                className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
              />
            </div>
          </div>

          <div className="md:flex md:justify-between sm:flex-col">
            <div className="relative mt-2">
              <ion-icon
                name="mail-outline"
                style={{
                  fontSize: "1.4rem",
                  position: "absolute",
                  top: "30%",
                  left: "3.5%",
                  opacity: "0.3",
                }}
              ></ion-icon>

              <input
                type="text"
                placeholder="Confirm Email"
                className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
              />
            </div>

            <div className="relative mt-2">
              <ion-icon
                name="call-outline"
                style={{
                  fontSize: "1.4rem",
                  position: "absolute",
                  top: "30%",
                  left: "3.5%",
                  opacity: "0.3",
                }}
              ></ion-icon>

              <input
                type="text"
                placeholder="Phone"
                className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
              />
            </div>
          </div>

          <div className="md:flex md:justify-between sm:flex-col">
            <div className="relative mt-2">
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

            <div className="relative mt-2">
              <ion-icon
                name="ticket-outline"
                style={{
                  fontSize: "1.4rem",
                  position: "absolute",
                  top: "30%",
                  left: "3.5%",
                  opacity: "0.3",
                }}
              ></ion-icon>

              <input
                type="text"
                placeholder="Number of ticket"
                className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:text-sm"
              />
            </div>
          </div>

          <div className="relative mt-2">
            <ion-icon
              name="chatbubble-ellipses-outline"
              style={{
                fontSize: "1.4rem",
                position: "absolute",
                top: "30%",
                left: "3.5%",
                opacity: "0.3",
              }}
            ></ion-icon>

            <input
              type="text"
              placeholder="Message"
              className="outline-none w-full h-14 pl-10 pr-3 placeholder:text-sm md:pl-12 md:text-sm"
            />
          </div>

          <div className="flex items-center justify-center mt-6 flex-col md:flex-row md:justify-between">
            <button className="bg-orange px-7 py-3 text-white text-xs rounded-md items-center md:px-4 md:py-2 xs:px-2">
              Check Availabilty
            </button>

            <button className="bg-orange px-12 py-3 text-white text-xs rounded-md items-center mt-4 md:mt-0 md:px-5 md:py-2 xs:px-3">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <img src={TripImg} alt="trip-img" className="h-[42vh] mt-16 md:hidden" />
    </div>
  );
};

export default LandscapePlan;
