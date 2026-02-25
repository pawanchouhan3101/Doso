import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Contactdiv() {
  return (
    <div className="bg-orange-400 py-8 px-4">
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-6">
        Contact <span className="text-white">DOSO</span>
      </h1>

     
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-center  text-white text-sm md:text-xl leading-relaxed px-6 py-5 ">
          We would love to hear from you! Whether you have a question about our
          menu, special offers, or catering services, feel free to reach out.
          Our team is always ready to assist you with fresh flavors and warm hospitality.
        </p>
      </div>

    
      <div className="max-w-md mx-auto text-center">
        
       

        <Link to="/contact" className="mt-6 flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-white hover:text-orange-600  border-orange-600 transition duration-300 shadow-md">
          <PhoneCall size={18} />
          Contact Us
        </Link>

      </div>
    </div>
  );
}