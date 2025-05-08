"use client";

import React from "react";
import BookingCard from "@/components/dashboard/BookingCard";
import EmptyState from "@/components/dashboard/EmptyState";
import { mockBookings } from "@/components/dashboard/mockData";

const Dashboard = () => {
  const bookings = mockBookings;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Your Bookings
          </h1>
        </div>

        {/* Bookings grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>

        {/* Empty state - shown when no bookings exist */}
        {bookings.length === 0 && <EmptyState />}
      </div>
    </div>
  );
};

export default Dashboard;
