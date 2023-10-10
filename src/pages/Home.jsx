import React from 'react'
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Services from '../components/Services';
import Honeymoon from '../components/Honeymoon';
import Travelbookings from '../components/Travelbookings';
import Libertystatue from '../components/Libertystatue';
import Sightseeing from '../components/Sightseeing';
import Explore from '../components/Explore Section/Explore';
import Tourpackage from '../components/Tourpackage';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <main>  
      <Hero />

      <Brands/>

      <Services/>

      <Honeymoon/>

      <Travelbookings/>

      <Libertystatue/>

      <Sightseeing/>

      <Explore/>

      <Tourpackage/>

      <Testimonial/>
    </main>
  )
}

export default Home