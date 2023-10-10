import { GalleryIcon} from "../components/Footericons";
import TripImg from "../assets/services-img/trip-img.png";
import LandscapeNav from "./LandscapeNav";
import LandscapePlan from "./LandscapePlan";

const LandscapeTour = () => {
  return (
    <section className="pb-8 flex justify-center relative -top-14">
      <div className="w-[70%] shadow-lg lg:w-full">
        <LandscapeNav/>

        <div className="flex justify-between px-6 pb-12 lg:px-12 lg:mt-16 md:flex-col-reverse sm:px-10 xs:px-8">
          <div className="w-[60%] lg:w-1/2 md:w-full md:mt-16">
            <h1 className="text-2xl font-semibold font-[volkhov] text-navyBlue mb-3">Tour Plan</h1>

            <div>
              <div className="mb-12">
                <h3 className="text-navyBlue font-semibold mb-2">Day 1: Departure</h3>

                <p className="text-sm text-navyBlue mb-4">Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>

                <span>
                  <ul className="list-disc ml-6 text-navyBlue text-sm">
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                  </ul>
                </span>
              </div>

              <div className="mb-12">
                <h3 className="text-navyBlue font-semibold mb-2">Day 2: Visiting Zurich, Geneva and Zermatt</h3>

                <p className="text-sm text-navyBlue mb-4">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>

                <span>
                  <ul className="list-disc ml-6 text-navyBlue text-sm">
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                  </ul>
                </span>
              </div>

              <div className="mb-12">
                <h3 className="text-navyBlue font-semibold mb-2">Day 3: Rest</h3>

                <p className="text-sm text-navyBlue mb-4">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>

                <span>
                  <ul className="list-disc ml-6 text-navyBlue text-sm">
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                  </ul>
                </span>
              </div>

              <div className="mb-12">
                <h3 className="text-navyBlue font-semibold mb-2">Day 4: Historical Tour</h3>

                <p className="text-sm text-navyBlue mb-4">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>

                <span>
                  <ul className="list-disc ml-6 text-navyBlue text-sm">
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                    <li className="mb-3 font-medium">5 Star Accommodation</li>
                    <li className="mb-3 font-medium">Breakfast</li>
                  </ul>
                </span>
              </div>

              <div className="mb-12">
                <h3 className="text-navyBlue font-semibold mb-2">Day 5: Return</h3>

                <p className="text-sm text-navyBlue mb-4">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
              </div>
            </div>
          </div>

          <LandscapePlan/>
        </div>
      </div>
    </section>
  );
};

export default LandscapeTour;
