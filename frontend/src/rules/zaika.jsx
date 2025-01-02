import React from "react";

const FoodStallZaikaEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Food Stall (ZAIKA) Event Rules</h1>
          <p className="text-lg mt-2">A flavorful experience awaits at ZAIKA!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <TeamRequirements />
        <HygieneAndSafety />
        <JudgingCriteria />
      </main>
    </div>
  );
};

// Team Requirements Section
const TeamRequirements = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Requirements</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>All teams must have a maximum of 3 members.</li>
      <li>Only tables will be provided by the college; all other requirements (utensils, ingredients, etc.) should be brought by the participants.</li>
    </ul>
  </section>
);

// Hygiene and Safety Section
const HygieneAndSafety = () => (
  <section className="bg-gray-100 shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Hygiene and Safety</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>All food preparation must comply with hygiene and food safety regulations.</li>
      <li>Food handlers must wear clean aprons, gloves, and hairnets.</li>
      <li>Ensure proper disposal of food waste and packaging materials.</li>
    </ul>
  </section>
);

// Judging Criteria Section
const JudgingCriteria = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Judging Criteria</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Stalls will be judged based on food quality, hygiene, creativity, customer service, and overall presentation.</li>
      <li>Discipline should be maintained in your stall.</li>
      <li>Offensive language will not be tolerated and will lead to disqualification.</li>
      <li>Coupons should be collected from the Desk to buy the food.</li>
      <li>Winners will be declared on the valedictory Day.</li>
    </ul>
  </section>
);

export default FoodStallZaikaEventRules;
