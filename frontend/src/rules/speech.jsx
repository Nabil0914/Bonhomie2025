import React from "react";

const ExtemporeVernacularSpeechEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Extempore & Vernacular Speech Event Rules</h1>
          <p className="text-lg mt-2">Speak your mind with fluency and flair!</p>
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
      <li>Time limit will be 3 minutes for the speech and 2 minutes for preparation.</li>
      <li>Fluency and flow in the chosen vernacular language are essential.</li>
      <li>Offensive or discriminatory language will not be tolerated and will lead to disqualification.</li>
      <li>Participants are encouraged to dress appropriately for the event.</li>
      <li>The language must have correct grammar and vocabulary, with appropriate use of figures of speech.</li>
      <li>Winners will be declared on the valedictory day.</li>
    </ul>
  </section>
);

export default ExtemporeVernacularSpeechEventRules;
