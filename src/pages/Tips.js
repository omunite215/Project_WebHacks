import React from 'react';
import Navbar from '../components/Navbar.js';
import Carousel from '../components/Carousel.js';
import TipCards from '../components/TipCards.js';


function Tips() {

  return (
    <>
     <Navbar tipsActivityStatus="active border-bottom border-3 border-info rounded-0"/>
     <p className="fs-1 fw-bold text-center" id="pageTitleColor">Welcome to Tips!!</p>
    <Carousel/>
    <TipCards/>
   


    </>
  )
}

export default Tips 