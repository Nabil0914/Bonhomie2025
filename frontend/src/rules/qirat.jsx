import React from "react";

const QiratEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Qirat Event Rules</h1>
          <p className="text-lg mt-2">Recite in Arabic and showcase your skills!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <GeneralRules />
        <AssessmentCriteria />
      </main>
    </div>
  );
};

// General Rules Section
const GeneralRules = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Qirat must be in Arabic language.</li>
      <li>Only five minutes are allowed for reading Qirat.</li>
      <li>Reading Qirat for more than five minutes will affect the scores.</li>
      <li>All recitations must be delivered by memory.</li>
      <li>Read only the Qirat which is already selected.</li>
    </ul>
  </section>
);

// Assessment Criteria Section
const AssessmentCriteria = () => (
  <section className="bg-gray-100 shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Voice clarity (20 points)</li>
      <li>Content (10 points)</li>
      <li>Pitch (10 points)</li>
      <li>Confidence (10 points)</li>
      <li>Pronunciation (10 points)</li>
      <li>Time factor (10 points)</li>
    </ul>
  </section>
);

export default QiratEventRules;
