import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const EventPage = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const EventCard = ({ imgSrc, title, to, rule }) => {
            return (
                <div className="w-72 h-80 card-container">
                    <div className="card">
                        <div className="card-face card-front">
                            <img
                                src={imgSrc}
                                alt={title}
                                className="w-full h-48 rounded-lg object-cover"
                            />
                            <h4 className="text-xl font-semibold mt-4">{title}</h4>
                        </div>
                        <div className="card-face card-back">
                            <h4 className="text-2xl font-bold mb-10">{title}</h4>
                            <Link to={to} className="register-link px-4 py-2 mb-7 font-bold rounded">
                                Register
                            </Link>
                            {rule ? (
                                <Link to={rule} className="register-link px-4 py-2 mb-7 font-bold rounded">
                                    View Rules
                                </Link>
                            ) : (
                                <p className="text-gray-500">Rules not available</p>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        const boysIndividualEvents = [
            { imgSrc: "../src/assets/chess.png", title: "Chess", to: "/boyschess" },
            { imgSrc: "../src/assets/carrom.png", title: "Carrom", to: "/boyscarrom" },
            { imgSrc: "../src/assets/running.png", title: "Race 100m", to: "/boysrunning" },
            { imgSrc: "../src/assets/discussthrow.png", title: "Discuss Throw", to: "/boysdiscuss" },
            { imgSrc: "../src/assets/shotput.jpeg", title: "Shot Put", to: "/boysshotput" },
            { imgSrc: "../src/assets/badminton.png", title: "Badminton", to: "/boysbadminton" },
            { imgSrc: "../src/assets/tabletennis.png", title: "Table Tennis", to: "/boystabletennis" },
            { imgSrc: "../src/assets/pushup.png", title: "Pushups", to: "/boyspushup" },
        ];
        
        const boysGroupEvents = [
            { imgSrc: "../src/assets/cricket.jpeg", title: "Cricket", to: "/boyscricket" },
            { imgSrc: "../src/assets/boxcricket.png", title: "Box Cricket", to: "/boysboxcricket" },
            { imgSrc: "../src/assets/football.png", title: "Football", to: "/boysfootball" },
            { imgSrc: "../src/assets/volleyball.png", title: "VolleyBall", to: "/boysvolleyball" },
            { imgSrc: "../src/assets/relay.png", title: "Relay Race", to: "/boysrelay" },
            { imgSrc: "../src/assets/BGMI.webp", title: "BGMI", to: "/boysBGMI" },
            
            
        ];
        
        const girlsIndividualEvents = [
            { imgSrc: "../src/assets/chess.png", title: "Chess", to: "/girlschess" },
            { imgSrc: "../src/assets/carrom.png", title: "Carrom", to: "/girlscarrom" },
            { imgSrc: "../src/assets/badminton.png", title: "Badminton", to: "/girlsbadminton" },
            { imgSrc: "../src/assets/running.png", title: "Race 100m", to: "/girlsrunning" },
            { imgSrc: "../src/assets/shotput.jpeg", title: "Shot Put", to: "/girlsshotput" },
            { imgSrc: "../src/assets/discussthrow.png", title: "Discuss Throw", to: "/girlsdiscuss" },
            { imgSrc: "../src/assets/armwrestling.png", title: "Arm Wrestling", to: "/girlsarmwrestling" },
        ];
        
        const girlsGroupEvents = [
            { imgSrc: "../src/assets/boxcricket.png", title: "Box Cricket", to: "/girlsboxcricket" },
            { imgSrc: "../src/assets/throwball.jpg", title: "ThrowBall", to: "/girlsthrowball" },
            { imgSrc: "../src/assets/football.png", title: "Football", to: "/girlsfootball" },
            { imgSrc: "../src/assets/volleyball.png", title: "VolleyBall", to: "/girlsvolleyball" },
            { imgSrc: "../src/assets/relay.png", title: "Relay Race", to: "/girlsrelay" },
            { imgSrc: "../src/assets/threelegrace.jpg", title: "Three Leg Race", to: "/girlsthreelegrace" },
            
            
        ];
        
    // const eventSchedule = [
    //     { time: "9:00 AM", title: "Opening Ceremony", description: "Ceremonial march and special performances.", venue: "Football Ground" },
    //     { time: "9:30 AM", title: "Basketball", description: "Team basketball competition.", venue: "Basketball Court" },
    //     { time: "10:30 AM", title: "Track Events", description: "100m, 200m, and 4x100m relay.", venue: "Track Field" },
    //     { time: "12:00 PM", title: "Lunch Break", description: "Lunch served at the main cafeteria.", venue: "Cafeteria" },
    //     { time: "2:00 PM", title: "Final Match", description: "Football and Basketball finals.", venue: "Stadium" },
    // ];

    const [selectedCategory, setSelectedCategory] = useState("boysIndividual");

    const renderCards = (events) => {
        return events.map((event, index) => (
            <EventCard
                key={index}
                imgSrc={event.imgSrc}
                title={event.title}
                to={event.to}
                rule={event.rule}
            />
        ));
    };

    // const renderSchedule = (schedule) => {
    //     return schedule.map((event, index) => (
    //         <div key={index} className="mt-8 space-y-6">
    //             <div className="flex justify-between items-center bg-gray-100 rounded-lg p-6">
    //                 <div>
    //                     <h4 className="text-xl text-gray-800 font-semibold">{event.time} - {event.title}</h4>
    //                     <p className="text-gray-600">{event.description}</p>
    //                 </div>
    //                 <div>
    //                     <h4 className="text-xl text-gray-800 font-semibold">Venue: {event.venue}</h4>
    //                 </div>
    //             </div>
    //         </div>
    //     ));
    // };

    return (
        
        <div>
            <nav className="bg-blue-600 text-white py-4">
                            <div className="container mx-auto flex justify-between items-center px-4">
                                <div className="text-2xl font-bold">
                                    <Link to="/" className="text-white">SportsFest</Link>
                                </div>
                                <div className="hidden md:flex space-x-8">
                                    <a href="#sports" className="hover:text-gray-200">Sports Events</a>
                                    <a href="#schedule" className="hover:text-gray-200">Event Schedule</a>
                                    <a href="#testimonials" className="hover:text-gray-200">What Participants Say</a>
                                    <a href="#contact" className="hover:text-gray-200">Contact</a>
                                </div>
                                <div className="md:hidden">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="text-white focus:outline-none"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {isMenuOpen && (
                                <div className="md:hidden bg-blue-600 text-white py-4">
                                    <div className="flex flex-col items-start space-y-2 ml-4">  {/* Added 'items-start' and 'ml-4' */}
                                        <a href="#culturalEvents" className="py-2">Sports Events</a>
                                        <a href="#schedule" className="py-2">Event Schedule</a>
                                        <a href="#testimonials" className="py-2">What Participants Say</a>
                                        <a href="#contact" className="py-2">Contact</a>
                                    </div>
                                </div>
                            )}
            
                        </nav>
            {/* Button Section */}
            <div id="sports" className="flex justify-center flex-wrap p-6 gap-6">
                <button
                    onClick={() => setSelectedCategory("boysIndividual")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Boys Individual Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("boysGroup")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Boys Group Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("girlsIndividual")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Girls Individual Sports
                </button>

                <button
                    onClick={() => setSelectedCategory("girlsGroup")}
                    className="w-60 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Girls Group Sports
                </button>
            </div>

            <div>
                {/* Boys Individual Sports */}
                {selectedCategory === "boysIndividual" && (
                    <section id="boysIndividualSports" className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-gray-800">
                                Boys Individual Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(boysIndividualEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Boys Group Sports */}
                {selectedCategory === "boysGroup" && (
                    <section id="boysGroupSports" className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-gray-800">
                                Boys Group Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(boysGroupEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Girls Individual Sports */}
                {selectedCategory === "girlsIndividual" && (
                    <section id="girlsIndividualSports" className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-gray-800">
                                Girls Individual Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(girlsIndividualEvents)}
                            </div>
                        </div>
                    </section>
                )}

                {/* Girls Group Sports */}
                {selectedCategory === "girlsGroup" && (
                    <section id="girlsGroupSports" className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <h2 className="text-center text-3xl font-semibold text-gray-800">
                                Girls Group Sports Events
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6 mt-10">
                                {renderCards(girlsGroupEvents)}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Event Schedule Section
            <section id="schedule" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Event Schedule</h2>
                    {renderSchedule(eventSchedule)}
                </div>
            </section> */}

<section id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-gray-600">"The sports event was exhilarating! The energy and enthusiasm of everyone made it a memorable experience."</p>
                <h4 className="text-xl font-bold text-gray-800 mt-4">- Shaikh Irfan, BScIT</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-gray-600">"The organization of the event was impeccable. It was great to see such passion and teamwork on display."</p>
                <h4 className="text-xl font-bold text-gray-800 mt-4">- Fiza Peerkhan, Data Science</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-lg text-gray-600">"Participating in this sports event was a highlight of my college life. Kudos to the organizers for such a fantastic experience!"</p>
                <h4 className="text-xl font-bold text-gray-800 mt-4">- Aayesha Pasha, SOET</h4>
            </div>
        </div>
    </div>
</section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold">Get in Touch</h2>
                    <p className="text-lg mt-4">Have questions? Reach out to us today!</p>
                    <form className="mt-8 space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-md bg-gray-100 text-gray-800"
                            aria-label="Name"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 rounded-md bg-gray-100 text-gray-800"
                            aria-label="Email"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-4 rounded-md bg-gray-100 text-gray-800"
                            aria-label="Message"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EventPage;
