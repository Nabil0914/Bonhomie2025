import React from "react";

const TreasureHuntEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Treasure Hunt Event Rules</h1>
          <p className="text-lg mt-2">Put your problem-solving skills to the test!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <TeamRequirements />
        <ClueGuidelines />
      </main>
    </div>
  );
};

// Team Requirements Section
const TeamRequirements = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Requirements</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>All teams must have 4 members.</li>
      <li>Teams will receive the first clue at the designated starting point.</li>
      <li>Number of rounds will depend on the number of participants.</li>
    </ul>
  </section>
);

// Clue Guidelines Section
const ClueGuidelines = () => (
  <section className="bg-gray-100 shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Clue Guidelines</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Subsequent clues will be hidden throughout the campus.</li>
      <li>Teams must solve each clue to find the location of the next one.</li>
      <li>Skipping clues is not allowed.</li>
      <li>Teams may not seek assistance from anyone outside their team, including organizers or college staff.</li>
      <li>Clues may be in the format of puzzles or directions.</li>
      <li>The use of mobile phones for finding clues is prohibited.</li>
    </ul>
  </section>
);

export default TreasureHuntEventRules;
