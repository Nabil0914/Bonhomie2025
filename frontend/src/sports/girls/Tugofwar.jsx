import React, { useState } from "react";

const GirlsTugOfWarRegistration = () => {
    const [teamMembers, setTeamMembers] = useState([
        { name: "", rollNo: "", department: "", year: "", weight: "" },
    ]);
    const [totalWeight, setTotalWeight] = useState(0);

    const departments = [
        "CO",
        "AIML",
        "DS",
        "CIVIL",
        "ME",
        "ELECTRICAL",
        "ECS",
        "ARCHI",
        "D.PHARMA",
        "PHARMACY",
    ];
    const years = ["1st", "2nd", "3rd", "4th", "5th"];

    const handleInputChange = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;

        // Update total weight dynamically
        if (field === "weight") {
            const newWeight = updatedMembers.reduce(
                (sum, member) => sum + parseFloat(member.weight || 0),
                0
            );
            if (newWeight > 500) {
                alert("Total team weight cannot exceed 500 kg.");
                return;
            }
            setTotalWeight(newWeight);
        }

        setTeamMembers(updatedMembers);
    };

    const addMember = () => {
        if (totalWeight >= 500) {
            alert("Total team weight cannot exceed 500 kg.");
            return;
        }
        setTeamMembers([
            ...teamMembers,
            { name: "", rollNo: "", department: "", year: "", weight: "" },
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted: ", teamMembers);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-500 to-blue-600">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
                <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
                    Tug Of War Registration Form (Girls)
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Team Lead Information */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Team Lead Information
                        </h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Team Lead Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter team lead's name"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Department
                            </label>
                            <select
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Year
                            </label>
                            <select
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                required
                            >
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Roll Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter roll number"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Team Members */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Team Member Details
                        </h3>
                        <p className="text-sm text-red-500 mb-4">
                            Note: Total team weight must not exceed 500 kg.
                        </p>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="mb-6 border-b pb-4">
                                <h4 className="text-lg font-medium text-gray-600">
                                    Member {index + 1}
                                </h4>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={member.name}
                                        onChange={(e) =>
                                            handleInputChange(index, "name", e.target.value)
                                        }
                                        placeholder="Enter member name"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Roll Number
                                    </label>
                                    <input
                                        type="text"
                                        value={member.rollNo}
                                        onChange={(e) =>
                                            handleInputChange(index, "rollNo", e.target.value)
                                        }
                                        placeholder="Enter roll number"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Department
                                    </label>
                                    <select
                                        value={member.department}
                                        onChange={(e) =>
                                            handleInputChange(index, "department", e.target.value)
                                        }
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map((dept) => (
                                            <option key={dept} value={dept}>
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Year
                                    </label>
                                    <select
                                        value={member.year}
                                        onChange={(e) =>
                                            handleInputChange(index, "year", e.target.value)
                                        }
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    >
                                        <option value="">Select Year</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        value={member.weight}
                                        onChange={(e) =>
                                            handleInputChange(index, "weight", e.target.value)
                                        }
                                        placeholder="Enter weight"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addMember}
                            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600"
                        >
                            Add Team Member
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GirlsTugOfWarRegistration;
