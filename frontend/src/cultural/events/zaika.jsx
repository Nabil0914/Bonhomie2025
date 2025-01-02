import React, { useState } from 'react';

const ZaikaRegistration = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLeadName, setTeamLeadName] = useState('');
  const [leadDepartment, setLeadDepartment] = useState('');
  const [leadYear, setLeadYear] = useState('');
  const [leadRollNo, setLeadRollNo] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [teamMembers, setTeamMembers] = useState([
    { name: '', rollNo: '', department: '', year: '' }
  ]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const addMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([
        ...teamMembers,
        { name: '', rollNo: '', department: '', year: '' }
      ]);
    } else {
      alert('You can only add up to 4 members.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call
    console.log({
      teamName,
      teamLead: { teamLeadName, leadDepartment, leadYear, leadRollNo, leadEmail },
      teamMembers,
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
      <h2 className="text-center text-[#FF7F41] text-3xl font-bold mb-6">Zaika Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="teamname" className="block font-semibold text-gray-700">Team Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="teamname"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter your Team name"
            required
          />
        </div>

        {/* Team Lead Info */}
        <h4 className="text-[#FF7F41] font-semibold mb-4">Team Lead Information</h4>
        <div className="mb-6">
          <label htmlFor="teamLeadName" className="block font-semibold text-gray-700">Team Lead Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="teamLeadName"
            value={teamLeadName}
            onChange={(e) => setTeamLeadName(e.target.value)}
            placeholder="Enter team lead's name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="leadDepartment" className="block font-semibold text-gray-700">Department</label>
          <select
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="leadDepartment"
            value={leadDepartment}
            onChange={(e) => setLeadDepartment(e.target.value)}
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

        <div className="mb-6">
          <label htmlFor="leadYear" className="block font-semibold text-gray-700">Year</label>
          <select
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="leadYear"
            value={leadYear}
            onChange={(e) => setLeadYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            <option value="FE">FE</option>
            <option value="SE">SE</option>
            <option value="TE">TE</option>
            <option value="BE">BE</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="leadRollNo" className="block font-semibold text-gray-700">Roll Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="leadRollNo"
            value={leadRollNo}
            onChange={(e) => setLeadRollNo(e.target.value)}
            placeholder="Enter roll number"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="leadEmail" className="block font-semibold text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
            id="leadEmail"
            value={leadEmail}
            onChange={(e) => setLeadEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        {/* Team Member Details */}
        <h4 className="text-[#FF7F41] font-semibold mb-4">Team Member Details</h4>
        <small className="block text-gray-500 mb-4">Note: Only 4 members</small>

        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="mb-6">
              <label htmlFor={`memberName${index}`} className="block font-semibold text-gray-700">Member {index + 1} Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
                id={`memberName${index}`}
                value={member.name}
                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                placeholder="Enter member name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor={`memberRollNo${index}`} className="block font-semibold text-gray-700">Member {index + 1} Roll Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
                id={`memberRollNo${index}`}
                value={member.rollNo}
                onChange={(e) => handleMemberChange(index, 'rollNo', e.target.value)}
                placeholder="Enter roll number"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor={`memberDepartment${index}`} className="block font-semibold text-gray-700">Member {index + 1} Department</label>
              <select
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
                id={`memberDepartment${index}`}
                value={member.department}
                onChange={(e) => handleMemberChange(index, 'department', e.target.value)}
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

            <div className="mb-6">
              <label htmlFor={`memberYear${index}`} className="block font-semibold text-gray-700">Member {index + 1} Year</label>
              <select
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5a67d8]"
                id={`memberYear${index}`}
                value={member.year}
                onChange={(e) => handleMemberChange(index, 'year', e.target.value)}
                required
              >
                <option value="">Select Year</option>
                <option value="FE">FE</option>
                <option value="SE">SE</option>
                <option value="TE">TE</option>
                <option value="BE">BE</option>
              </select>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="bg-green-500 text-white py-2 px-6 rounded-full font-medium hover:bg-green-600 transition-all duration-300"
          onClick={addMember}
        >
          Add Team Member
        </button>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF7F41] to-[#4a56a3] text-white py-3 px-8 rounded-full font-medium hover:from-[#FF7F41] hover:to-[#5a67d8] transition-all duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZaikaRegistration;
