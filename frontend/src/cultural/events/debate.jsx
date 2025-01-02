import React, { useState } from 'react';

const DebateRegistration = () => {
  const [formData, setFormData] = useState({
    teamname: '',
    teamLeadName: '',
    department: '',
    year: '',
    rollNo: '',
    email: '',
    members: [
      {
        memberName: '',
        memberRollNo: '',
        memberDepartment: '',
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('member')) {
      const [key, index, field] = name.split('-');
      const updatedMembers = [...formData.members];
      updatedMembers[parseInt(index) - 1][field] = value;
      setFormData({ ...formData, members: updatedMembers });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddMember = () => {
    if (formData.members.length < 2) {
      setFormData({
        ...formData,
        members: [
          ...formData.members,
          {
            memberName: '',
            memberRollNo: '',
            memberDepartment: '',
          },
        ],
      });
    } else {
      alert('You can only add up to 2 members.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">Debate Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Team Name */}
        <div className="mb-4">
          <label htmlFor="teamname" className="block text-gray-700 font-medium">Team Name</label>
          <input
            type="text"
            id="teamname"
            name="teamname"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
            placeholder="Enter your team name"
            value={formData.teamname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team Lead Info */}
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Team Lead Information</h3>
        <div className="mb-4">
          <label htmlFor="teamLeadName" className="block text-gray-700 font-medium">Team Lead Name</label>
          <input
            type="text"
            id="teamLeadName"
            name="teamLeadName"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
            placeholder="Enter team lead's name"
            value={formData.teamLeadName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-medium">Department</label>
          <select
            id="department"
            name="department"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
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
          <label htmlFor="year" className="block text-gray-700 font-medium">Year</label>
          <select
            id="year"
            name="year"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
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
          <label htmlFor="rollNo" className="block text-gray-700 font-medium">Roll Number</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
            placeholder="Enter roll number"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team Member Details */}
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Team Member Details</h3>
        {formData.members.map((member, index) => (
          <div key={index}>
            <div className="mb-4">
              <label htmlFor={`memberName-${index + 1}`} className="block text-gray-700 font-medium">Member {index + 1} Name</label>
              <input
                type="text"
                id={`memberName-${index + 1}`}
                name={`memberName-${index + 1}`}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
                placeholder="Enter member name"
                value={member.memberName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor={`memberRollNo-${index + 1}`} className="block text-gray-700 font-medium">Member {index + 1} Roll Number</label>
              <input
                type="text"
                id={`memberRollNo-${index + 1}`}
                name={`memberRollNo-${index + 1}`}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
                placeholder="Enter roll number"
                value={member.memberRollNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor={`memberDepartment-${index + 1}`} className="block text-gray-700 font-medium">Member {index + 1} Department</label>
              <select
                id={`memberDepartment-${index + 1}`}
                name={`memberDepartment-${index + 1}`}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-400"
                value={member.memberDepartment}
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
          </div>
        ))}

        <button type="button" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-4" onClick={handleAddMember}>Add Team Member</button>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">Register</button>
        </div>
      </form>
    </div>
  );
};

export default DebateRegistration;
