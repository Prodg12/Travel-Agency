import { GalleryIcon} from "../components/Footericons";
import TripImg from "../assets/services-img/trip-img.png";
import Img1 from "../assets/landscape-img/img1.png";
import Img2 from "../assets/landscape-img/img2.png";
import Img3 from "../assets/landscape-img/img3.png";
import Img4 from "../assets/landscape-img/img4.png";
import Img5 from "../assets/landscape-img/img5.png";
import Img6 from "../assets/landscape-img/img6.png";
import Img7 from "../assets/landscape-img/img7.png";
import PalmTreeImg from "../assets/landscape-img/palm-tree-img.png";
import LandscapeNav from "./LandscapeNav";
import LandscapePlan from "./LandscapePlan";


const LandscapeGallery = () => {
  return (
    <section className="pb-8 flex justify-center relative -top-14">
      <div className="w-[70%] shadow-lg lg:w-full">
        <LandscapeNav/>

        <div className="flex justify-between px-6 pb-12 lg:px-12 lg:mt-16 md:flex-col-reverse sm:px-10 xs:px-8">
          <div className="w-[55%] relative lg:w-1/2 md:w-full md:mt-16">
            <div className="grid grid-cols-8 gap-4 gap-y-8 lg:gap-x-3 md:gap-y-2 md:gap-x-0 md:hidden">
              <div className="col-span-3 h-1 md:col-span-4 md:h-auto">
                <img src={Img1} alt="img1" />
              </div>

              <div className="col-span-5 row-span-3 md:row-span-0 md:col-span-4 md:h-[2vh]">
                <img src={Img4} alt="img4" className="h-[79vh]" />
              </div>

              <div className="col-span-3 h-1 md:col-span-4 md:h-auto">
                <img src={Img2} alt="img2" />
              </div>

              <div className="col-span-3 h-1 md:col-span-4 md:h-auto">
                <img src={Img3} alt="img3" />
              </div>

              <div className="col-span-5 md:col-span-4">
                <img src={Img5} alt="img3" className="h-[22.8vh]" />
              </div>

              <div className="col-span-3 md:col-span-4">
                <img src={Img6} alt="img3" />
              </div>

              <div className="col-span-8 h-1 md:col-span-8 md:h-auto">
                <img src={Img7} alt="img3" />
              </div>
            </div>

            <div className=" md:flex flex-col mb-[20rem] hidden">
              <div className="flex items-center justify-between mb-10 xs:flex-col">
                <div className="w-[48%] xs:w-full xs:mb-10">
                  <img src={Img1} alt="img1" className="w-full h-[37vh]" />
                </div>

                <div className="w-[48%] xs:w-full">
                  <img src={Img4} alt="img4" className="w-full h-[37vh]"  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-10 xs:flex-col">
                <div className="w-[48%] xs:w-full xs:mb-10">
                  <img src={Img2} alt="img2" className="w-full h-[37vh]" />
                </div>

                <div className="w-[48%] xs:w-full">
                  <img src={Img3} alt="img3" className="w-full h-[37vh]" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-10 xs:flex-col">
                <div className="w-[48%] xs:w-full xs:mb-10">
                  <img src={Img5} alt="img3" className="w-full h-[37vh]" />
                </div>

                <div className="w-[48%] xs:w-full">
                  <img src={Img6} alt="img3" className="w-full h-[37vh]" />
                </div>
              </div>

              <div className="w-full">
                <img src={Img7} alt="img3" className="w-full h-[37vh]" />
              </div>
            </div>

            <img src={PalmTreeImg} alt="palm-tree-img" className="w-[50%] absolute -left-6 bottom-0" />
          </div>

          <LandscapePlan/>
        </div>
      </div>
    </section>
  )
}

export default LandscapeGallery