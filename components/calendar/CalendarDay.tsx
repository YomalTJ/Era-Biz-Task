"use client";

import React from "react";

interface CalendarDayProps {
  day: number;
  isCurrentMonth?: boolean;
  availability?: number | null;
  selectedDate: string | null;
  currentMonth: string;
  currentYear: number;
  onDateClick: () => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  isCurrentMonth = true,
  availability = null,
  selectedDate,
  currentMonth,
  currentYear,
  onDateClick,
}) => {
  const isSelected =
    selectedDate && selectedDate.includes(`${currentMonth} ${day}`);

  const dayClasses = `
    h-24 sm:h-28 md:h-32 p-2 border border-gray-200 relative cursor-pointer transition-colors
    ${
      isCurrentMonth ? "bg-white hover:bg-gray-50" : "bg-gray-100 text-gray-400"
    }
    ${isSelected ? "border-blue-500 border-2 bg-blue-50" : ""}
    ${day === 8 && isCurrentMonth ? "border-blue-300" : ""}
  `;

  return (
    <div className={dayClasses} onClick={onDateClick}>
      <div className="text-lg font-medium text-gray-700">{day}</div>
      {availability && (
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <div className="hidden sm:inline bg-blue-100 text-blue-600 text-sm rounded-full px-3 py-1">
            {availability} Available
          </div>

          <div className="inline sm:hidden text-blue-600 text-lg">•••</div>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
