import React, { useState } from 'react';

const BadmintonRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    year: '',
    department: '',
    rollNo: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-indigo-600">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Boys Badminton Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={formData.fullName}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <select 
              id="year" 
              name="year" 
              value={formData.year}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            >
              <option value="">Select Year</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select 
              id="department" 
              name="department" 
              value={formData.department}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
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

          {/* Roll Number */}
          <div>
            <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
            <input 
              type="text" 
              id="rollNo" 
              name="rollNo" 
              placeholder="Enter roll number" 
              value={formData.rollNo}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact No.</label>
            <input 
              type="text" 
              id="contact" 
              name="contact" 
              placeholder="Enter contact number" 
              value={formData.contact}
              onChange={handleChange}
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BadmintonRegistration;
