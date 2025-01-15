import React, { useState } from 'react';

const PosterRegistration = () => {
    const [formData, setFormData] = useState({
    participantName: '',
    year: '',
    department: '',
    rollNo: '',
    email: '',
    contactNo: '',
    eventName: 'Poster',
    eventType: 'both',
    eventCategory: 'individual',
    });
    
      const [message, setMessage] = useState('');   // To store message (success or error)
      const [messageType, setMessageType] = useState(''); // To track the message type (success or error)
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/individual-sports', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              participantName: formData.participantName,
              year: formData.year,
              department: formData.department,
              rollNo: formData.rollNo,
              email: formData.email,
              contactNo: formData.contactNo,
              eventName: 'Poster',
              eventType: 'both',
              eventCategory: 'individual',
            }),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            setMessage('Registration successful!');
            setMessageType('success');
          } else {
            setMessage(`Error: ${result.message}`);
            setMessageType('error');
          }
        } catch (error) {
          setMessage('An error occurred during registration.');
          setMessageType('error');
          console.error('Error:', error);
        }
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-bgcolor">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Poster Competition Registration Form
            </h2>
    
            {/* Conditionally Render Success or Error Alert */}
            {message && (
              <div
                className={`p-4 mb-4 text-sm ${
                  messageType === 'success'
                    ? 'text-green-800 bg-green-200'
                    : 'text-red-800 bg-red-200'
                } rounded-lg`}
                role="alert"
              >
                {message}
              </div>
            )}
    
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="participantName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="participantName" 
                  name="participantName" 
                  placeholder="Enter your full name" 
                  value={formData.participantName}
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
                    <option value="FE">First Year</option>
                    <option value="SE">Second Year</option>
                    <option value="TE">Third Year</option>
                    <option value="BE">Fourth Year</option>
                    <option value="BE">Fifth Year</option>
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
                  <option value="Bsc IT">Bsc IT</option>
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
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">Contact No.</label>
                <input 
                  type="text" 
                  id="contactNo" 
                  name="contactNo" 
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
                  className="w-full bg-custom-blue text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default PosterRegistration;
