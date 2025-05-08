"use client";

import React from "react";
import CalendarDay from "./CalendarDay";

interface CalendarGridProps {
  currentMonth: string;
  currentYear: number;
  availabilityData: Record<string, { available: number }>;
  selectedDate: string | null;
  handleDateClick: (day: number, isCurrentMonth: boolean) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  currentYear,
  availabilityData,
  selectedDate,
  handleDateClick,
}) => {
  const prevMonthDates = [28, 29, 30];
  const nextMonthDate = 1;

  return (
    <div className="calendar-grid rounded-lg overflow-hidden shadow-md bg-gray-900 text-white">
      {/* Day Headers */}
      <div className="grid grid-cols-7 text-center bg-gray-800">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <div
            key={index}
            className="py-3 font-semibold text-gray-300 border border-gray-700 rounded"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 bg-gray-900">
        {prevMonthDates.map((day) => (
          <div
            key={`prev-${day}`}
            className="p-2 border border-gray-700 rounded"
          >
            <CalendarDay
              day={day}
              isCurrentMonth={false}
              selectedDate={selectedDate}
              currentMonth={currentMonth}
              currentYear={currentYear}
              onDateClick={() => handleDateClick(day, false)}
            />
          </div>
        ))}

        {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => (
          <div key={day} className="p-2 border border-gray-700 rounded">
            <CalendarDay
              day={day}
              isCurrentMonth={true}
              selectedDate={selectedDate}
              currentMonth={currentMonth}
              currentYear={currentYear}
              onDateClick={() => handleDateClick(day, true)}
            />
          </div>
        ))}

        {Array.from({ length: 24 }, (_, i) => i + 8).map((day) => (
          <div key={day} className="p-2 border border-gray-700 rounded">
            <CalendarDay
              day={day}
              isCurrentMonth={true}
              availability={availabilityData[day]?.available}
              selectedDate={selectedDate}
              currentMonth={currentMonth}
              currentYear={currentYear}
              onDateClick={() => handleDateClick(day, true)}
            />
          </div>
        ))}

        <div key="next-1" className="p-2 border border-gray-700 rounded">
          <CalendarDay
            day={nextMonthDate}
            isCurrentMonth={false}
            selectedDate={selectedDate}
            currentMonth={currentMonth}
            currentYear={currentYear}
            onDateClick={() => handleDateClick(nextMonthDate, false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
