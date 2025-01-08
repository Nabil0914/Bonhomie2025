import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CulturalPage = () => {
    const [formStatus, setFormStatus] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage dropdown menu

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

            const culturalEvents = [
                { imgSrc: "../src/assets/mehendi.jpg", title: "Mehndi", to: "/mehndi", rule: "/mehendirules" },
                { imgSrc: "../src/assets/rangoli.png", title: "Rangoli", to: "/rangoli", rule: "/rangolirules" },
                { imgSrc: "../src/assets/speech.png", title: "Vernacular Speech", to: "/speech", rule: "/speechrules" },
                { imgSrc: "../src/assets/lippan.jpeg", title: "Lippan Art", to: "/lippan", rule: "/lippanrules" },
                { imgSrc: "../src/assets/doodle.png", title: "Doodling", to: "/doodling", rule: "/doodlingrules" },
                { imgSrc: "../src/assets/cooking.jpeg", title: "Cooking Competition", to: "/cooking", rule: "/cookingrules" },
                { imgSrc: "../src/assets/qirat.png", title: "Qirat", to: "/qirat", rule: "/qiratrules" },
                { imgSrc: "../src/assets/treasure.jpeg", title: "Treasure Hunt", to: "/treasure", rule: "/treasurehuntrules" },
                { imgSrc: "../src/assets/standup.png", title: "Stand-Up Comedy", to: "/standup", rule: "/standuprules" },
                { imgSrc: "../src/assets/naat.png", title: "Hamd-o-Naat", to: "/naat", rule: "/naatrules" },
                { imgSrc: "../src/assets/mushaira.jpeg", title: "Mushaira", to: "/mushaira", rule: "/mushairarules" },
                { imgSrc: "../src/assets/pot.jpeg", title: "Pot Painting", to: "/potpainting", rule: "/potpaintingrules" },
                { imgSrc: "../src/assets/debate.png", title: "Debate", to: "/debate", rule: "/debaterules" },
                { imgSrc: "../src/assets/zaika.jpeg", title: "Zaika", to: "/zaika", rule: "/zaikarules" }
            ];
            

    const eventSchedule = [
        { time: "9:00 AM", title: "Opening Ceremony", description: "Ceremonial march and special performances.", venue: "Main Stage" },
        { time: "10:00 AM", title: "Mehndi Competition", description: "Design your own Mehndi patterns.", venue: "Art Hall" },
        { time: "11:30 AM", title: "Stand-Up Comedy", description: "Comedy performances by students.", venue: "Main Stage" },
        { time: "1:00 PM", title: "Cooking Competition", description: "Cook off to impress the judges!", venue: "Food Court" },
        { time: "3:00 PM", title: "Rangoli Contest", description: "Design beautiful Rangoli patterns.", venue: "Art Hall" },
    ];

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

    const renderSchedule = (schedule) => {
        return schedule.map((event, index) => (
            <div key={index} className="mt-8 space-y-6">
                <div className="flex justify-between items-center bg-gray-100 rounded-lg p-6">
                    <div>
                        <h4 className="text-xl text-gray-800 font-semibold">{event.time} - {event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                    </div>
                    <div>
                        <h4 className="text-xl text-gray-800 font-semibold">Venue: {event.venue}</h4>
                    </div>
                </div>
            </div>
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Thank you for your message!');
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-blue-600 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-2xl font-bold">
                        <Link to="/" className="text-white">CulturalFest</Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#culturalEvents" className="hover:text-gray-200">Cultural Events</a>
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
                            <a href="#culturalEvents" className="py-2">Cultural Events</a>
                            <a href="#schedule" className="py-2">Event Schedule</a>
                            <a href="#testimonials" className="py-2">What Participants Say</a>
                            <a href="#contact" className="py-2">Contact</a>
                        </div>
                    </div>
                )}

            </nav>

            {/* Cultural Events Section */}
            <section id="culturalEvents" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-gray-800">Cultural Events</h2>
                    <div className="flex flex-wrap justify-center gap-8 mt-10">
                        {renderCards(culturalEvents)}
                    </div>
                </div>
            </section>

            {/* Event Schedule Section */}
            <section id="schedule" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Event Schedule</h2>
                    {renderSchedule(eventSchedule)}
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">What Participants Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
                            <p className="text-lg text-gray-600">"Bonhomie was an amazing experience! The organization, games, and atmosphere were all top-notch."</p>
                            <h4 className="text-xl font-bold text-gray-800 mt-4">- Mohd Irfan</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold">Get in Touch</h2>
                    <p className="text-lg mt-4">Have questions? Reach out to us today!</p>
                    {formStatus && <p className="mt-4 text-lg text-white">{formStatus}</p>}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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

export default CulturalPage;
