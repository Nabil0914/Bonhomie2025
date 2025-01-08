import React from "react";

const FootballEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Football Tournament Rules</h1>
          <p className="text-lg mt-2">
            Show your skills and teamwork in the ultimate football showdown!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">

        {/* Team Composition Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Composition</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Each team consists of <strong>6 players</strong> on the field and <strong>3 substitutes</strong>.</li>
                <li>Rolling substitutions are allowed during the match.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Match Duration Section */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Match Duration</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Each half lasts for <strong>7 minutes</strong>.</li>
                <li>There is a <strong>2-minute break</strong> at halftime.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tie and Penalty Rules */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tie and Penalty Rules</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>If a match results in a tie, <strong>3 penalties</strong> must be taken by each team.</li>
                <li>Penalties must be taken with <strong>one step</strong> only.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Referee's Decision */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Referee's Decision</h2>
              <p className="text-lg">
                The <strong>referee's decision</strong> will be the final decision. All players are expected to respect and abide by the referee’s calls throughout the match.
              </p>
            </div>
          </div>
        </section>

      </main>

      
    </div>
  );
};

export default FootballEventRules;
