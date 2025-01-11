import React, { useState } from 'react';

const BGMIRegistrationForm = () => {
    const [memberCount, setMemberCount] = useState(1);
    const [teamMembers, setTeamMembers] = useState([
        { name: '', rollNo: '', department: '', year: '' },
    ]);

    const handleMemberChange = (index, e) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][e.target.name] = e.target.value;
        setTeamMembers(updatedMembers);
    };

    const addMember = () => {
        if (memberCount >= 4) {
            alert('You can only add up to 4 members.');
            return;
        }
        setMemberCount(memberCount + 1);
        setTeamMembers([
            ...teamMembers,
            { name: '', rollNo: '', department: '', year: '' },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-center text-2xl font-bold text-orange-500 mb-6">
                BGMI Registration Form
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Team Lead Info */}
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    Team Lead Information
                </h4>
                <div className="mb-4">
                    <label
                        htmlFor="teamLeadName"
                        className="block font-medium text-gray-700"
                    >
                        Team Lead Name
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                        id="teamLeadName"
                        name="teamLeadName"
                        placeholder="Enter team lead's name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="memberDepartment1"
                        className="block font-medium text-gray-700"
                    >
                        Year
                    </label>
                    <select
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                        id="memberDepartment1"
                        name="memberDepartment"
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="FE">FE</option>
                        <option value="SE">SE</option>
                        <option value="TE">TE</option>
                        <option value="BE">BE</option>
                    </select>
                </div>

                {/* Team Member Details */}
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    Team Member Details
                </h4>
                <p className="text-red-500 mb-4">Note: Only 4 members</p>
                <div id="teamMembers">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="mb-4">
                            <label
                                htmlFor={`memberName${index + 1}`}
                                className="block font-medium text-gray-700"
                            >
                                Member {index + 1} Name
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                                id={`memberName${index + 1}`}
                                name="name"
                                placeholder="Enter member name"
                                value={member.name}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            />
                            <label
                                htmlFor={`memberRollNo${index + 1}`}
                                className="block font-medium text-gray-700"
                            >
                                Member {index + 1} Roll Number
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                                id={`memberRollNo${index + 1}`}
                                name="rollNo"
                                placeholder="Enter roll number"
                                value={member.rollNo}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            />
                            <label
                                htmlFor={`memberDepartment${index + 1}`}
                                className="block font-medium text-gray-700"
                            >
                                Member {index + 1} Department
                            </label>
                            <select
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                                id={`memberDepartment${index + 1}`}
                                name="department"
                                value={member.department}
                                onChange={(e) => handleMemberChange(index, e)}
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
                            <label
                                htmlFor={`memberYear${index + 1}`}
                                className="block font-medium text-gray-700"
                            >
                                Member {index + 1} Year
                            </label>
                            <select
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                                id={`memberYear${index + 1}`}
                                name="year"
                                value={member.year}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            >
                                <option value="">Select Year</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                            </select>
                        </div>
                    ))}
                </div>
                {/* Add more members dynamically */}
                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    onClick={addMember}
                >
                    Add Team Member
                </button>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BGMIRegistrationForm;
