"use client";

import React from "react";
import {
  FaUser,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "../icons/DashboardIcons";
import StatusBadge from "./StatusBadge";
import { Booking } from "./types";

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{booking.package}</h3>
        <StatusBadge status={booking.status} />
      </div>

      {/* Booking details */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-700">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Start:</span> {booking.startDate}
        </div>
        <div className="flex items-center text-gray-700">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">End:</span> {booking.endDate}
        </div>
        <div className="flex items-center text-gray-700">
          <FaMoneyBillWave className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Price:</span> {booking.price}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Contact information */}
      <div className="space-y-2">
        <div className="flex items-center text-gray-700">
          <FaUser className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Full Name:</span>{" "}
          {booking.fullName}
        </div>
        <div className="flex items-center text-gray-700">
          <FaBuilding className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Company:</span> {booking.company}
        </div>
        <div className="flex items-center text-gray-700">
          <FaPhone className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Telephone:</span>{" "}
          {booking.telephone}
        </div>
        <div className="flex items-center text-gray-700">
          <FaEnvelope className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Email:</span>
          <a
            href={`mailto:${booking.email}`}
            className="text-[#5995fd] hover:underline"
          >
            {booking.email}
          </a>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-gray-500" />
          <span className="font-medium mr-1">Address:</span> {booking.address}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
