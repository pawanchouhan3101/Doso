import { PhoneCall, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-700 pt-12 pb-6 px-6 border-t border-orange-200">
      
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            DOSO <span className="text-orange-600">Restaurant</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Serving delicious South Indian flavors with love and authenticity.
            Fresh ingredients, warm hospitality, and unforgettable taste.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Contact Info
          </h3>

          <a
            href="tel:+912345678346"
            className="flex items-center gap-3 mb-3 text-gray-600 hover:text-orange-600 transition"
          >
            <PhoneCall size={18} className="text-orange-600" />
            +91-2345678346
          </a>

          <a
            href="mailto:info@doso.com"
            className="flex items-center gap-3 mb-3 text-gray-600 hover:text-orange-600 transition"
          >
            <Mail size={18} className="text-orange-600" />
            info@doso.com
          </a>

          <div className="flex items-center gap-3 text-gray-600">
            <MapPin size={18} className="text-orange-600" />
            2Batti, Ratlam, M.P
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-orange-600 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-orange-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DOSO Restaurant. All Rights Reserved.
      </div>

    </footer>
  );
}