import RomanticCouple from '../assets/home-img/romantic-couple-img.png';

const Honeymoon = () => {
  return (
    <div className="py-24 px-24 flex items-center justify-between lg:px-16 md:px-10 sm:py-16 sm:flex-col-reverse xs:px-8">
      <img src={RomanticCouple} alt="romantic-couple-img" className="w-[40%] sm:w-full" />

      <div className="w-1/2 sm:w-full sm:mb-10" >
        <h4 className="text-orange font-semibold tracking-wider md:text-sm xs:text-xs">Honeymoon Specials</h4>

        <h1 className="text-4xl font-bold font-[volkhov] text-navyBlue leading-snug lg:text-3xl md:text-2xl xs:text-xl">Our Romantic Tropical Destinations</h1>

        <p className="text-sm leading-normal mt-5">Escape to romantic paradise with our exquisite honeymoon specials. Indulge in luxury, cherish intimate moments, and create lifelong memories in breathtaking destinations tailored to your love story.</p>

        <button className="bg-orange mt-4 py-2 px-4 text-white text-xs rounded-lg border border-solid border-orange hover:bg-white
            hover:text-orange  font-semibold lg:px-2">View Packages</button>
      </div>
    </div>
  )
}

export default Honeymoon