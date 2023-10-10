import { GalleryIcon} from "../components/Footericons";
import TripImg from "../assets/services-img/trip-img.png";
import MapImg from "../assets/landscape-img/map-img.png";
import LocationIcon from "../assets/landscape-img/icons/location-icon.png";
import LocationIcon2 from "../assets/landscape-img/icons/location-icon2.png";
import PalmTreeImg from "../assets/landscape-img/palm-tree-img.png";
import LandscapeNav from "./LandscapeNav";
import LandscapePlan from "./LandscapePlan";

const LandscapeLocation = () => {
  return (
    <section className="pb-8 flex justify-center relative -top-14">
      <div className="w-[70%] shadow-lg lg:w-full">
        <LandscapeNav/>

        <div className="flex justify-between px-6 lg:px-12 lg:mt-16 md:flex-col-reverse sm:px-10 xs:px-8">
          <div className="w-[55%] relative lg:w-1/2 md:w-full md:mt-16">
            <h1 className="text-2xl font-semibold font-[volkhov] text-navyBlue mb-3">Tour Plan</h1>

            <p className="text-navyBlue text-sm leading-relaxed">Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium</p>

            <div className="mt-10 relative md:w-1/2">
              <img src={MapImg} alt="map-img" />

              <img src={LocationIcon} alt="location-icon-img" className="w-7 absolute right-3 bottom-6" />

              <img src={LocationIcon2} alt="location-icon2-img" className="w-10 absolute right-2 top-3" />
            </div>

            <p className="mt-7 text-sm leading-relaxed">Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil.</p>

            <p className="mt-7 text-sm leading-relaxed mb-[18rem]">Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.</p>

            <img src={PalmTreeImg} alt="palm-tree-img" className="w-[50%] absolute -left-6 bottom-0" />
          </div>

          <LandscapePlan/>
        </div>
      </div>
    </section>
  )
}

export default LandscapeLocation