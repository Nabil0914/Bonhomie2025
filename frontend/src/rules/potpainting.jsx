import React from "react";

const PotPaintingEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Pot Painting Event Rules</h1>
          <p className="text-lg mt-2">Unleash your creativity with art on pots!</p>
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
      <li>Pots will be provided by the organizers.</li>
      <li>Participants must bring their own stationery materials.</li>
      <li>Decorative materials like mirrors, stickers, glass pieces, etc., are not allowed.</li>
      <li>No use of any kind of reference during the competition.</li>
      <li>Each group must consist of a minimum of 2 students and a maximum of 4 students.</li>
    </ul>
  </section>
);

export default PotPaintingEventRules;
