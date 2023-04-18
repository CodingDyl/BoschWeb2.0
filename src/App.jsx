import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-car-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App
