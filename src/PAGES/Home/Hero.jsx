import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-orange-50 py-20 px-6">

     
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-orange-600">DOSO</span>
        </h1>
      </div>

      
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md text-gray-700 max-w-3xl text-sm md:text-base text-center">
          <MapPin className="text-orange-500" size={20} />
          <span>
            Shop No. 23, Near Stadium Market, Do Batti Choraha, Do Batti Road,
            Collectorate, Ratlam-457001, Madhya Pradesh
          </span>
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        <img
          src="/image/img1.jpg"
          alt="Delicious Dosa"
          className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
        />

        <p className="text-gray-700 text-lg leading-relaxed md:w-1/2">
          At <span className="font-semibold text-orange-600">DOSO</span>, we bring the true taste of South India straight to your plate. Our dosas are crafted with freshly prepared batter, cooked to golden perfection on a hot tawa, and served with rich chutneys and flavorful sambar. From crispy classics to creamy innovations, every bite delivers warmth, tradition, and unforgettable taste.
        </p>
      </div>

    
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
        <img
          src="/image/img2.webp"
          alt="Crispy Dosa"
          className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
        />

        <p className="text-gray-700 text-lg leading-relaxed md:w-1/2">
          At <span className="font-semibold text-orange-600">DOSO</span>, every dosa begins with a story — a story of tradition, family recipes, and the comforting aroma of a hot tawa. We believe food is not just about taste, but about memories created around every bite. Whether you're sharing moments with friends or enjoying a quiet meal alone, DOSO turns simple ingredients into warm, unforgettable experiences.
        </p>
      </div>

      
      <div className="text-center">
       
<Link
  to="/about"
  className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 active:scale-95 transition duration-300"
>
  Explore More
</Link>
      </div>

    </div>
  );
}
