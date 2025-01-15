import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importing all necessary components for different pages and events

import Home from './components/landingpage';
import Footer from './components/footer';
import EventPage from './sports/sports';
import CulturalPage from './cultural/cultural';
import TechnicalPage from './technical/technical.jsx';

// Importing registration components for boys' sports events
import BoxCricketRegistration from './sports/boys/BoxCricket';
import FootballRegistration from './sports/boys/Football';
// import RelayRegistration from './sports/boys/Relay';
import BadmintonRegistration from './sports/boys/Badminton';
import ChessRegistration from './sports/boys/Chess';
import DiscussThrowRegistration from './sports/boys/DisscussThrow';
import PushupsRegistration from './sports/boys/Pushup';
import RunningRaceRegistration from './sports/boys/Race';
import ShotputRegistration from './sports/boys/Shotput';
import VolleyballRegistration from './sports/boys/volleyball.jsx';
import BGMIRegistrationForm from './sports/boys/BGMI.jsx';
import CricketRegistration from './sports/boys/Cricket.jsx';
import CarromRegistration from './sports/boys/Carrom.jsx';
import TabletennisRegistration from './sports/boys/Tabletennis.jsx';

// Importing registration components for girls' sports events
import GirlsBadmintonRegistration from './sports/girls/Badminton';
import GirlsBoxCrickeRegistration from './sports/girls/BoxCricket';
import GirlsFootballRegistration from './sports/girls/Football';
import GirlsRelayRegistration from './sports/girls/Relay';
import GirlsChessRegistration from './sports/girls/Chess';
import GirlsShotputRegistration from './sports/girls/Shotput';
import GirlsRunningRaceRegistration from './sports/girls/Race';
import GirlsDiscussThrowRegistration from './sports/girls/DisscussThrow';
import GirlsVolleyballRegistration from './sports/girls/Volleyball.jsx';
import GirlsThreeLegRaceRegistration from './sports/girls/Threelegrace.jsx';
import GirlsThrowBallRegistration from './sports/girls/Throwball.jsx';
import GirlsArmwrestlingRegistration from './sports/girls/Armwrestling.jsx';
import GirlsCarromRegistration from './sports/girls/Carrom.jsx';

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
import ExtemporeRegistration from './cultural/events/extempore.jsx';
import VlogRegistration from './cultural/events/vlog.jsx';

