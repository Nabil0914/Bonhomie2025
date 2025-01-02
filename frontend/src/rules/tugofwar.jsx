import React from "react";

const TugOfWarEvent = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="bg-green-600 text-white py-8 shadow-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Tug of War</h1>
                    <p className="text-lg mt-2">A test of strength and teamwork!</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6 space-y-12">

                {/* Event Overview Section */}
                <section className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Overview</h2>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                                <li>The Tug of War event is a strength and teamwork challenge between two teams.</li>
                                <li>Each team must pull the opposing team across the center line to win.</li>
                                <li>The game involves carefully coordinated strength, timing, and strategy.</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Tug of War Action" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* Rules Section */}
                <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="md:w-1/2 p-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules</h2>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                                <li>All participants must be evenly distributed along the length of the rope.</li>
                                <li>All team members must start with their feet behind a marked line.</li>
                                <li>The center of the rope should align with the center marker.</li>
                                <li>The entire team must remain within the boundaries during the pull.</li>
                                <li>Crossing the boundary lines during the pull is a foul.</li>
                                <li>Sitting, kneeling, or lying down during the match is not allowed.</li>
                                <li>The use of any substances (like resin) to enhance grip might be prohibited.</li>
                                <li>Teams must wait for the signal before starting; pulling before the signal is a false start.</li>
                                <li>A referee may oversee the match to enforce rules, declare fouls, and ensure fair play.</li>
                                <li>Verbal taunting or unsportsmanlike behavior is discouraged.</li>
                                <li>The team successfully pulling the opposing team over the center line is declared the winner.</li>
                                <li>In case of a tie, additional rounds or tiebreaker rules may be applied.</li>
                                <li><strong>For Boys:</strong> Total Team weight must not exceed 680 kg.</li>
                                <li><strong>For Girls:</strong> Total team weight must not exceed 500 kg.</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Tug of War Action" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

            </main>


        </div>
    );
};

export default TugOfWarEvent;
