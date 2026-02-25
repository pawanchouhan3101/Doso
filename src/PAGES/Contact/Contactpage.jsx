import { PhoneCall, Mail, MapPin } from "lucide-react";
import React from "react";

export default function Contactpage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-200 via-white to-orange-100 px-6 py-20">

     
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

       
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent leading-tight">
            Let’s Talk 👋
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We'd love to hear from you. Whether you have a question about our
            menu, reservations, or anything else — our team is ready to help.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-6 p-6 rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl hover:scale-105 transition duration-300">
              <div className="bg-orange-500 p-4 rounded-full shadow-lg">
                <PhoneCall className="text-white" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl hover:scale-105 transition duration-300">
              <div className="bg-orange-500 p-4 rounded-full shadow-lg">
                <Mail className="text-white" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">info@yourrestaurant.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl backdrop-blur-lg bg-white/60 shadow-xl hover:scale-105 transition duration-300">
              <div className="bg-orange-500 p-4 rounded-full shadow-lg">
                <MapPin className="text-white" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600"> DOSO,Ratlam</p>
              </div>
            </div>

          </div>
        </div>

      
        <div className="relative backdrop-blur-2xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Send Message 
          </h3>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300 shadow-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300 shadow-sm"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300 shadow-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg hover:shadow-orange-400/50 hover:scale-105 transition duration-300"
            >
              Send Message 
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}