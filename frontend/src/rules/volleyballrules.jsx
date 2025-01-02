import React from 'react';

const VolleyballRules = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Volleyball Tournament Rules</h1>
          <p className="text-lg mt-2">Show your teamwork and skill in this high-energy game!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">

        {/* Team Composition */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Composition</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Each team must have 6 players on the court at any given time: 3 in the front row and 3 in the back row.</li>
                <li>Players in the front row are responsible for attacking and blocking, while back-row players defend and assist.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scoring and Gameplay */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scoring & Gameplay</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Points are awarded on every serve for the winning team of the rally (rally-point scoring).</li>
                <li>Players may not hit the ball twice in succession (a block is not considered a hit).</li>
                <li>The ball can be played off the net during a volley and on a serve.</li>
                <li>Any ball that lands on the boundary line is considered in.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ball Rules */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ball Handling Rules</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>It is legal to contact the ball with any part of the body.</li>
                <li>It is illegal to catch, hold, or throw the ball.</li>
                <li>A player cannot block or attack a serve from on or inside the 10-foot line.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Match and Position Rules */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Match & Position Rules</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Matches are played in sets, with the number depending on the level of play.</li>
                <li>Front-line players can switch positions at the net after the serve.</li>
                <li>The ball is out if it hits an antenna, the referee stand, or the ceiling above a non-playable area.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Volleyball Tournament. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default VolleyballRules;
