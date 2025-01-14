import React, { useState } from "react";

const AutoCADCompetitionRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-6">
          AutoCAD Competition Registration Form
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
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
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
              required
            />
          </div>

          {/* Competition Details */}
          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-4">
            Competition Details
          </h3>
          <div className="mb-4">
            <label htmlFor="skillLevel" className="block font-medium text-gray-700">
              Skill Level
            </label>
            <select
              id="skillLevel"
              name="skillLevel"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
              required
            >
              <option value="">Select Skill Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="designFocus" className="block font-medium text-gray-700">
              Design Focus Area
            </label>
            <select
              id="designFocus"
              name="designFocus"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
              required
            >
              <option value="">Select Design Focus Area</option>
              <option value="Architectural">Architectural</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Electrical">Electrical</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="projectTitle" className="block font-medium text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              placeholder="Enter project title"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectDescription" className="block font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Enter a brief description of your project"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-teal-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-600 transition"
            >
              Register for AutoCAD Competition
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AutoCADCompetitionRegistration;