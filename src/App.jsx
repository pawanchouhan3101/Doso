import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Homepage from './Component/Homepage'
import Aboutpage from './Component/Aboutpage';
import Menu from './Component/Menu';
import Conatct from './Component/Conatct';
import Contact from './Component/Conatct';
import ScrollToTop from './Component/Scrolltop';


function App() {
 
  return (
    <>
    <ScrollToTop/>
    <Routes>
      
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/menu" element={<Menu />} />
         <Route path="/contact" element={<Contact />} />
     
    </Routes>

     
    </>
  )
}

export default App
