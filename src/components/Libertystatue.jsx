import LibertyImg from '../assets/home-img/liberty-statue-img.png';
import LineImg from '../assets/home-img/icons/Line-img.png';

const Libertystatue = () => {
  return (
    <div style={{backgroundImage: `url(${LibertyImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
    }}
    className='h-[42vh] flex items-center pl-60 md:pl-44 sm:pl-24 xs:pl-16'
    >
     <div className='mt-5 relative'>
        <h1 className='text-3xl font-[volkhov] text-white sm:text-2xl'>
          Let's Make Your <br /> Next Holiday Amazing
        </h1>

        <img src={LineImg} alt="line-img" className='w-36 absolute top-18 -right-2 xs:w-28' />
      </div> 
    </div>
  )
}

export default Libertystatue