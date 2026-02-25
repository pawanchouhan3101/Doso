import { PhoneCall } from "lucide-react";
import React from "react";

export default function Owner() {
  const teamMembers = [
    {
      name: "Shreyansh Jain",
      contact: "9876543210",
      image: "/image/download.jpg",
      role: "Owner",
      description:
        "Visionary leader with strong business strategy and 10+ years of experience in hospitality industry.",
    },
    {
      name: "Pawan Chouhan",
      contact: "9753034772",
      image: "/image/download.jpg",
      role: "Manager",
      description:
        "Handles daily operations efficiently and ensures smooth coordination between staff and customers.",
    },
    {
      name: "Karan",
      contact: "9988776655",
      image: "/image/download.jpg",
      role: "Chef",
      description:
        "Expert in multi-cuisine dishes with a passion for creating unique and delicious recipes.",
    },
    {
      name: "Bhupesh",
      contact: "8899776655",
      image: "/image/download.jpg",
      role: "Chef",
      description:
        "Specialist in traditional flavors and presentation with 5+ years of kitchen experience.",
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case "Owner":
        return "bg-purple-600";
      case "Manager":
        return "bg-blue-600";
      case "Chef":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6">
      
    
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Professional Team
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
          Dedicated people behind our success
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
          >
          
            <div className="relative w-32 h-32 mx-auto">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-400 group-hover:border-purple-500 transition duration-500"
              />
            </div>

       
            <h2 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-orange-500 transition">
              {member.name}
            </h2>

       
            <span
              className={`inline-block mt-3 px-4 py-1 text-sm font-medium text-white rounded-full ${getRoleColor(
                member.role
              )}`}
            >
              {member.role}
            </span>

           
            <p className="text-gray-500 text-sm mt-4 leading-relaxed px-2">
              {member.description}
            </p>

           
            <div className="flex items-center justify-center gap-2 mt-5 text-gray-600 group-hover:text-gray-900 transition">
              <PhoneCall size={16} />
              <span className="text-sm">{member.contact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}