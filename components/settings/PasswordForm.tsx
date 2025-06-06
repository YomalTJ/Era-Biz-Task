"use client";

import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import PasswordInput from "./PasswordInput";

const PasswordForm = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Saving password data:", passwordData);
  };

  return (
    <div className="bg-transparent text-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Update password</h2>
        <p className="text-gray-300">
          Ensure your account is using a long, random password to stay secure
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PasswordInput
          id="currentPassword"
          name="currentPassword"
          label="Current password"
          value={passwordData.currentPassword}
          onChange={handleInputChange}
        />

        <PasswordInput
          id="newPassword"
          name="newPassword"
          label="New password"
          value={passwordData.newPassword}
          onChange={handleInputChange}
        />

        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          value={passwordData.confirmPassword}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 flex items-center cursor-pointer"
        >
          <FaSave className="mr-2" />
          Save password
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
