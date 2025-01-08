import React from "react";

const RaceEvent = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">100m Race Event</h1>
          <p className="text-lg mt-2">
            Show your speed and compete for the ultimate sprint victory!
          </p>
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
                <li>This is an individual sprint event for 100 meters.</li>
                <li>Runners will compete head-to-head in assigned lanes.</li>
                <li>The winner is the first to cross the finish line according to the rules.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Runners line up in their assigned lanes.</li>
                <li>Get into a set position after the command "On your marks."</li>
                <li>One false start is allowed; further false starts result in disqualification.</li>
                <li>Stay within your assigned lane throughout the race.</li>
                <li>The race ends when the torso (not head, arms, or legs) crosses the finish line.</li>
                <li>Disqualification may occur for leaving the lane, multiple false starts, or rule violations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Participants</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Warm up thoroughly before the race to avoid injuries.</li>
                <li>Focus on your breathing and maintain a steady rhythm.</li>
                <li>Start explosively, but don't lose form.</li>
                <li>Keep your eyes focused ahead and avoid looking at competitors.</li>
                <li>Lean forward slightly as you cross the finish line for a better result.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>


    </div>
  );
};

export default RaceEvent;
