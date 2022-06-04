import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { InteractionsPage } from "./components/InteractionsPage";
import { JobsPage } from "./components/JobsPage";
import { LandingPage } from "./components/LandingPage";
import { NavBar } from "./components/Nav";
import { Conatiner } from "./components/styled/Container.styled";

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
       </Routes>
     </Router>
     </Conatiner>
    </div>
  );
}
