"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (pathname?.includes("/auth")) return null;

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileUserMenuOpen(false);
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

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            href="/calendar-view"
            className={`${
              pathname === "/calendar-view" ? "font-semibold underline" : ""
            } text-white hover:text-gray-300`}
          >
            Calendar View
          </Link>
          <Link
            href="/booking-form"
            className={`${
              pathname === "/booking-form" ? "font-semibold underline" : ""
            } text-white hover:text-gray-300`}
          >
            Booking Form
          </Link>
          <Link
            href="/dashboard"
            className={`${
              pathname === "/dashboard" ? "font-semibold underline" : ""
            } text-white hover:text-gray-300`}
          >
            Dashboard
          </Link>
        </div>

        {/* User Icon Desktop */}
        <div className="relative hidden md:block" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="User menu"
          >
            <FaUserCircle className="text-blue-600 text-2xl" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-medium text-gray-700">U</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">User</p>
                    <p className="text-gray-500 text-sm">user@user.com</p>
                  </div>
                </div>
              </div>
              <Link
                href="/settings/profile"
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center border-b border-gray-100"
              >
                <FaCog className="mr-3 text-gray-500" />
                Settings
              </Link>
              <Link href="/auth/login">
                <button
                  onClick={() => console.log("Logging out...")}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaSignOutAlt className="mr-3 text-gray-500" />
                  Log out
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-4 py-3 space-y-3">
          <Link
            href="/calendar-view"
            onClick={handleMobileLinkClick}
            className={`block ${
              pathname === "/calendar-view" ? "font-semibold underline" : ""
            } text-blue-700`}
          >
            Calendar View
          </Link>
          <Link
            href="/booking-form"
            onClick={handleMobileLinkClick}
            className={`block ${
              pathname === "/booking-form" ? "font-semibold underline" : ""
            } text-blue-700`}
          >
            Booking Form
          </Link>
          <Link
            href="/dashboard"
            onClick={handleMobileLinkClick}
            className={`block ${
              pathname === "/dashboard" ? "font-semibold underline" : ""
            } text-blue-700`}
          >
            Dashboard
          </Link>

          {/* User Icon for Mobile */}
          <button
            onClick={() => setIsMobileUserMenuOpen(!isMobileUserMenuOpen)}
            className="w-full flex items-center text-blue-700 font-medium mt-3"
          >
            <FaUserCircle className="mr-2 text-xl" />
            User
          </button>

          {isMobileUserMenuOpen && (
            <div className="ml-5 space-y-2">
              <Link
                href="/settings/profile"
                onClick={handleMobileLinkClick}
                className="flex items-center text-gray-700"
              >
                <FaCog className="mr-2" /> Settings
              </Link>
              <Link href="/auth/login">
                <button
                  onClick={() => {
                    console.log("Logging out...");
                    handleMobileLinkClick();
                  }}
                  className="flex items-center text-gray-700"
                >
                  <FaSignOutAlt className="mr-2" /> Log out
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
