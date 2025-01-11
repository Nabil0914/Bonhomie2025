import React, { useState } from 'react';

const VolleyballRegistration = () => {
    const [teamMembers, setTeamMembers] = useState([1]);

    const addMember = () => {
        if (teamMembers.length >= 6) {
            alert("You can only add up to 6 members.");
            return;
        }
        setTeamMembers([...teamMembers, teamMembers.length + 1]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-orange-400 to-blue-600 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">Volleyball Registration Form (Boys)</h2>
                <form id="volleyballForm" action="submit_registration.php" method="POST">
                    <h3 className="text-lg font-semibold mb-2">Team Lead Information</h3>

                    <div className="mb-4">
                        <label htmlFor="teamLeadName" className="block text-sm font-medium text-gray-700">Team Lead Name</label>
                        <input
                            type="text"
                            id="teamLeadName"
                            name="teamLeadName"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter team lead's name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                        <select
                            id="department"
                            name="department"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                        <select
                            id="year"
                            name="year"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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

                    <div className="mb-4">
                        <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">Roll Number</label>
                        <input
                            type="text"
                            id="rollNo"
                            name="rollNo"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter roll number"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Team Member Details</h3>
                    <p className="text-sm text-red-500 mb-4">Note: Only 6 members</p>

                    {teamMembers.map((member, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="text-md font-medium mb-2">Member {index + 1}</h4>
                            <div className="mb-4">
                                <label htmlFor={`memberName${index}`} className="block text-sm font-medium text-gray-700">Member Name</label>
                                <input
                                    type="text"
                                    id={`memberName${index}`}
                                    name="memberName[]"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter member name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor={`memberRollNo${index}`} className="block text-sm font-medium text-gray-700">Roll Number</label>
                                <input
                                    type="text"
                                    id={`memberRollNo${index}`}
                                    name="memberRollNo[]"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter roll number"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor={`memberDepartment${index}`} className="block text-sm font-medium text-gray-700">Department</label>
                                <select
                                    id={`memberDepartment${index}`}
                                    name="memberDepartment[]"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                                <label htmlFor={`memberYear${index}`} className="block text-sm font-medium text-gray-700">Year</label>
                                <select
                                    id={`memberYear${index}`}
                                    name="memberYear[]"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                        </div>
                    ))}

                    <button
                        type="button"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        onClick={addMember}
                    >
                        Add Team Member
                    </button>

                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VolleyballRegistration;
