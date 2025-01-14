import React, { useState } from "react";

const PosterCompetitionRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-purple-500 text-center mb-6">
          Poster Competition Registration Form
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Poster Details */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-4">
            Poster Details
          </h3>
          <div className="mb-4">
            <label htmlFor="posterTitle" className="block font-medium text-gray-700">
              Poster Title
            </label>
            <input
              type="text"
              id="posterTitle"
              name="posterTitle"
              placeholder="Enter the title of your poster"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="posterCategory" className="block font-medium text-gray-700">
              Poster Category
            </label>
            <select
              id="posterCategory"
              name="posterCategory"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
              required
            >
              <option value="">Select Category</option>
              <option value="Environmental Awareness">Environmental Awareness</option>
              <option value="Technology">Technology</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Social Issues">Social Issues</option>
              <option value="Art & Design">Art & Design</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="posterDescription" className="block font-medium text-gray-700">
              Poster Description
            </label>
            <textarea
              id="posterDescription"
              name="posterDescription"
              placeholder="Enter a brief description of your poster"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Contact Information */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-4">
            Contact Information
          </h3>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
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
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 transition"
            >
              Register Poster
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PosterCompetitionRegistration;