import { useState } from "react";

const GirlsThrowBallRegistration = () => {
    const [memberCount, setMemberCount] = useState(1);
    const [teamMembers, setTeamMembers] = useState([{ id: 1 }]);
    const [substituteMembers, setSubstituteMembers] = useState([1, 2]);

    const addMember = () => {
        if (memberCount >= 7) {
            alert("You can only add up to 7 members.");
            return;
        }
        setMemberCount(memberCount + 1);
        setTeamMembers([...teamMembers, { id: memberCount + 1 }]);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-orange-600 text-2xl font-bold mb-4">
                    Throw Ball Registration Form
                </h2>

                <form action="submit_registration.php" method="POST">
                    {/* Team Lead Info */}
                    <h4 className="text-lg font-semibold mb-4">Team Lead Information</h4>

                    <div className="mb-4">
                        <label htmlFor="teamLeadName" className="block font-semibold text-gray-600">
                            Team Lead Name
                        </label>
                        <input
                            type="text"
                            className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                            id="teamLeadName"
                            name="teamLeadName"
                            placeholder="Enter team lead's name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="department" className="block font-semibold text-gray-600">
                            Year
                        </label>
                        <select
                            className="form-select mt-2 p-2 w-full border border-gray-300 rounded"
                            id="department"
                            name="department"
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
                        <label htmlFor="department" className="block font-semibold text-gray-600">
                            Department
                        </label>
                        <select
                            className="form-select mt-2 p-2 w-full border border-gray-300 rounded"
                            id="department"
                            name="department"
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
                        <label htmlFor="rollNo" className="block font-semibold text-gray-600">
                            Roll Number
                        </label>
                        <input
                            type="text"
                            className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                            id="rollNo"
                            name="rollNo"
                            placeholder="Enter roll number"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    {/* Team Members */}
                    <h4 className="text-lg font-semibold mb-4">Team Member Details</h4>
                    <p className="text-red-500 mb-4">Note: Only 7 members</p>

                    <div>
                        {teamMembers.map((member, index) => (
                            <div key={member.id} className="mb-4">
                                <label htmlFor={`memberName${member.id}`} className="block font-semibold text-gray-600">
                                    Member {member.id} Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`memberName${member.id}`}
                                    name="memberName[]"
                                    placeholder={`Enter member ${member.id} name`}
                                    required
                                />

                                <label htmlFor={`memberRollNo${member.id}`} className="block font-semibold text-gray-600 mt-4">
                                    Member {member.id} Roll Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`memberRollNo${member.id}`}
                                    name="memberRollNo[]"
                                    placeholder={`Enter member ${member.id} roll number`}
                                    required
                                />

                                <label htmlFor={`memberDepartment${member.id}`} className="block font-semibold text-gray-600 mt-4">
                                    Member {member.id} Department
                                </label>
                                <select
                                    className="form-select mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`memberDepartment${member.id}`}
                                    name="memberDepartment[]"
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

                                <label htmlFor={`memberYear${member.id}`} className="block font-semibold text-gray-600 mt-4">
                                    Member {member.id} Year
                                </label>
                                <select
                                    className="form-select mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`memberYear${member.id}`}
                                    name="memberYear[]"
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

                    <button
                        type="button"
                        className="btn btn-success mt-4 p-2 bg-green-500 text-white rounded"
                        onClick={addMember}
                    >
                        Add Team Member
                    </button>

                    {/* Substitute Members */}
                    <h4 className="text-lg font-semibold mb-4 mt-6">Substitute Member Details</h4>
                    <p className="text-red-500 mb-4">Note: Only 2 Substitute members</p>

                    <div>
                        {substituteMembers.map((_, index) => (
                            <div key={index} className="mb-4">
                                <label htmlFor={`SubstitutememberName${index + 1}`} className="block font-semibold text-gray-600">
                                    Substitute Member {index + 1} Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`SubstitutememberName${index + 1}`}
                                    name="SubstitutememberName[]"
                                    placeholder={`Enter Substitute member ${index + 1} name`}
                                    required
                                />

                                <label htmlFor={`SubstitutememberRollNo${index + 1}`} className="block font-semibold text-gray-600 mt-4">
                                    Substitute Member {index + 1} Roll Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`SubstitutememberRollNo${index + 1}`}
                                    name="SubstitutememberRollNo[]"
                                    placeholder={`Enter Substitute member ${index + 1} roll number`}
                                    required
                                />

                                <label htmlFor={`SubstitutememberDepartment${index + 1}`} className="block font-semibold text-gray-600 mt-4">
                                    Substitute Member {index + 1} Department
                                </label>
                                <select
                                    className="form-select mt-2 p-2 w-full border border-gray-300 rounded"
                                    id={`SubstitutememberDepartment${index + 1}`}
                                    name="SubstitutememberDepartment[]"
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
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                        <button type="submit" className="bg-gradient-to-r from-orange-400 to-blue-600 p-2 rounded text-white">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GirlsThrowBallRegistration;
