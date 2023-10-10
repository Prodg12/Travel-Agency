import Arrow from "../assets/home-img/icons/arrow-img.png";
import FooterImg from "../assets/home-img/icons/Footer img.png";
import { LinkedinIcon, InstagramIcon, TwitterIcon, FacebookIcon } from "./Footericons";

const Footer = () => {
  return (
    <footer className="pt-24 pb-10 px-20 relative lg:px-12 sm:px-10 xs:px-8">
      <img
        src={FooterImg}
        alt="footer-img"
        className="w-[30%] absolute right-0 top-0 sm:w-[35%] xs:hidden"
      />

      <div className="grid grid-cols-10 gap-12 sm:text-center xs:gap-4 xs:gap-y-12">
        <div className="relative col-span-2 lg:col-span-4 sm:col-span-10 xs:col-span-10">
          <h2 className="text-2xl font-['volkhov'] font-semibold text-navyBlue lg:text-xl">
            Travell
          </h2>

          <img
            src={Arrow}
            alt="arrow-img"
            className="w-16 absolute top-5 left-8 lg:w-12 lg:left-10 lg:top-4 sm:left-56 xs:w-10 xs:left-44"
          />

          <p className="mt-6 text-[0.8rem] w-[90%] text-purple sm:w-full xs:text-xs">
            Travel helps companies manage payments easily.
          </p>

          <div className="flex items-center mt-4 sm:justify-center">
            <LinkedinIcon className="w-4 xs:w-3" />

            <InstagramIcon className="w-4 ml-3 xs:w-3" />

            <TwitterIcon className="w-4 ml-3 xs:w-3" />

            <FacebookIcon className="w-4 ml-3 xs:w-3" />
          </div>
        </div>

        <div className="col-span-2 ml-6 lg:col-span-3 sm:col-span-10 sm:ml-0 xs:col-span-10">
          <h4 className="text-navyBlue font-semibold mb-4">Company</h4>

          <ul>
            <li className="mb-2 text-sm">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Careers</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3 sm:col-span-10 xs:col-span-10">
          <h4 className="text-navyBlue font-semibold mb-4">Company</h4>

          <ul>
            <li className="mb-2 text-sm">
              <a href="#">Maldives</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Los Angeles</a>
            </li>
            <li className="mb-2 text-sm">
              <a href="#">Las Vegas</a>
            </li>
            <li className="text-sm">
              <a href="#">Torronto</a>
            </li>
          </ul>
        </div>

        <div className="col-span-4 lg:col-span-7 sm:col-span-10 xs:col-span-10">
          <h2 className="text-navyBlue font-semibold mb-4">
            Join Our Newsletter
          </h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Your email address"
              className="border border-solid border-lightGray px-3 pr-24 py-3 text-sm outline-none placeholder:text-xs w-11/12 bg-lightGray rounded lg:py-2 xs:w-full"
            />

            <button className="bg-orange py-[0.9rem] px-4 text-xs text-white rounded absolute right-[8%] top-0 lg:py-[0.7rem] sm:right-0">
              Subscribe
            </button>
          </div>

          <p className="text-xs mt-4 w-2/3 leading-relaxed text-navyBlue sm:w-full sm:mt-8">
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>

      <hr className="text-grayShade mt-16" />

      <p className="text-center mt-8 text-xs text-navyBlue font-medium">
        Copyright @ Pro-Nation 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
