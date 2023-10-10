import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ArrowImg from "../assets/home-img/icons/arrow-img.png";

const Navbar = () => {
  let links = [
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Services", link: "/services"},
    {name: "Landscapes", link: "/landscape"},
  ];
  let [open, setOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? '2px solid #DF6951' : 'none'
    }
  }

  return (
    <>
      <header className="flex items-center justify-between px-32 py-12 text-white xl:px-16 lg:px-12 md:hidden">
        <Link to="/" className="relative">
          <h1 className="text-2xl font-[volkhov] lg:text-xl">Travell</h1>
          <img src={ArrowImg} alt="arrow-img" className="w-20 absolute left-6 top-4" />
        </Link>

        <ul className="flex items-center gap-16 lg:gap-8 lg:text-sm text-white">
          <li>
            <NavLink to="/" style={navLinkStyles}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" style={navLinkStyles}>About</NavLink>
          </li>

          <li>
            <NavLink to="/services" style={navLinkStyles}>Services</NavLink>
          </li>

          <li>
            <NavLink to="/landscape" style={navLinkStyles}>Landscapes</NavLink>
          </li>
        </ul>

        <button className="px-5 py-2 bg-orange rounded text-sm lg:px-3">Get in Touch</button>
      </header>

      {/* Ipad & Mobile Navbar */}
      <nav className="px-10 py-5 bg-offWhite/50 backdrop-blur-md shadow fixed top-0 left-0 w-full z-20 hidden md:block xs:px-6">
        <div>
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl cursor-pointer relative">
              <h1 className="font-[volkhov]">Travell</h1>

              <img src={ArrowImg} alt="arrow-img" className="w-[3.8rem] absolute -right-5 top-4" />
            </Link>

            <div onClick={()=>setOpen(!open)} className="text-2xl cursor-pointer hidden md:block">
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          </div>

          <ul className={`flex items-center justify-center flex-col pb-12 absolute bg-offWhite/95 backdrop-blur-md z-[-1] top-[4.5rem] right-0 min-w-[70%] h-screen transition-all duration-500 ease-in sm:min-w-[100%] ${open ? 'right-50 opacity-100' : 'right-[-490px] opacity-0'}`}>
            {
              links.map((link) =>(
                <li key={link.name} className="text-xl my-3">
                  <NavLink to={link.link} className="text-gray-800 hover:text-gray-400 duration-500 text-lg xs:text-base" style={navLinkStyles}>{link.name}</NavLink>
                </li>
              ))
            }

            <button className="bg-orange text-white py-2 px-6 rounded mt-3 sm:px-3 sm:py-1">
              Get in touch
            </button>
          </ul>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
