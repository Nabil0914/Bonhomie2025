import React, { useState } from 'react';

const CookingCompetitionRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    year: '',
    rollNo: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-16 p-8 bg-white rounded-lg shadow-xl max-w-lg">
      <h2 className="text-center text-[#FF7F41] font-bold text-3xl mb-6">Cooking Competition Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-semibold">Department</label>
          <select
            className="form-select mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
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
          <label htmlFor="year" className="block text-gray-700 font-semibold">Year</label>
          <select
            className="form-select mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="FE">FE</option>
            <option value="SE">SE</option>
            <option value="TE">TE</option>
            <option value="BE">BE</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="rollNo" className="block text-gray-700 font-semibold">Roll Number</label>
          <input
            type="text"
            className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="rollNo"
            name="rollNo"
            placeholder="Enter roll number"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 font-semibold">Contact no.</label>
          <input
            type="text"
            className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="contact"
            name="contact"
            placeholder="Enter your Contact no."
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="bg-gradient-to-r from-[#FF7F41] to-[#4a56a3] text-white py-2 px-6 rounded-full text-lg hover:scale-105 transition-all duration-300">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default CookingCompetitionRegistration;
