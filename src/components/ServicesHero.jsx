import ServiceImg from '../assets/services-img/services-img.png';
import Navbar from './Navbar';

const ServicesHero = () => {
  return (
    <div style={{ backgroundImage: `url(${ServiceImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
    
      className='h-[90vh]'
    >
      <Navbar/>

      <div className='text-white flex items-center justify-center flex-col pt-12 md:pt-36'>
        <h6 className='text-lg font-medium mb-4'>Search tour</h6>

        <h1 className='font-[yesteryear] text-9xl lg:text-7xl md:text-6xl sm:text-5xl'>Travel With Us</h1>
      </div>

    </div>
  )
}

export default ServicesHero