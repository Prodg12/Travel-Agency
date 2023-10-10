import FlyEmirates from '../assets/home-img/fly-emirates-img.png';
import Trivago from '../assets/home-img/trivago-img.png';
import Airbnb from '../assets/home-img/airbnb-img.png';
import TurkishAirlines from '../assets/home-img/turkish-airlines-img.png';
import Swiss from '../assets/home-img/swiss-img.png';

const Brands = () => {
  return (
    <div className="grid grid-cols-10 gap-12 pl-16 py-12 bg-secondaryWhite md:pl-8 md:gap-8 sm:gap-2 xs:pl-4">
      <div className="col-span-2">
        <img src={FlyEmirates} alt="flyemirates-img" className="w-[7rem] lg:w-[5rem] md:w-[4rem] xs:w-[3rem]" />
      </div>

      <div className="col-span-2">
        <img src={Trivago} alt="Trivago-img" className="w-[7rem] lg:w-[5rem] md:w-[4rem] xs:w-[3rem]" />
      </div>

      <div className="col-span-2">
        <img src={Airbnb} alt="Airbnb-img" className="w-[7rem] lg:w-[5rem] md:w-[4rem] xs:w-[3rem]" />
      </div>

      <div className="col-span-2">
        <img src={TurkishAirlines} alt="TurkishAirlines-img" className="w-[7rem] lg:w-[5rem] md:w-[4rem] xs:w-[3rem]" />
      </div>

      <div className="col-span-2">
        <img src={Swiss} alt="Swiss-img" className="w-[7rem] lg:w-[5rem] md:w-[4rem] xs:w-[3rem]" />
      </div>
    </div>
  )
}

export default Brands