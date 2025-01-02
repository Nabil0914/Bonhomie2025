import React from "react";

const BGMIEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">BGMI Tournament Rules</h1>
          <p className="text-lg mt-2">Get ready to battle in the ultimate gaming event!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <GeneralRules />
        <DisqualificationRules />
        <TechnicalRequirements />
        <Communication />
      </main>

    </div>
  );
};

const GeneralRules = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Participants must join the room as soon as the ID and Password are shared.</li>
          <li>All participants should occupy their respective slots, and a team of 4 players is mandatory.</li>
          <li>The college will not be responsible for any technical failures from the participants' side.</li>
          <li>Misbehavior of any kind will lead to serious consequences.</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="BGMI General Rules" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const DisqualificationRules = () => (
  <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Disqualification Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Hacking or cheating will lead to immediate disqualification of the entire squad.</li>
          <li>Teaming up with other teams is strictly prohibited.</li>
          <li>Participants must join using their registered IDs. Non-registered IDs will be removed.</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Disqualification Rules" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const TechnicalRequirements = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Requirements</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>The game must be pre-installed on the device.</li>
          <li>Participants must have the latest version of the game.</li>
          <li>All maps (Erangel, Miramar, and Sanhok) should be downloaded beforehand.</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Technical Requirements" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const Communication = () => (
  <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Communication</h2>
        <p className="text-lg">
          The Room ID and Password will be shared on the designated BGMI group. Ensure that all team members join promptly and occupy their assigned slots to avoid any delays.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="BGMI Communication" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

export default BGMIEventRules;
