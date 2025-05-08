"use client";

import React, { useState } from "react";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarGrid from "@/components/calendar/CalendarGrid";
import AvailableOffices from "@/components/calendar/AvailableOffices";

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState("May");
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showOffices, setShowOffices] = useState(false);

  // Sample data for calendar dates with availability
  const availabilityData: Record<string, { available: number }> = {
    8: { available: 2 },
    9: { available: 2 },
    10: { available: 2 },
    11: { available: 3 },
    12: { available: 3 },
    13: { available: 3 },
    14: { available: 3 },
    15: { available: 3 },
    16: { available: 3 },
    17: { available: 3 },
    18: { available: 3 },
    19: { available: 3 },
    20: { available: 3 },
    21: { available: 3 },
    22: { available: 3 },
    23: { available: 3 },
    24: { available: 3 },
    25: { available: 3 },
    26: { available: 3 },
    27: { available: 3 },
    28: { available: 3 },
    29: { available: 3 },
    30: { available: 3 },
    31: { available: 3 },
  };

  const handleDateClick = (day: any, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;

    const formattedDate = `${currentMonth} ${day}st, ${currentYear}`;
    setSelectedDate(formattedDate);
    setShowOffices(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Calendar Controls and Header */}
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          setCurrentMonth={setCurrentMonth}
          setCurrentYear={setCurrentYear}
        />

        {/* Calendar Grid */}
        <CalendarGrid
          currentMonth={currentMonth}
          currentYear={currentYear}
          availabilityData={availabilityData}
          selectedDate={selectedDate}
          handleDateClick={handleDateClick}
        />
      </div>

      {/* Available Offices Section */}
      <AvailableOffices
        selectedDate={selectedDate || ""}
        isVisible={showOffices}
      />
    </div>
  );
};

export default CalendarView;
