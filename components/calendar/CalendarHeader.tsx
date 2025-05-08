"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight, FaCalendarDay } from "react-icons/fa";
import MonthYearSelector from "./MonthYearSelector";

interface CalendarHeaderProps {
  currentMonth: string;
  currentYear: number;
  setCurrentMonth: (month: string) => void;
  setCurrentYear: (year: number) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear,
}) => {
  return (
    <>
      {/* Calendar Header Controls */}
      <div className="p-4 md:p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <MonthYearSelector
            currentMonth={currentMonth}
            currentYear={currentYear}
            setCurrentMonth={setCurrentMonth}
            setCurrentYear={setCurrentYear}
          />

          <div className="flex space-x-2">
            <button className="bg-[#5995fd] text-white px-4 py-2 rounded-md hover:bg-[#4d84e2] transition">
              Today
            </button>
            <button className="bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 transition">
              <FaChevronLeft />
            </button>
            <button className="bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Month Title */}
      <div className="px-4 py-3 bg-[#5995fd] text-white flex items-center">
        <FaCalendarDay className="mr-2" />
        <h2 className="text-xl font-bold">
          {currentMonth} {currentYear}
        </h2>
      </div>
    </>
  );
};

export default CalendarHeader;
