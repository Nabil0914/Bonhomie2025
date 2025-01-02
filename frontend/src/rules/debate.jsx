import React from "react";

const DebateEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Debate Event Rules</h1>
          <p className="text-lg mt-2">Get ready to express your views in the ultimate debate!</p>
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
      <li>Speaking time for the debate will be 7 minutes, and preparation time will be 10 minutes.</li>
      <li>Participants must maintain decorum by using formal communicative language and making sure their points are valid.</li>
      <li>Participants must not hurt any sentiments, beliefs, or opinions of others, including participants, the audience, or any group/religion.</li>
      <li>The decision of the judges will be final, and no interference will be allowed from participants or on their behalf.</li>
      <li>The debate will be conducted in elimination rounds. Once eliminated, a participant cannot re-enter or register again.</li>
      <li>The debate topic will be provided at the start of the preparation time, during which participants can use any personal information sources to prepare.</li>
      <li>Use of any external information source is prohibited during the speaking time.</li>
      <li>Any participant found violating the rules will be disqualified from the event.</li>
    </ul>
  </section>
);

export default DebateEventRules;
