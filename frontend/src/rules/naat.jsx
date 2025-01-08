import React from "react";

const HamdONaatEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Hamd-o-Naat Event Rules</h1>
          <p className="text-lg mt-2">Recite with devotion and grace!</p>
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
      <li>Naat must be in the Urdu language.</li>
      <li>Only five minutes are allowed for reading Naat/Hamd.</li>
      <li>Those who read Naat/Hamd for more than five minutes will affect the scores.</li>
      <li>Naat of reputed Poet/Naat Khawan will be allowed.</li>
      <li>Song-oriented Naat, Hamd, Marsia, and Manqabat will not be allowed.</li>
      <li>All recitations must be delivered from memory.</li>
      <li>Read only the Naat/Hamd which has already been selected.</li>
    </ul>
  </section>
);

export default HamdONaatEventRules;
