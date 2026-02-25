import React from 'react'
import Navbar from "../PAGES/Home/Navbar";
import Home from "../PAGES/Home/Home";
import Hero from "../PAGES/Home/Hero";
import Menudiv from "../PAGES/Home/Menudiv";
import Contactdiv from "../PAGES/Home/Contactdiv";
import Footer from "../PAGES/Home/Footer";

export default function Homepage() {
  return (
    <div>
         <Navbar/>
    <Home/>
    <Hero/>
    <Menudiv/>
<Contactdiv/>
<Footer/>
      
    </div>
  )
}
