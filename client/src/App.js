import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { EditInteractionsPage } from "./components/EditInteractionCards";
import { EditJobsPage } from "./components/EditJobCards";
import { InteractionsPage } from "./components/InteractionsPage";
import { JobCards } from "./components/JobCards";
import { JobsPage } from "./components/JobsPage";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/Nav";
import { Conatiner } from "./components/styled/Container.styled";
import { InteractionsCards } from "./components/styled/InteractionsCard";

export default function App() {

  return (
    <div className="App">
      <Conatiner>
     <Router>
       <NavBar />
       <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/jobs" element={<JobsPage />}/>
      <Route path="/interactions" element={<InteractionsPage />}/>
      <Route path="/aboutus" element={<AboutPage />}/>
      <Route path="/jobcards" element={<JobCards />}/>
      <Route path="/interactioncards" element={<InteractionsCards />}/>
      <Route path="/editjobs" element={<EditJobsPage />}/>
      <Route path="/editinteractions" element={<EditInteractionsPage />}/>
       </Routes>
     </Router>
     </Conatiner>
    </div>
  );
}
