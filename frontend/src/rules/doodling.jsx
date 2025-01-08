import React from "react";

const DoodlingEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Doodling Event Rules</h1>
          <p className="text-lg mt-2">Unleash your creativity with the art of doodling!</p>
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
      <li>Each participant will be allotted only 45 minutes to complete the doodle art.</li>
      <li>The topic will be revealed on the spot.</li>
      <li>Drawing sheets will be provided.</li>
      <li>All drawing materials (stationery) must be self-provided.</li>
      <li>No colorful doodling is allowed; it should be in black and white colors only.</li>
      <li>No offensive elements should be drawn in the doodle art.</li>
      <li>No references will be allowed, and no plagiarism will be tolerated.</li>
      <li>The decision of the judges will be final, and there will be no interference from participants or on their behalf.</li>
      <li>Participants found in violation of the rules will be disqualified from the event.</li>
    </ul>
  </section>
);

export default DoodlingEventRules;
