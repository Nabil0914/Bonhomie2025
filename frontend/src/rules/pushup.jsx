import React from "react";

const PushUpEvent = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Push-Up Competition</h1>
          <p className="text-lg mt-2">
            Test your endurance and form in this exciting individual challenge!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 space-y-12">

        {/* Event Overview Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Overview</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>This is an individual endurance event focused on proper push-up form.</li>
                <li>Participants will compete to complete the maximum number of push-ups within 90 seconds.</li>
                <li>Proper form is mandatory, and deviations will result in disqualified repetitions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules for Push-Ups</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Start in a plank position with hands slightly wider than shoulder-width.</li>
                <li>Maintain a straight body line from head to heels.</li>
                <li>Lower your body by bending your elbows until your chest nearly touches the ground.</li>
                <li>Keep elbows tucked close to your body during the movement.</li>
                <li>Fully extend arms at the top of each push-up.</li>
                <li>Each participant has 90 seconds to perform as many push-ups as possible.</li>
                <li>1 warning will be given for improper form; further incorrect push-ups won't be counted.</li>
                <li>The participant with the maximum valid push-ups is declared the winner.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scoring & Tips Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scoring & Tips</h2>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Ensure your chest is close to the ground on each rep for valid scoring.</li>
                <li>Focus on consistent form to avoid disqualifications.</li>
                <li>Practice proper breathing: inhale while lowering and exhale while pushing up.</li>
                <li>Avoid rushing; prioritize quality over speed.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PushUpEvent;
