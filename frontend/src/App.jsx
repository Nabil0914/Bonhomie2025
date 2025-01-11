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
import GirlsTugOfWarRegistration from './sports/girls/Tugofwar.jsx';
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
import ChessRules from './rules/chessrules';
import DiscusThrowShotPut from './rules/shotput-discussrules';
import BoxCricketRules from './rules/boxcricketrules';
import BGMIEventRules from './rules/bgmi';
import ThreeLegRaceEvent from './rules/3legrace';
import OpenCricketEventRules from './rules/cricket';
import FootballEventRules from './rules/footballrules';
import PushUpEvent from './rules/pushup';
import RaceEvent from './rules/race';
import RelayRaceEvent from './rules/relay';
import TugOfWarEvent from './rules/tugofwar';
import CookingCompetition from './rules/cooking';
import DebateEvent from './rules/debate';
import DoodlingEvent from './rules/doodling';
import HamdONaatEventRules from './rules/naat.jsx';
import ExtemporeVernacularSpeechEventRules from './rules/speech';
import MehendiEventRules from './rules/mehendi.jsx';
import LippanArtEventRules from './rules/lippan.jsx';
import PotPaintingEventRules from './rules/potpainting';
import QiratEventRules from './rules/qirat';
import RangoliEventRules from './rules/rangoli';
import TreasureHuntEventRules from './rules/treasure';
import FoodStallZaikaEventRules from './rules/zaika';
import MushairaEventRules from './rules/mushaira.jsx';
import StandUpComedyEventRules from './rules/standup.jsx';

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
                <Route path="/boysboxcricket" element={<BoxCricketRegistration />} /> {/* Boys' Box Cricket Registration */}
                <Route path="/boysrelay" element={<RelayRegistration />} /> {/* Boys' Relay Registration */}
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
                <Route path="/girlstugofwar" element={<GirlsTugOfWarRegistration />} /> 
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

                {/* Routes for event rules */}
                <Route path='/Chessrules' element={<ChessRules />} /> {/* Chess Event Rules */}
                <Route path='/shotput-discussrule' element={<DiscusThrowShotPut />} /> {/* Shotput & Discuss Throw Rules */}
                <Route path='/boxcricketrules' element={<BoxCricketRules />} /> {/* Box Cricket Rules */}
                <Route path='/bgmirules' element={<BGMIEventRules />} /> {/* BGMI Event Rules */}
                <Route path='/3legracerules' element={<ThreeLegRaceEvent />} /> {/* Three Leg Race Rules */}
                <Route path='/cricketrules' element={<OpenCricketEventRules />} /> {/* Cricket Rules */}
                <Route path='/footballrules' element={<FootballEventRules />} /> {/* Football Rules */}
                <Route path='/pushuprules' element={<PushUpEvent />} /> {/* Push-Up Event Rules */}
                <Route path='/racerules' element={<RaceEvent />} /> {/* Race Event Rules */}
                <Route path='/relayrules' element={<RelayRaceEvent />} /> {/* Relay Race Event Rules */}
                <Route path='/tugofwarrules' element={<TugOfWarEvent />} /> {/* Tug of War Event Rules */}
                <Route path='/cookingrules' element={<CookingCompetition />} /> {/* Cooking Competition Rules */}
                <Route path='/debaterules' element={<DebateEvent />} />
                <Route path='/doodlingrules' element={<DoodlingEvent />} />
                <Route path='/naatrules' element={<HamdONaatEventRules />} />
                <Route path='/speechrules' element={<ExtemporeVernacularSpeechEventRules />} />
                <Route path='/mehendirules' element={<MehendiEventRules />} />
                <Route path='/lippanrules' element={<LippanArtEventRules />} />
                <Route path='/mushairarules' element={<MushairaEventRules />} />
                <Route path='/potpaintingrules' element={<PotPaintingEventRules />} />
                <Route path='/qiratrules' element={<QiratEventRules />} />
                <Route path='/rangolirules' element={<RangoliEventRules />} />
                <Route path='/treasurehuntrules' element={<TreasureHuntEventRules />} />
                <Route path='/zaikarules' element={<FoodStallZaikaEventRules />} />
                <Route path='/standuprules' element={<StandUpComedyEventRules />} />
                

            </Routes>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
