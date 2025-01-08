import React from "react";

const MehendiEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mehendi Event Rules</h1>
          <p className="text-lg mt-2">Show your creativity through the art of Mehendi!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <GeneralRules />
      </main>
    </div>
  );
};

// General Rules Section
const GeneralRules = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>All participants must bring their own mehendi cone.</li>
      <li>Participants should bring their own material from home.</li>
      <li>Participants should be present with their respective partners.</li>
      <li>Each participant will be allotted only 30 minutes to complete the design.</li>
      <li>Judges will evaluate participants based on their mehendi design and length.</li>
      <li>No mobile phones allowed.</li>
      <li>Only one theme should be followed (Indian, Arabic, etc.).</li>
    </ul>
  </section>
);

export default MehendiEventRules;
