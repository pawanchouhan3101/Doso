import React from "react";
import { Link } from "react-router-dom";

export default function Menudiv() {
  const menuItems = [
    {
      id: 1,
      name: "Masala Dosa",
      price: 90,
      image: "/image/masaldosa.png",
      description:
        "Crispy golden dosa filled with spiced potato masala, served with chutney & sambar.",
    },
    {
      id: 2,
      name: "Idli",
      price: 70,
      image: "/image/idli.png",
      description:
        "Soft and fluffy steamed rice cakes served with coconut chutney and hot sambar.",
    },
    {
      id: 3,
      name: "Vada",
      price: 70,
      image: "/image/vada.png",
      description:
        "Crispy deep-fried lentil donuts with authentic South Indian flavors.",
    },
    {
      id: 4,
      name: "Uttapam",
      price: 100,
      image: "/image/uttapum.png",
      description:
        "Thick and soft pancake topped with fresh vegetables and mild spices.",
    },
    {
      id: 5,
      name: "Fries",
      price: 70,
      image: "/image/fries.png",
      description: "Crispy golden potato fries served with tomato ketchup.",
    },
    {
      id: 6,
      name: "Maggie",
      price: 70,
      image: "/image/maggie.png",
      description:
        "Hot and tasty masala Maggie prepared with fresh vegetables.",
    },
    {
      id: 7,
      name: " Cheese Masala Dosa",
      price: 120,
      image: "/image/masaldosa.png",
      description:
        "Crispy golden dosa filled with spiced potato masala, served with chutney & sambar.",
    },
    {
      id: 8,
      name: " Peri peri Masala Dosa",
      price: 140,
      image: "/image/masaldosa.png",
      description:
        "Crispy golden dosa filled with spiced potato masala, served with chutney & sambar.",
    },
  ];

  return (
    <div className="bg-orange-50 min-h-screen py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Our <span className="text-orange-600">Menu</span>
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>

              <p className="text-orange-600 font-bold mb-2">₹{item.price}</p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
  <a
                        href={`https://wa.me/9753034772?text=Hello,%20I%20want%20to%20order%20${item.name}%20for%20₹${item.price}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                Order Now
              </button></a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/menu"
          className="px-8 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-300 inline-block"
        >
          Explore Full Menu
        </Link>
      </div>
    </div>
  );
}
