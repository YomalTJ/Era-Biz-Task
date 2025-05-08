"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hide navbar on auth pages
  if (pathname?.includes("/auth")) {
    return null;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="w-full shadow-md py-4 px-6"
      style={{
        background: "linear-gradient(-45deg, #4481eb 0%, #04befe 100%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/calendar-view">
          <Image
            src="/NavBar/workspace.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            href="/calendar-view"
            className="text-white hover:text-gray-300"
          >
            Calendar View
          </Link>
          <Link href="/booking-form" className="text-white hover:text-gray-300">
            Booking Form
          </Link>
          <Link href="/dashboard" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </div>

        {/* User Icon with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="User menu"
          >
            <FaUserCircle className="text-blue-600 text-2xl" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-50">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-medium text-gray-700">U</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">User</p>
                    <p className="text-gray-500 text-sm">user@user.com</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <Link
                href="/settings/profile"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center border-b border-gray-100"
              >
                <FaCog className="mr-3 text-gray-500" />
                Settings
              </Link>

              <Link href="/auth/login">
                <button
                  onClick={() => console.log("Logging out...")}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaSignOutAlt className="mr-3 text-gray-500" />
                  Log out
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
