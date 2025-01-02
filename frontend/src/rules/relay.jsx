import React from "react";

const RelayRaceEvent = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">4x100m Relay Race</h1>
          <p className="text-lg mt-2">
            Teamwork and speed combined for an electrifying race!
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
                <li>The event is a 4x100m relay race, requiring four team members.</li>
                <li>Each member runs 100m in their designated lane, passing a baton to the next runner.</li>
                <li>The team with the fastest combined time wins.</li>
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
                <li>The race consists of four runners per team, with each running 100m in a single lane.</li>
                <li>During each leg, the runner must carry the baton and pass it to the next runner.</li>
                <li>The baton exchange must happen within a 20-meter changeover box (10m before and after each leg).</li>
                <li>If the baton is dropped or handed off outside the designated box, the team may be disqualified.</li>
                <li>The runner who finishes the race is typically the fastest sprinter in the team.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips for Teams Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Teams</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Practice baton handovers to ensure a smooth transition between runners.</li>
                <li>Focus on speed and precision when handing off the baton, staying within the changeover box.</li>
                <li>Work on your team’s coordination and timing to maintain a consistent pace.</li>
                <li>The final runner should have the best sprinting form to finish strong.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

     
    </div>
  );
};

export default RelayRaceEvent;
