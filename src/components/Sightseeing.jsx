import EifelTower from '../assets/home-img/Eifel-tower-img.png';
import Destination1 from '../assets/home-img/Destination 1.png';
import Destination2 from '../assets/home-img/Destination 2.png';
import Destination3 from '../assets/home-img/Destination 3.png';
import Destination4 from '../assets/home-img/Destination 4.png';

const Sightseeing = () => {
  return (
    <div className="py-24 pt-40 px-28 flex justify-between relative lg:px-12 md:px-10 sm:py-20 sm:flex-col xs:px-8">
      <div className='sm:w-full mb-12'>
        <h5 className='text-orange font-semibold md:text-sm'>Promotion</h5>

        <h1 className='text-4xl font-[volkhov] font-bold text-navyBlue w-[65%] leading-snug lg:text-3xl lg:w-[85%] md:text-2xl'>We Provide You Best Europe Sightseeing Tours</h1>

        <p className='w-[68%] text-sm leading-normal mt-2 lg:w-[80%] sm:w-full'>
        Immerse yourself in awe-inspiring sightseeing experiences through our travel agency. Our expertly curated guided tours offer the chance to explore iconic landmarks and discover the hidden gems of your chosen destination.
        </p>

        <button className='bg-orange mt-6 py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
            hover:text-orange font-semibold'>View Packages</button>
      </div>

      <img src={EifelTower} alt="eifel-tower-img" className='w-[35%] sm:w-full' />

      <div className='grid grid-cols-8 gap-16 absolute bottom-28 left-45 lg:hidden'>
        <div className='col-span-2'>
          <img src={Destination1} alt="destination1-img" className='w-40' />
        </div>

        <div className='col-span-2'>
          <img src={Destination2} alt="destination1-img" className='w-40' />
        </div>

        <div className='col-span-2'>
          <img src={Destination3} alt="destination1-img" className='w-40' />
        </div>

        <div className='col-span-2'>
          <img src={Destination4} alt="destination1-img" className='w-40' />
        </div>
      </div>
    </div>
  );
};

export default Sightseeing;
