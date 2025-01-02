import React from "react";

const CookingEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Cooking Competition Rules</h1>
          <p className="text-lg mt-2">Get ready to showcase your culinary skills!</p>
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
      <li>Participants should use a clean and attractive plate or serving dish.</li>
      <li>No crockery will be provided.</li>
      <li>All teams must have 2 members in a group.</li>
      <li>Taste is the most important criterion, of course!</li>
      <li>Judges will be looking for flavor, texture, and balance.</li>
      <li>Garnishes and decorations can add to the presentation, but they should not be overdone.</li>
      <li>The use of mobile phones is not allowed.</li>
      <li>Results will be declared on Valedictory Day.</li>
    </ul>
  </section>
);

export default CookingEventRules;
