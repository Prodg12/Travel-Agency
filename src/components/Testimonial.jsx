import TestimonialBg from '../assets/home-img/testimonial-background-img.png';
import TravelConcepts from '../assets/home-img/icons/Travel-Concepts-img.png';
import TestifierImg from '../assets/home-img/icons/testifier.png';
import QuoteImg from '../assets/home-img/icons/quotes.png';
import SmallQuoteImg from '../assets/home-img/icons/small-quote-img.png';
import RightNavigationImg from '../assets/home-img/icons/right-navigation.png';
import LeftNavigationImg from '../assets/home-img/icons/left-navigation.png';

const Testimonial = () => {
  return (
    <div style={{backgroundImage: `url(${TestimonialBg})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
    }}    
      className='h-screen relative flex items-center justify-center lg:h-[120vh] md:h-[140vh]' 
    >
      <img src={TravelConcepts} alt="travel-img" className='absolute left-0 bottom-0 w-[13rem] md:w-[10rem] sm:w-[8rem] xs:w-[7rem]' />

      <div className='w-1/2 flex flex-col items-center justify-center mt-16 lg:mt-0'>
        <h5 className='text-orange font-semibold mb-1 md:text-sm sm:text-xs'>PROMOTION</h5>

        <h1 className='font-[volkhov] text-4xl text-navyBlue font-bold text-center leading-snug lg:hidden'>See What Our Clients Say <br /> About Us</h1>

        <h1 className='font-[volkhov] text-4xl text-navyBlue font-bold text-center leading-snug lg:text-3xl md:text-2xl sm:text-xl'>See What Our Clients Say About Us</h1>

        <div className='flex flex-col items-center justify-center text-center bg-white w-[80%] relative mt-20 rounded-xl lg:w-full'>
          <img src={RightNavigationImg} alt="right-navigation-img" className='w-24 absolute -left-12 md:w-20 md:-left-10 sm:w-16 sm:-left-9' />

          <img src={TestifierImg} alt="testifier-img" className='w-36 absolute -top-14 lg:w-32 md:w-28 md:-top-12 xs:w-24'/>

          <div className='w-[60%] pt-8 pb-3 mt-14 relative lg:w-[70%] md:w-[80%]'>
            <img src={QuoteImg} alt="quote-img" className='absolute w-12 top-3 -left-5 opacity-90 lg:w-10 lg:-left-1 lg:top-4 sm:w-8 sm:top-5 sm:-left-4 xs:w-7 xs:top-6' />

            <p className='text-sm text-center leading-relaxed sm:text-xs sm:leading-loose'>I can't thank the travell agency enough for making my dream vacation a reality. Their expertise and attention to detail ensured a seamless and unforgettable experience. Highly recommended!</p>

            <img src={SmallQuoteImg} alt="small-quote-img" className='absolute right-16 bottom-6 lg:right-0 xs:right-3' />
          </div>

          <h3 className='text-sm font-semibold mb-6 xs:text-[0.8rem]'>Christine Beckam - Designer</h3>

          <img src={LeftNavigationImg} alt="left-navigation-img" className='w-24 absolute -right-12 md:w-20 md:-right-10 sm:w-16 sm:-right-9' />
        </div>
      </div>

    </div>
  )
}

export default Testimonial