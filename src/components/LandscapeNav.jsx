import { Link } from 'react-router-dom'
import { GalleryIcon } from './Footericons'

const LandscapeNav = () => {
  return (
    <div className="flex items-center justify-between bg-lighterGray py-12 px-16 mb-8 sm:px-3 xs:px-2">
            <Link to="#" className="flex items-center text-base xs:flex-col xs:text-sm">
              <ion-icon
                name="information-circle-outline"
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade">Information</p>
            </Link>

            <Link to="#" className="flex items-center text-base xs:flex-col xs:text-sm">
              <ion-icon
                name="calendar-clear-outline"
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade">Tour Plan</p>
            </Link>

            <Link to="#" className="flex items-center text-base xs:flex-col xs:text-sm">
              <ion-icon
                name="location-outline"
              ></ion-icon>

              <p className="ml-2 font-semibold text-darkShade">Location</p>
            </Link>

            <Link to="#" className="flex items-center text-base xs:flex-col xs:text-sm">
              <GalleryIcon className="w-5 xs:w-4" />

              <p className="ml-2 font-semibold text-darkShade">Gallery</p>
            </Link>
          </div>
  )
}

export default LandscapeNav