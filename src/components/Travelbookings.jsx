import TravelImg from '../assets/home-img/Travel-illustration-img.png';
import DestinationIcon from '../assets/home-img/icons/destination-icon.png';
import AvailabilityIcon from '../assets/home-img/icons/availability-icon.png';
import GoIcon from '../assets/home-img/icons/Go-icon.png';

const Travelbookings = () => {
  return (
    <div className="flex justify-between py-24 px-28 lg:px-16 lg:flex-col sm:px-10 sm:py-16 xs:px-8">
      <div className='w-[40%] lg:w-full'>
        <h5 className='text-orange font-semibold mb-2 md:text-sm xs:text-xs'>Fast & Easy</h5>

        <h1 className='text-4xl font-[volkhov] font-bold text-navyBlue leading-snug mb-8 lg:text-3xl md:text-2xl xs:text-xl'>Get Your Favourite Resort Bookings</h1>

        <div className='flex mb-6'>
          <img src={DestinationIcon} alt="Destination-icon-img" className='w-10 h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 xs:w-6 xs:h-6' />

          <span className='ml-4'>
            <h6 className='font-bold text-navyBlue xs:text-sm'>Choose Destination</h6>

            <p className='text-sm w-[80%] xs:text-xs xs:mt-1 xs:w-full'>Crafting Your Ideal Getaway: We Help You Choose the Perfect Destination. </p>
          </span>
        </div>

        <div className='flex mb-6'>
          <img src={AvailabilityIcon} alt="Destination-icon-img" className='w-10 h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 xs:w-6 xs:h-6' />

          <span className='ml-4'>
            <h6 className='font-bold text-navyBlue xs:text-sm'>Check Avaliability</h6>

            <p className='text-sm w-[80%] xs:text-xs xs:mt-1 xs:w-full'>Verify Destination Availability for Your Upcoming Adventure - Plan Now! </p>
          </span>
        </div>

        <div className='flex'>
          <img src={GoIcon} alt="Destination-icon-img" className='w-10 h-10 lg:w-9 lg:h-9 md:w-8 md:h-8 xs:w-6 xs:h-6' />

          <span className='ml-4'>
            <h6 className='font-bold text-navyBlue xs:text-sm'>Let's Go</h6>

            <p className='text-sm w-[80%] xs:text-xs xs:mt-1 xs:w-full'>Explore Enchanting Destinations: Your Journey, Our Expertise, Unforgettable Memories Await. </p>
          </span>
        </div>
      </div>

      <img src={TravelImg} alt="Eifeltower-img" className='w-1/2 lg:w-full' />
    </div>
  )
}

export default Travelbookings