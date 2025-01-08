import React from "react";

const RangoliEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Rangoli Event Rules</h1>
          <p className="text-lg mt-2">Let your creativity shine in colors and patterns!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <GeneralRules />
        <MaterialAndConduct />
      </main>
    </div>
  );
};

// General Rules Section
const GeneralRules = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Rangoli art should be of 115cm x 115cm size.</li>
      <li>Participants can form a group of 2 people.</li>
      <li>There will be only one round of competition.</li>
      <li>Maximum time to complete the Rangoli is 60 minutes.</li>
      <li>Participants are not allowed to refer to any printed material for preparing Rangoli.</li>
      <li>Multiple entries by one person are not allowed.</li>
      <li>Any act of indiscipline by participants calls for cancellation of registration.</li>
    </ul>
  </section>
);

// Material and Conduct Section
const MaterialAndConduct = () => (
  <section className="bg-gray-100 shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Material and Conduct</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Mobile phones are not allowed during the competition.</li>
      <li>The judge's decision will be final and binding.</li>
      <li>Participants have to bring their own materials for the competition.</li>
      <li>Participants can use rangoli colors, beans, and salt for making the Rangoli.</li>
    </ul>
  </section>
);

export default RangoliEventRules;
