import React from "react";

const BoxCricketRules = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="bg-gray-900 text-white py-8 shadow-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Box Cricket Tournament Rules</h1>
                    <p className="text-lg mt-2">
                        Show your skills in this exciting and unique format of cricket!
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6 space-y-12">
                <GeneralRules />
                <ScoringAndBowlingRules />
                <FieldingAndGameplay />
                <UmpireRules />
                <ImportantNotes />
            </main>

        </div>
    );
};

const GeneralRules = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Team players must report to the ground 10 minutes before the match.</li>
                <li>LBW (Leg Before Wicket) is not considered out.</li>
                <li>Each team can have a maximum of 7 players on the field.</li>
                <li>
                    If the ball goes outside the field without bouncing, it will be considered
                    out.
                </li>
                <li>One tap catch is not out.</li>
            </ul>
        </div>
    </section>
);

const ScoringAndBowlingRules = () => (
    <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scoring & Bowling Rules</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
                <li>No-ball or wide ball results in 1 extra run. Runs scored on no-balls will be counted.</li>
                <li>Wickets (Box Out and Run Out) on no-ball are considered out.</li>
                <li>Bowlers can bowl underarm only.</li>
                <li>Bowling at a fast pace will be declared a no-ball.</li>
                <li>3 overs per match: Fresh bowler for every over.</li>
                <li>
                    4 overs in semi-finals and finals: 1 bowler can bowl 2 overs, and 3 bowlers
                    can bowl 1 over each.
                </li>
            </ul>
        </div>
    </section>
);

const FieldingAndGameplay = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fielding & Gameplay</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Statue position is compulsory for bowlers.</li>
                <li>Only the wicketkeeper is allowed behind the wicket.</li>
                <li>2 fielders each are allowed in the off-side and leg-side.</li>
                <li>
                    If the ball goes outside the boundary between the lengths of the pitch, it
                    will be counted as 2 runs.
                </li>
                <li>
                    Only 1 run is valid for running behind the square of the wicketkeeper.
                </li>
            </ul>
        </div>
    </section>
);

const UmpireRules = () => (
    <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Umpire Rules</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
                <li>The umpire's decision will be final.</li>
                <li>Arguments with the umpire will lead to disqualification of the team.</li>
                <li>The captain must ensure the team is on time and adheres to the rules.</li>
                <li>On-time replacements will not be entertained.</li>
            </ul>
        </div>
    </section>
);

const ImportantNotes = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
                <li>
                    It's the captain's responsibility to ensure the team is on time. Failure to do
                    so will result in disqualification.
                </li>
                <li>Requests for replacement or change in match timing will not be entertained.</li>
            </ul>
        </div>
    </section>
);

export default BoxCricketRules;
