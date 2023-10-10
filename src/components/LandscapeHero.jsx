import LandscapeImg from '../assets/landscape-img/landscape-img.png';
import Navbar from './Navbar';

const LandscapeHero = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${LandscapeImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
    
      className='h-[90vh]'
    >
      <Navbar/>

      <div className='text-offWhite flex items-center justify-center flex-col pt-20 md:pt-44'>
        <h6 className='text-lg font-medium mb-4'>Explore</h6>

        <h1 className='font-[yesteryear] text-9xl lg:text-7xl md:text-6xl sm:text-5xl'>Landscapes</h1>
      </div>

    </div>
  )
}

export default LandscapeHero