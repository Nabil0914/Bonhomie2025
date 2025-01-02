import React from "react";

const LippanArtEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Lippan Art Event Rules</h1>
          <p className="text-lg mt-2">Let your creativity shine through art!</p>
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
      <li>Solo participation only.</li>
      <li>Participants should reach the venue 10 minutes before the scheduled time.</li>
      <li>Decorative materials are allowed to be used.</li>
      <li>Participants are required to carry their own clay. A 12x12 acrylic board will be provided by the college.</li>
      <li>Participants can carry all designing materials, including Fevicol, mirrors, etc.</li>
      <li>Students should mention the following details on the back of the board during the event: Name of the participant, Roll number, and class/section.</li>
      <li>The judge's decision will be final and binding.</li>
    </ul>
  </section>
);

export default LippanArtEventRules;
