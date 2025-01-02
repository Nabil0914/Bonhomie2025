import React, { useState } from 'react';

const TreasureHuntRegistration = () => {
  const [teamName, setTeamName] = useState('');
  const [teamLeadName, setTeamLeadName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState([{
    name: '',
    rollNo: '',
    department: '',
    year: '',
  }]);

  const handleInputChange = (e, index, field) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = e.target.value;
    setMembers(updatedMembers);
  };

  const handleAddMember = () => {
    if (members.length >= 4) {
      alert("You can only add up to 4 members.");
      return;
    }
    setMembers([...members, { name: '', rollNo: '', department: '', year: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here, e.g., send the data to a server
    console.log({ teamName, teamLeadName, department, year, rollNo, email, members });
  };

  return (
    <div className="container mx-auto mt-16 max-w-2xl p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-4xl font-bold text-[#FF7F41FF]">Treasure Hunt Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="teamname" className="block text-lg font-semibold text-gray-700">Team Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="teamname" 
            name="teamname" 
            placeholder="Enter your Team name" 
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required 
          />
        </div>

        <h4 className="text-xl text-gradient-to-r from-[#FF7F41FF] to-[#4a56a3] font-semibold">Team Lead Information</h4>
        <div className="mb-4">
          <label htmlFor="teamLeadName" className="block text-lg font-semibold text-gray-700">Team Lead Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="teamLeadName" 
            name="teamLeadName" 
            placeholder="Enter team lead's name" 
            value={teamLeadName}
            onChange={(e) => setTeamLeadName(e.target.value)}
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-lg font-semibold text-gray-700">Department</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="department" 
            name="department" 
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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
          <label htmlFor="year" className="block text-lg font-semibold text-gray-700">Year</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="year" 
            name="year" 
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
          <label htmlFor="rollNo" className="block text-lg font-semibold text-gray-700">Roll Number</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="rollNo" 
            name="rollNo" 
            placeholder="Enter roll number" 
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            id="email" 
            name="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <h4 className="text-xl text-gradient-to-r from-[#FF7F41FF] to-[#4a56a3] font-semibold">Team Member Details</h4>
        <p className="text-red-500 text-sm mb-4">Note: Only 4 members</p>
        <div id="teamMembers">
          {members.map((member, index) => (
            <div key={index}>
              <div className="mb-4">
                <label htmlFor={`memberName${index}`} className="block text-lg font-semibold text-gray-700">Member {index + 1} Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  id={`memberName${index}`} 
                  name="memberName" 
                  placeholder="Enter member name" 
                  value={member.name}
                  onChange={(e) => handleInputChange(e, index, 'name')}
                  required 
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`memberRollNo${index}`} className="block text-lg font-semibold text-gray-700">Member {index + 1} Roll Number</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  id={`memberRollNo${index}`} 
                  name="memberRollNo" 
                  placeholder="Enter roll number" 
                  value={member.rollNo}
                  onChange={(e) => handleInputChange(e, index, 'rollNo')}
                  required 
                />
              </div>

              <div className="mb-4">
                <label htmlFor={`memberDepartment${index}`} className="block text-lg font-semibold text-gray-700">Member {index + 1} Department</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  id={`memberDepartment${index}`} 
                  name="memberDepartment" 
                  value={member.department}
                  onChange={(e) => handleInputChange(e, index, 'department')}
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
                <label htmlFor={`memberYear${index}`} className="block text-lg font-semibold text-gray-700">Member {index + 1} Year</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  id={`memberYear${index}`} 
                  name="memberYear" 
                  value={member.year}
                  onChange={(e) => handleInputChange(e, index, 'year')}
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
        </div>

        <button 
          type="button" 
          className="px-4 py-2 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={handleAddMember}
        >
          Add Team Member
        </button>

        <div className="text-center mt-6">
          <button 
            type="submit" 
            className="px-6 py-3 bg-gradient-to-r from-[#FF7F41FF] to-[#4a56a3] text-white rounded-full hover:bg-gradient-to-r hover:from-[#4a56a3] hover:to-[#3b4795]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default TreasureHuntRegistration;
