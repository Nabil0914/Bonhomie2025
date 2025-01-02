import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importing all necessary components for different pages and events

import Home from './components/landingpage';
import Footer from './components/footer';
import EventPage from './sports/sports';
import CulturalPage from './cultural/cultural';

// Importing registration components for boys' sports events
import BoxCricketRegistration from './sports/boys/BoxCricket';
import FootballRegistration from './sports/boys/Football';
import RelayRegistration from './sports/boys/Relay';
import BadmintonRegistration from './sports/boys/Badminton';
import ChessRegistration from './sports/boys/Chess';
import DiscussThrowRegistration from './sports/boys/DisscussThrow';
import PushupsRegistration from './sports/boys/Pushup';
import WeightLiftingRegistration from './sports/boys/Weightlift';
import RunningRaceRegistration from './sports/boys/Race';
import ShotputRegistration from './sports/boys/Shotput';

// Importing registration components for girls' sports events
import GirlsBadmintonRegistration from './sports/girls/Badminton';
import GirlsBoxCrickeRegistration from './sports/girls/BoxCricket';
import GirlsFootballRegistration from './sports/girls/Football';
import GirlsRelayRegistration from './sports/girls/Relay';
import GirlsChessRegistration from './sports/girls/Chess';
import GirlsShotputRegistration from './sports/girls/Shotput';
import GirlsRunningRaceRegistration from './sports/girls/Race';
import GirlsDiscussThrowRegistration from './sports/girls/DisscussThrow';

// Importing registration components for cultural events
import CookingCompetitionRegistration from './cultural/events/cooking';
import DebateRegistration from './cultural/events/debate';
import DoodlingRegistrationForm from './cultural/events/doodling';
import HamdONaatRegistrationForm from './cultural/events/naat';
import MehndiRegistrationForm from './cultural/events/mehendi';
import MushairaRegistrationForm from './cultural/events/mushaira';
import LippanArtRegistrationForm from './cultural/events/lippan';
import PotPaintingRegistrationForm from './cultural/events/potpainting';
import QiratRegistrationForm from './cultural/events/qirat';
import RangoliRegistrationForm from './cultural/events/rangoli';
import VernacularSpeechRegistrationForm from './cultural/events/speech';
import TreasureHuntRegistration from './cultural/events/treasure';
import ZaikaRegistration from './cultural/events/zaika';
import StandupComedyRegistrationForm from './cultural/events/standup';

const App = () => {
    return (
        <div>
            {/* Defining the routing for different pages and events */}
            <Routes>
                {/* Route for home page */}
                <Route path="/" element={<Home />} />

                {/* Route for sports events page */}
                <Route path="/events" element={<EventPage />} />
                
                {/* Route for cultural events page */}
                <Route path="/cultural" element={<CulturalPage />} />

                {/* Routes for boys' sports events */}
                <Route path="/boysboxcricket" element={<BoxCricketRegistration />} />
                <Route path="/boysrelay" element={<RelayRegistration />} />
                <Route path="/boysfootball" element={<FootballRegistration />} />
                <Route path="/boysbadminton" element={<BadmintonRegistration />} />
                <Route path="/boyschess" element={<ChessRegistration />} />
                <Route path="/boysdiscuss" element={<DiscussThrowRegistration />} />
                <Route path="/boyspushup" element={<PushupsRegistration />} />
                <Route path="/boysweightlifting" element={<WeightLiftingRegistration />} />
                <Route path="/boysrunning" element={<RunningRaceRegistration />} />
                <Route path="/boysshotput" element={<ShotputRegistration />} />

                {/* Routes for girls' sports events */}
                <Route path="/girlsbadminton" element={<GirlsBadmintonRegistration />} />
                <Route path="/girlsboxcricket" element={<GirlsBoxCrickeRegistration />} />
                <Route path="/girlsfootball" element={<GirlsFootballRegistration />} />
                <Route path="/girlsrelay" element={<GirlsRelayRegistration />} />
                <Route path="/girlschess" element={<GirlsChessRegistration />} />
                <Route path="/girlsshotput" element={<GirlsShotputRegistration />} />
                <Route path="/girlsrunning" element={<GirlsRunningRaceRegistration />} />
                <Route path="/girlsdiscuss" element={<GirlsDiscussThrowRegistration />} />

                {/* Routes for cultural events registration */}
                <Route path="/cooking" element={<CookingCompetitionRegistration />} />
                <Route path="/debate" element={<DebateRegistration />} />
                <Route path="/doodling" element={<DoodlingRegistrationForm />} />
                <Route path="/naat" element={<HamdONaatRegistrationForm />} />
                <Route path="/mehndi" element={<MehndiRegistrationForm />} />
                <Route path="/mushaira" element={<MushairaRegistrationForm />} />
                <Route path="/lippan" element={<LippanArtRegistrationForm />} />
                <Route path="/potpainting" element={<PotPaintingRegistrationForm />} />
                <Route path="/qirat" element={<QiratRegistrationForm />} />
                <Route path="/rangoli" element={<RangoliRegistrationForm />} />
                <Route path="/speech" element={<VernacularSpeechRegistrationForm />} />
                <Route path="/treasure" element={<TreasureHuntRegistration />} />
                <Route path="/zaika" element={<ZaikaRegistration />} />
                <Route path="/standup" element={<StandupComedyRegistrationForm />} />
            </Routes>

            {/* Footer to be displayed on all pages */}
            <Footer />
        </div>
    );
};

export default App;
