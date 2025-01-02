import React from "react";

const MushairaEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mushaira Event Rules</h1>
          <p className="text-lg mt-2">Express yourself through the art of poetry!</p>
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
      <li>The topic is based on the participant's interest.</li>
      <li>Vulgarity in language will not be tolerated.</li>
      <li>Recitation can be simple or rhythmic.</li>
      <li>Candidates can select poetry of other poets as well.</li>
      <li>Your actions and gestures should maintain the dignity of humanity.</li>
      <li>Your poetry should not hurt anyone's sentiments, emotions, or culture.</li>
      <li>Time limit is a maximum of 7 minutes.</li>
      <li>There will be a prior audition round. (Details will be notified.)</li>
      <li>The execution in the final round should be exactly the same as approved in the audition round.</li>
      <li>Music or any type of instrument is not allowed in the Mushaira.</li>
      <li>Participants should wear a proper dress code.</li>
      <li>Entry fees are ₹20 (which is refundable).</li>
      <li>The above rules are subject to change/modify as and when the situation demands.</li>
    </ul>
  </section>
);

export default MushairaEventRules;
