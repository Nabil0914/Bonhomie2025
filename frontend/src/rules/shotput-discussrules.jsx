import React from "react";

const DiscusThrowShotPut = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <Header
                title="Discuss Throw & Shot Put"
                subtitle="Showcase your strength and precision in this exciting individual event!"
            />

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6 space-y-12">
                <EventOverview />
                <RulesAndRegulations />
                <AttemptFormat />
            </main>

        </div>
    );
};

const Header = ({ title, subtitle }) => (
    <header className="bg-blue-700 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2">{subtitle}</p>
        </div>
    </header>
);

const Footer = ({ text }) => (
    <footer className="bg-blue-700 text-white py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">{text}</p>
        </div>
    </footer>
);

const EventOverview = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col">
            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Overview</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>Participants compete individually to achieve the longest throw.</li>
                    <li>The event includes two disciplines: Discus Throw and Shot Put.</li>
                    <li>Each athlete is given multiple attempts to achieve their best performance.</li>
                </ul>
            </div>
        </div>
    </section>
);

const RulesAndRegulations = () => (
    <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col">
            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Rules & Regulations</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>The athlete stands at the back half of the circle, facing the front.</li>
                    <li>The discus or shot must be released from within the circle.</li>
                    <li>The athlete must not touch the top of the rim during the throw.</li>
                    <li>The distance is measured from the inner edge of the circle to the point of impact.</li>
                    <li>
                        Throws are considered a foul if:
                        <ul className="list-inside ml-6">
                            <li>The athlete steps outside the circle.</li>
                            <li>The discus or shot lands outside the designated sector.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

const AttemptFormat = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col">
            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Attempt Format</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>Athletes typically get three to six attempts, depending on the competition format.</li>
                    <li>The farthest legal throw counts as the athlete's best distance.</li>
                    <li>The athlete with the longest measured throw is declared the winner.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default DiscusThrowShotPut;
