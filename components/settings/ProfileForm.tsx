'use client';

import React, { useState } from "react";
import FormInput from "./FormInput";

const ProfileForm = () => {
  const [userData, setUserData] = useState({
    name: "User",
    email: "user@user.com",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
    console.log("Saving user data:", userData);
  };

  return (
    <div className="bg-transparent text-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Profile information
        </h2>
        <p className="text-gray-300">
          Update your name and email address
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 mb-6">
          <FormInput
            id="name"
            name="name"
            label="Name"
            type="text"
            value={userData.name}
            onChange={handleInputChange}
          />

          <FormInput
            id="email"
            name="email"
            label="Email address"
            type="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;