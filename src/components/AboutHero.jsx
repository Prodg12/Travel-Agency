import AboutImg from '../assets/about-img/about-img.png';
import Navbar from './Navbar';

const AboutHero = () => {
  return (
    <div style={{backgroundImage: `url(${AboutImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}  
      className='h-[90vh]'
    >

      <Navbar/>

      <div className='text-white flex items-center justify-center flex-col pt-20 md:pt-48'>
        <h6 className='text-lg font-medium sm:text-base'>Read</h6>

        <h1 className='font-[yesteryear] text-9xl lg:text-7xl md:text-6xl sm:text-5xl'>About Us</h1>
      </div>

    </div>
  )
}

export default AboutHero