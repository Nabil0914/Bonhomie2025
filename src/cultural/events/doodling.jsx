import React, { useState } from 'react';

const DoodlingRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    year: '',
    rollNo: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or handle logic)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans text-sm" style={{ background: 'linear-gradient(90deg, #FF7F41FF, #4a56a3)' }}>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-center text-xl font-bold text-orange-500">Doodling Registration Form</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block font-medium text-gray-700">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="CO">CO</option>
              <option value="AIML">AIML</option>
              <option value="DS">DS</option>
              <option value="CIVIL">CIVIL</option>
              <option value="ME">ME</option>
              <option value="ELECTRICAL">ELECTRICAL</option>
              <option value="ECS">ECS</option>
              <option value="ARCHI">ARCHI</option>
              <option value="D.PHARMA">D.PHARMA</option>
              <option value="PHARMACY">PHARMACY</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="year" className="block font-medium text-gray-700">Year</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="rollNo" className="block font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter roll number"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block font-medium text-gray-700">Contact no.</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your Contact no."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transform transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoodlingRegistrationForm;
