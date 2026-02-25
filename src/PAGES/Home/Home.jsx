import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

     
      <video
        src="/image/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

     

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-2xl">
          DOSO
        </h1>

       

        <h3 className="mt-35 text-base md:text-2xl max-w-xl text-gray-300">
             Dosa Dreams Meet Soft Cream <br />
          Delicious food delivered fresh to your doorstep with authentic taste.
        </h3>

        <Link to='https://wa.me/9753034772' target="_blank" className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95">
          Order Now
        </Link >

      </div>

    </div>
  );
}
