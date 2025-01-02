import React, { useState } from 'react';

const WeightLiftingRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        year: '',
        department: '',
        rollNo: '',
        email: '',
        contact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, like sending data to an API
        console.log(formData);
    };

    return (
        <div className="bg-gradient-to-r from-orange-500 to-indigo-600 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
                <h2 className="text-center text-orange-600 text-2xl font-bold mb-6">
                    Boys Weight Lifting Registration Form
                </h2>

                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-semibold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Year */}
                    <div className="mb-4">
                        <label htmlFor="year" className="block text-gray-700 font-semibold">
                            Year
                        </label>
                        <select
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="year"
                            name="year"
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

                    {/* Department */}
                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 font-semibold">
                            Department
                        </label>
                        <select
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="department"
                            name="department"
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

                    {/* Roll Number */}
                    <div className="mb-4">
                        <label htmlFor="rollNo" className="block text-gray-700 font-semibold">
                            Roll Number
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="rollNo"
                            name="rollNo"
                            value={formData.rollNo}
                            onChange={handleChange}
                            placeholder="Enter roll number"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700 font-semibold">
                            Contact No.
                        </label>
                        <input
                            type="text"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-indigo-600 text-white rounded-full font-semibold text-lg hover:opacity-90 transition"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WeightLiftingRegistration;
