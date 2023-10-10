import TourGuide from '../assets/home-img/icons/tour-guide-img.png';
import Travelling from '../assets/home-img/icons/travelling-img.png';
import Hands from '../assets/home-img/icons/hands-img.png';
import MedicalTeam from '../assets/home-img/icons/medical-team-img.png';
import RectangleImg from '../assets/home-img/Rectangle-img.png';
import RectangleImg2 from '../assets/home-img/Rectangle-img2.png';

const Services = () => {
  return (
    <div className="py-24 px-32 lg:px-16 md:py-16 sm:px-10">
      <h5 className='text-center text-base text-orange font-semibold md:text-sm xs:text-xs'>CATEGORY</h5>

      <h2 className="text-3xl text-center text-navyBlue font-bold font-[volkhov] mt-5 md:text-2xl xs:text-xl xs:mt-3">We Offer Best Services</h2>

      <div className="grid grid-cols-12 gap-12 mt-20 lg:gap-10 lg:gap-y-16 sm:gap-4 sm:gap-y-16 xs:mt-12">
        <div className="col-span-3 flex flex-col items-center border border-solid py-12 px-3
         rounded-2xl relative bg-white lg:col-span-6 sm:px-2 xs:col-span-12">
          <img src={TourGuide} alt="tour-guide-img" className="w-14 mb-6 sm:w-10" />

          <h2 className="mb-4 text-navyBlue font-bold">Guided Tours</h2>

          <p className="text-center text-[0.9rem] sm:text-[0.8rem]">Discover the World with Expert Guided Tours: Unforgettable Experiences Awaits!.</p>

          <img src={RectangleImg} alt="rectangle-img" className="w-16 absolute -bottom-5 -left-6 -z-10" />
        </div>

        <div className="col-span-3 flex flex-col items-center border border-solid py-12 px-3 rounded-2xl lg:col-span-6 sm:px-2 xs:col-span-12">
          <img src={Travelling} alt="travelling-img" className="mb-6 w-14 sm:w-10" />

          <h2 className="mb-4 text-navyBlue font-bold">Best Flight Options</h2>

          <p className="text-center text-[0.9rem] sm:text-[0.8rem]">Effortless Flight Booking: Your Journey, Your Choice, Our Expertise.</p>
        </div>

        <div className="col-span-3 flex flex-col items-center border border-solid py-12 px-3 rounded-2xl lg:col-span-6 sm:px-2 xs:col-span-12">
          <img src={Hands} alt="hands-img" className="w-14 mb-6 sm:w-10"/>

          <h2 className="mb-4 text-navyBlue font-bold">Religious Tours</h2>

          <p className="text-center text-[0.9rem] sm:text-[0.8rem]">Embark on a spiritual journey of enlightenment with our religious tours.</p>
        </div>

        <div className="col-span-3 flex flex-col items-center border border-solid py-12 px-3 rounded-2xl relative bg-white lg:col-span-6 sm:px-2 xs:col-span-12">
          <img src={MedicalTeam} alt="medical-team-img" className="w-14 mb-6 sm:w-10"/>

          <h2 className="mb-4 text-navyBlue font-bold">Medical Insurance</h2>

          <p className="text-center text-[0.9rem] sm:text-[0.8rem]">Health Coverage Across Borders: Tailored Medical Insurance for Worry-Free Travels.</p>

          <img src={RectangleImg2} alt="rectangle-img" className="w-16 absolute -bottom-5 -right-6 -z-10" />
        </div>
      </div>
    </div>
  )
}

export default Services