

import React from "react";

const StandUpComedyEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Stand-Up Comedy Event Rules</h1>
          <p className="text-lg mt-2">Get ready to make everyone laugh, but play it clean!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <GeneralRules />
        <ContentAndBehavior />
      </main>
    </div>
  );
};

// General Rules Section
const GeneralRules = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Each set must be 5 minutes long with original material only.</li>
      <li>Solo participation only. There will be one preliminary round.</li>
      <li>Plagiarism or use of copyrighted material will result in disqualification.</li>
      <li>Humorous content is allowed, but it must be clean and appropriate.</li>
    </ul>
  </section>
);

// Content and Behavior Section
const ContentAndBehavior = () => (
  <section className="bg-gray-100 shadow-md rounded-lg p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Content and Behavior</h2>
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li>Offensive jokes based on race, religion, gender, sexual orientation, etc., will not be tolerated and will lead to disqualification.</li>
      <li>No vulgarity, profanity, or obscene gestures.</li>
      <li>The college is a PG environment, so let's keep it clean.</li>
      <li>No political commentary or religious sermons. Focus on the funny!</li>
    </ul>
  </section>
);

export default StandUpComedyEventRules;
