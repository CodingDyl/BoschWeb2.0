import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Booking from './components/booking/Booking';


const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-car-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <div className="bg-service-pattern bg-cover bg-no-repeat bg-center opacity-80" id={`services`}>
        <Services />
        </div>
        <Feedback />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
