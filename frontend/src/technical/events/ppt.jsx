import React, { useState, useEffect } from 'react';

const PPTRegistration = () => {
    const [teamLead, setTeamLead] = useState({
                name: '',
                year: '',
                department: '',
                rollNo: '',
                email: '',
            });
        
            const [teamMembers, setTeamMembers] = useState([
                { name: '', rollNo: '', department: '', year: '' },
            ]);
        
            const [eventName] = useState('Relay');
            const [eventType] = useState('girls');
            const [eventCategory] = useState('group');
        
            const [alertMessage, setAlertMessage] = useState(null); // For alert messages
            const [alertType, setAlertType] = useState(''); // 'success' or 'error'
        
            useEffect(() => {
                window.scrollTo(0, 0); 
            }, []);
        
            const handleTeamLeadChange = (e) => {
                const { name, value } = e.target;
                setTeamLead((prev) => ({ ...prev, [name]: value }));
            };
        
            const handleMemberChange = (index, e) => {
                const { name, value } = e.target;
                const newMembers = [...teamMembers];
                newMembers[index][name] = value;
                setTeamMembers(newMembers);
            };
        
            const addMember = () => {
                if (teamMembers.length < 2) {
                    setTeamMembers([...teamMembers, { name: '', rollNo: '', department: '', year: '' }]);
                } else {
                    alert('You can only add up to 2 members.');
                }
            };
        
            const handleSubmit = async (e) => {
                e.preventDefault();
        
        
                if (teamMembers.length < 2) {
                    alert("Please provide at least 2 team members.");
                    return;
                }
        
                // Construct the data object in the expected structure
                const data = {
                    eventName: eventName, // Box Cricket
                    eventType: eventType, // boys
                    eventCategory: eventCategory, // group
                    teamLeader: {
                        name: teamLead.name,
                        year: teamLead.year,
                        department: teamLead.department,
                        rollNo: teamLead.rollNo,
                        email: teamLead.email,
                    },
                    teammates: teamMembers, // should already be an array of member objects
                };
        
                try {
                    const response = await fetch('http://localhost:3000/group-sports', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data), // Send data as a JSON string
                    });
        
                    const result = await response.json();
        
                    if (response.ok) {
                        // Success alert
                        setAlertMessage('Registration successful!');
                        setAlertType('success');
                        console.log(result);
                    } else {
                        // Error alert
                        setAlertMessage(`Registration failed: ${result.message}`);
                        setAlertType('error');
                        console.error(result);
                    }
                } catch (error) {
                    // Error alert
                    setAlertMessage('Registration failed due to a server error');
                    setAlertType('error');
                    console.error('Error:', error);
                }
        
                // Scroll to the top when the alert is shown
                window.scrollTo(0, 0);
        
                // Clear the alert after 5 seconds
                setTimeout(() => {
                    setAlertMessage(null);
                }, 5000);
            };
            
        
            return (
                <div className="container mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                    <h2 className="text-center text-orange-500 font-bold text-xl mb-4">
                        PPT Competition Registration Form
                    </h2>
        
                    {/* Alert Message */}
                    {alertMessage && (
                        <div
                            className={`${
                                alertType === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700'
                            } border-l-4 p-4 mb-4`}
                            role="alert"
                        >
                            <p className="font-bold">{alertType === 'success' ? 'Success' : 'Error'}</p>
                            <p>{alertMessage}</p>
                        </div>
                    )}
        
                    <form onSubmit={handleSubmit}>
                        {/* Team Lead Section */}
                        <h4 className="text-lg text-gradient-to-r from-orange-500 to-indigo-600 mb-2">
                            Team Lead Information
                        </h4>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Team Lead Name</label>
                            <input
                                type="text"
                                name="name"
                                value={teamLead.name}
                                onChange={handleTeamLeadChange}
                                className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter team lead's name"
                                required
                            />
                        </div>
        
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Year</label>
                            <select
                                name="year"
                                value={teamLead.year}
                                onChange={handleTeamLeadChange}
                                className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                            <option value="">Select Year</option>
                            <option value="FE">First Year</option>
                            <option value="SE">Second Year</option>
                            <option value="TE">Third Year</option>
                            <option value="BE">Fourth Year</option>
                            <option value="BE">Fifth Year</option>
                            </select>
                        </div>
        
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Department</label>
                            <select
                                name="department"
                                value={teamLead.department}
                                onChange={handleTeamLeadChange}
                                className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
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
        
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Roll Number</label>
                            <input
                                type="text"
                                name="rollNo"
                                value={teamLead.rollNo}
                                onChange={handleTeamLeadChange}
                                className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter roll number"
                                required
                            />
                        </div>
        
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={teamLead.email}
                                onChange={handleTeamLeadChange}
                                className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter email"
                                required
                            />
                        </div>
        
                        {/* Team Member Section */}
                        <h4 className="text-lg text-gradient-to-r from-orange-500 to-indigo-600 mb-2">
                            Team Member Details
                        </h4>
                        <p className="text-red-500 mb-4">Note: Only 8 members</p>
        
                        {teamMembers.map((member, index) => (
                            <div key={index}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-1">Member {index + 1} Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={member.name}
                                        onChange={(e) => handleMemberChange(index, e)}
                                        className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder={`Enter member ${index + 1} name`}
                                        required
                                    />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-1">Member {index + 1} Roll Number</label>
                                    <input
                                        type="text"
                                        name="rollNo"
                                        value={member.rollNo}
                                        onChange={(e) => handleMemberChange(index, e)}
                                        className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder={`Enter member ${index + 1} roll number`}
                                        required
                                    />
                                </div>
        
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-1">Member {index + 1} Department</label>
                                    <select
                                        name="department"
                                        value={member.department}
                                        onChange={(e) => handleMemberChange(index, e)}
                                        className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                    <label className="block text-gray-700 font-semibold mb-1">Member {index + 1} Year</label>
                                    <select
                                        name="year"
                                        value={member.year}
                                        onChange={(e) => handleMemberChange(index, e)}
                                        className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        
                        {/* Add Member Button */}
                        <button
                            type="button"
                            onClick={addMember}
                            className="btn bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mt-4"
                        >
                            Add Team Member
                        </button>
        
                        {/* Submit Button */}
                        <div className="text-center mt-6">
                            <button type="submit" className="btn bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            );
        };

export default PPTRegistration;
