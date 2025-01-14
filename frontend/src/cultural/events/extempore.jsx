import React, { useState } from "react";

const ExtemporeRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-6">
          Extempore Competition Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Participant Information */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Participant Information
          </h3>
          <div className="mb-4">
            <label htmlFor="participantName" className="block font-medium text-gray-700">
              Participant Name
            </label>
            <input
              type="text"
              id="participantName"
              name="participantName"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="collegeName" className="block font-medium text-gray-700">
              College/Organization Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="Enter your college/organization name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>

          {/* Special Requests or Notes */}
          <div className="mb-4">
            <label htmlFor="specialRequests" className="block font-medium text-gray-700">
              Special Requests or Notes
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Any special requests or additional notes (Optional)"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Register for Extempore
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExtemporeRegistration;