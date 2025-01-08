import React from "react";

const ThreeLegRaceEvent = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Three Leg Race</h1>
          <p className="text-lg mt-2">A fun and challenging team race that requires coordination!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <EventOverview />
        <RulesSection />
      </main>

    </div>
  );
};

const EventOverview = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Overview</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>The event is a fun, team-based race where two participants coordinate to run with their legs tied together.</li>
          <li>Teams race from the starting line to the finish line, working together to move as one.</li>
          <li>The first team to cross the finish line wins the race.</li>
        </ul>
      </div>
    </div>
  </section>
);

const RulesSection = () => (
  <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Each pair must stand next to each other and put their arms around each other's waist.</li>
          <li>Tie the partners' inside legs (right leg of the left partner and left leg of the right partner) together using rope or cloth.</li>
          <li>Alternatively, use a burlap bag to cover both legs.</li>
          <li>Two ropes will mark the starting and finishing lines.</li>
          <li>Pairs race to the finish line while coordinating their steps as they move together.</li>
          <li>The first pair to cross the finish line wins the race.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ThreeLegRaceEvent;