// import PPTRegistration from './technical/events/ppt.jsx';
import PosterRegistration from './technical/events/poster.jsx';
import AutoCadRegistration from './technical/events/autocad.jsx';
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

                {/* Route for technical events page */}
                <Route path="/technical" element={<TechnicalPage />} />

                {/* Routes for boys' sports events */}
                <Route path="/boysboxcricket" element={<BoxCricketRegistration />} /> {/* Boys' Box Cricket Registration */}
                {/* <Route path="/boysrelay" element={<RelayRegistration />} /> Boys' Relay Registration */}
                <Route path="/boysfootball" element={<FootballRegistration />} /> {/* Boys' Football Registration */}
                <Route path="/boysbadminton" element={<BadmintonRegistration />} /> {/* Boys' Badminton Registration */}
                <Route path="/boyschess" element={<ChessRegistration />} /> {/* Boys' Chess Registration */}
                <Route path="/boysdiscuss" element={<DiscussThrowRegistration />} /> {/* Boys' Discuss Throw Registration */}
                <Route path="/boyspushup" element={<PushupsRegistration />} /> {/* Boys' Pushups Registration */}
                <Route path="/boysrunning" element={<RunningRaceRegistration />} /> {/* Boys' Running Race Registration */}
                <Route path="/boysshotput" element={<ShotputRegistration />} /> {/* Boys' Shotput Registration */}
                <Route path="/boysvolleyball" element={<VolleyballRegistration />} /> 
                <Route path="/boysBGMI" element={<BGMIRegistrationForm/>} /> 
                <Route path="/boyscricket" element={<CricketRegistration />} /> 
                <Route path="/boyscarrom" element={<CarromRegistration />} /> 
                <Route path="/boystabletennis" element={<TabletennisRegistration/>} />

                {/* Routes for girls' sports events */}
                <Route path="/girlsbadminton" element={<GirlsBadmintonRegistration />} /> {/* Girls' Badminton Registration */}
                <Route path="/girlsboxcricket" element={<GirlsBoxCrickeRegistration />} /> {/* Girls' Box Cricket Registration */}
                <Route path="/girlsfootball" element={<GirlsFootballRegistration />} /> {/* Girls' Football Registration */}
                <Route path="/girlsrelay" element={<GirlsRelayRegistration />} /> {/* Girls' Relay Registration */}
                <Route path="/girlschess" element={<GirlsChessRegistration />} /> {/* Girls' Chess Registration */}
                <Route path="/girlsshotput" element={<GirlsShotputRegistration />} /> {/* Girls' Shotput Registration */}
                <Route path="/girlsrunning" element={<GirlsRunningRaceRegistration />} /> {/* Girls' Running Race Registration */}
                <Route path="/girlsdiscuss" element={<GirlsDiscussThrowRegistration />} /> {/* Girls' Discuss Throw Registration */}
                <Route path="/girlsvolleyball" element={<GirlsVolleyballRegistration/>} /> 
                <Route path="/girlsthreelegrace" element={<GirlsThreeLegRaceRegistration/>} /> 
                <Route path="/girlsthrowball" element={<GirlsThrowBallRegistration />} />
                <Route path="/girlsarmwrestling" element={<GirlsArmwrestlingRegistration />} />
                <Route path="/girlscarrom" element={<GirlsCarromRegistration/>} /> 
                
                
                {/* Routes for cultural events registration */}
                <Route path="/cooking" element={<CookingCompetitionRegistration />} /> {/* Cooking Competition Registration */}
                <Route path="/debate" element={<DebateRegistration />} /> {/* Debate Registration */}
                <Route path="/doodling" element={<DoodlingRegistrationForm />} /> {/* Doodling Registration */}
                <Route path="/naat" element={<HamdONaatRegistrationForm />} /> {/* Hamd-O-Naat Registration */}
                <Route path="/mehndi" element={<MehndiRegistrationForm />} /> {/* Mehndi Registration */}
                <Route path="/mushaira" element={<MushairaRegistrationForm />} /> {/* Mushaira Registration */}
                <Route path="/lippan" element={<LippanArtRegistrationForm />} /> {/* Lippan Art Registration */}
                <Route path="/potpainting" element={<PotPaintingRegistrationForm />} /> {/* Pot Painting Registration */}
                <Route path="/qirat" element={<QiratRegistrationForm />} /> {/* Qirat Registration */}
                <Route path="/rangoli" element={<RangoliRegistrationForm />} /> {/* Rangoli Registration */}
                <Route path="/speech" element={<VernacularSpeechRegistrationForm />} /> {/* Vernacular Speech Registration */}
                <Route path="/treasure" element={<TreasureHuntRegistration />} /> {/* Treasure Hunt Registration */}
                <Route path="/zaika" element={<ZaikaRegistration />} /> {/* Zaika Food Stall Registration */}
                <Route path="/standup" element={<StandupComedyRegistrationForm />} /> {/* Stand-up Comedy Registration */}
                <Route path="/extempore" element={<ExtemporeRegistration />} /> {/* Stand-up Comedy Registration */}
                <Route path="/vlog" element={<VlogRegistration />} /> {/* Stand-up Comedy Registration */}
                <Route path="/autocad" element={<AutoCadRegistration />} /> {/* Stand-up Comedy Registration */}
                <Route path="/poster" element={<PosterRegistration/>} /> {/* Stand-up Comedy Registration */}
                {/* <Route path="/ppt" element={<PPTRegistration />} /> Stand-up Comedy Registration */}
                
                
            </Routes>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
