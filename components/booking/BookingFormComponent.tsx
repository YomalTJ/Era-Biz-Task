"use client";

import React, { useState } from "react";
import PackageSelector from "./PackageSelector";
import DateRangeSelector from "./DateRangeSelector";

const BookingFormComponent = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCheckAvailability = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({
      selectedPackage,
      startDate,
      endDate,
    });
  };

  return (
    <form onSubmit={handleCheckAvailability}>
      {/* Package Selection */}
      <PackageSelector
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
      />

      {/* Date Range Selection */}
      <DateRangeSelector
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <button
        type="submit"
        className="w-full p-4 bg-[#5995fd] text-white text-lg font-medium rounded-md hover:bg-[#4d84e2] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4d84e2]"
      >
        Check Availability
      </button>
    </form>
  );
};

export default BookingFormComponent;
