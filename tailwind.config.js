/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange': '#DF6951',
      'white': '#ffffff',
      'offWhite': '#F3F3F3',
      'secondaryWhite': '#F7F7F7',
      'navyBlue': '#181E4B',
      'gray': '#7D7D7D',
      'lightGray': '#EEEEFF',
      'grayShade': '#E5E5EA',
      'lighterGray': '#F8F8F8',
      'dark': '#2F2F2F',
      'darkShade': '#343434',
      'gold': '#FFBA0A',
      'purple': '#757095'
    },

      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
    
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}