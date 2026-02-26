import React, { useState } from "react";
import { Menu, X, Pizza } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

       
        <div className="flex items-center gap-2 text-white">
          <Pizza size={28} />
          <a href="/" className="text-2xl font-bold">DOSO</a>
        </div>

       
       <div className="hidden md:flex gap-8 text-white font-medium">
  <Link to="/" className="hover:text-black transition">Home</Link>
  <Link to="/about" className="hover:text-black transition">About</Link>
  <Link to="/menu" className="hover:text-black transition">Menu</Link>
  <Link to="/contact" className="hover:text-black transition">Contact</Link>
</div>

        
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-orange-400 px-6 py-4 flex flex-col gap-4 text-white font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
