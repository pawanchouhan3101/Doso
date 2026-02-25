import React, { useRef, useState } from "react";
import { menuData } from "../../Component/Data";

export default function Menu() {
  const sectionRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState(null);

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    sectionRefs.current[category]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* 🔥 Sticky Category Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-orange-200">
        <div className="overflow-x-auto whitespace-nowrap px-4 py-4">
          <div className="flex gap-20">
            {menuData.map((section) => (
              <button
                key={section.category}
                onClick={() => scrollToCategory(section.category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm
                  ${
                    activeCategory === section.category
                      ? "bg-orange-500 text-white scale-105 shadow-lg"
                      : "bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white hover:scale-105"
                  }`}
              >
                {section.category}
              </button>
            ))}
          </div>
        </div>
      </div>

   
      <div className="py-14 px-6 max-w-7xl mx-auto">
        {menuData.map((section) => (
          <div
            key={section.category}
            ref={(el) => (sectionRefs.current[section.category] = el)}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-10 text-center relative">
              {section.category}
              <span className="block w-24 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></span>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  
              
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

               
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                      {item.name}
                    </h3>

                 
                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        ₹{item.price}
                      </span>

                      <a
                        href={`https://wa.me/9753034772?text=Hello,%20I%20want%20to%20order%20${item.name}%20for%20₹${item.price}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-orange-600 transition">
                          Order
                        </button>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}