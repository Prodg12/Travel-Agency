import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Landscape from './pages/Landscape';
import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>

      <main>
        <Routes>

          <Route path="/" Component={Home} />

          <Route path="/about" Component={About} />

          <Route path="/services" Component={Services} />

          <Route path="/landscape" Component={Landscape} />

        </Routes>

        <ScrollToTop/>

        <Footer/>
      </main>
    </>
  )
}

export default App