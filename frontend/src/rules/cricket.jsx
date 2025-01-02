import React from "react";

const OpenCricketEventRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Open Cricket Tournament Rules</h1>
          <p className="text-lg mt-2">Gear up for an exciting cricket battle!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">
        <PlayerRules />
        <MatchFormat />
        <TimingRules />
        <TeamComposition />
        <OnFieldRules />
      </main>
    </div>
  );
};

const PlayerRules = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Player Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>A player who has played in one team cannot play for another team.</li>
          <li>Each innings will start with a new ball.</li>
        </ul>
      </div>
    </div>
  </section>
);

const MatchFormat = () => (
  <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Match Format</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Knockout matches:</strong> 3 overs per side.</li>
          <li><strong>Semi-finals & Final:</strong> 4 overs per side.</li>
          <li><strong>Power Play:</strong></li>
          <ul className="pl-6 list-disc space-y-2">
            <li>First over is the mandatory power play.</li>
            <li>Only 2 players can field outside the 30-yard circle during power play overs.</li>
            <li>During non-power play overs, up to 5 fielders can be outside the 30-yard circle. Failure to comply will result in a no-ball call.</li>
          </ul>
        </ul>
      </div>
    </div>
  </section>
);

const TimingRules = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Match Timing Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Each innings must be completed in 25 minutes, with a 10-minute break between innings.</li>
          <li>The total match duration is 60 minutes.</li>
          <li>Teams must report 30 minutes before the scheduled start time.</li>
          <li>The toss will be held 15 minutes prior to the scheduled start time.</li>
        </ul>
      </div>
    </div>
  </section>
);

const TeamComposition = () => (
  <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Composition</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>A team must have a minimum of 7 players to start the match.</li>
          <li>Remaining players must join within 2 overs or the team will play with the 7 available players.</li>
          <li>Delayed beyond 15 minutes, the match will be awarded to the opposition team.</li>
        </ul>
      </div>
    </div>
  </section>
);

const OnFieldRules = () => (
  <section className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">On-field Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>The umpire's decision is final.</li>
          <li>The captain must ensure the team upholds the spirit of the game.</li>
          <li>Misbehavior or abuse towards umpires will lead to team disqualification.</li>
          <li>Compulsory chasing is required.</li>
          <li>Match timings will not be changed under any circumstances.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default OpenCricketEventRules;
