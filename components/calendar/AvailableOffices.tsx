"use client";

import Image from "next/image";
import React from "react";

interface AvailableOfficesProps {
  selectedDate: string;
  isVisible: boolean;
}

const AvailableOffices: React.FC<AvailableOfficesProps> = ({
  selectedDate,
  isVisible,
}) => {
  // Sample office data
  const officePackages = [
    {
      id: "01",
      title: "Package 01",
      description: "Package 01 Description",
      seats: 5,
      image: "/api/placeholder/300/200",
    },
    {
      id: "02",
      title: "Package 02",
      description: "Package 02 Description",
      seats: 10,
      image: "/api/placeholder/300/200",
    },
    {
      id: "03",
      title: "Package 03",
      description: "Package 03 Description",
      seats: 15,
      image: "/api/placeholder/300/200",
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="mt-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Available Offices on {selectedDate}:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officePackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="flex">
              <div className="w-1/3">
                <Image
                  src={pkg.image}
                  alt={`Office Package ${pkg.id}`}
                  className="h-full w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-2/3 p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Package {pkg.id}
                </h3>
                <p className="text-gray-600 mt-1">{pkg.description}</p>
                <p className="text-gray-700 mt-2">Seats: {pkg.seats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableOffices;
