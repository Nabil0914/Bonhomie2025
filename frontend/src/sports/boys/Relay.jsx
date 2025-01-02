import React, { useState, useEffect } from 'react';

const RelayRegistration = () => {
    const [teamLead, setTeamLead] = useState({
        name: '',
        year: '',
        department: '',
        rollNo: '',
        email: '',
    });
    const [members, setMembers] = useState([
        { name: '', rollNo: '', department: '', year: '' },
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page when the component is rendered
    }, []);

    const handleTeamLeadChange = (e) => {
        const { name, value } = e.target;
        setTeamLead((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleMemberChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMembers = [...members];
        updatedMembers[index][name] = value;
        setMembers(updatedMembers);
    };

    const addMember = () => {
        if (members.length < 4) {
            setMembers([
                ...members,
                { name: '', rollNo: '', department: '', year: '' },
            ]);
        } else {
            alert('You can only add up to 4 members.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the backend here
        console.log('Form submitted', { teamLead, members });
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-12 max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-orange-500 mb-4">Boys Relay Registration Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Team Lead Info */}
                <h4 className="text-2xl text-gradient mb-4">Team Lead Information</h4>
                <div className="mb-4">
                    <label htmlFor="teamLeadName" className="block text-gray-700 font-semibold mb-2">Team Lead Name</label>
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg"
                        id="teamLeadName"
                        name="name"
                        placeholder="Enter team lead's name"
                        value={teamLead.name}
                        onChange={handleTeamLeadChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="year" className="block text-gray-700 font-semibold mb-2">Year</label>
                    <select
                        className="form-select block w-full px-4 py-2 border border-gray-300 rounded-lg"
                        id="year"
                        name="year"
                        value={teamLead.year}
                        onChange={handleTeamLeadChange}
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
                    <label htmlFor="department" className="block text-gray-700 font-semibold mb-2">Department</label>
                    <select
                        className="form-select block w-full px-4 py-2 border border-gray-300 rounded-lg"
                        id="department"
                        name="department"
                        value={teamLead.department}
                        onChange={handleTeamLeadChange}
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
                    <label htmlFor="rollNo" className="block text-gray-700 font-semibold mb-2">Roll Number</label>
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg"
                        id="rollNo"
                        name="rollNo"
                        placeholder="Enter roll number"
                        value={teamLead.rollNo}
                        onChange={handleTeamLeadChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={teamLead.email}
                        onChange={handleTeamLeadChange}
                        required
                    />
                </div>

                {/* Team Member Details */}
                <h4 className="text-2xl text-gradient mb-4">Team Member Details</h4>
                <h7 className="text-red-600 text-sm">Note: Only 4 members</h7>
                {members.map((member, index) => (
                    <div key={index}>
                        <div className="mb-4">
                            <label htmlFor={`memberName${index + 1}`} className="block text-gray-700 font-semibold mb-2">Member {index + 1} Name</label>
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                id={`memberName${index + 1}`}
                                name="name"
                                placeholder="Enter member name"
                                value={member.name}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor={`memberRollNo${index + 1}`} className="block text-gray-700 font-semibold mb-2">Member {index + 1} Roll Number</label>
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                id={`memberRollNo${index + 1}`}
                                name="rollNo"
                                placeholder="Enter roll number"
                                value={member.rollNo}
                                onChange={(e) => handleMemberChange(index, e)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor={`memberDepartment${index + 1}`} className="block text-gray-700 font-semibold mb-2">Member {index + 1} Department</label>
                            <select
                                className="form-select block w-full px-4 py-2 border border-gray-300 rounded-lg"
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
                        </div>

                        <div className="mb-4">
                            <label htmlFor={`memberYear${index + 1}`} className="block text-gray-700 font-semibold mb-2">Member {index + 1} Year</label>
                            <select
                                className="form-select block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                id={`memberYear${index + 1}`}
                                name="year"
                                value={member.year}
                                onChange={(e) => handleMemberChange(index, e)}
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
                {/* Add more members dynamically */}
                <button
                    type="button"
                    className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    onClick={addMember}
                >
                    Add Team Member
                </button>

                {/* Submit Button */}
                <div className="text-center mt-8">
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-orange-400 to-indigo-600 text-white px-8 py-2 rounded-lg hover:scale-105 transition-all"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RelayRegistration;
