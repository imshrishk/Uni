import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Academic from "./pages/academic/Academic";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Change from "./pages/Change/Change";
import Places from "./pages/Places/Places";
import FegComponent from "./pages/Feg/FegComponent";
import HelpAndAdvice from "./pages/HelpAndAdvice/HelpAndAdvice";
import Navbar from "./components/NavbarNew/Navbar";
import Clubs from "./pages/clubs/clubs";
import Studentlife from "./pages/Studentlife/Studentlife";
import Senates from "./pages/Senates/Senates";
import Signin from "./pages/signin/Signin";
import Footer from "./components/Footer/Footer";
import footer from "./assets/images/footer.png";
import Typing1 from "./assets/home/scroll";
import TechSenate from "./components/Senates/TechSenate";
import CultSenate from "./components/Senates/CultSenate";
import SportsSenate from "./components/Senates/SportsSenate";
import FoodOutlets from "./pages/FoodOutlets/FoodOutlets";
import Fests from "./pages/Fests/Fests";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ height: "0vh", width: "100%", background: "white" }}></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Clubs />} />
          <Route path="/feg" element={<FegComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/change" element={<Change />} />
          <Route path="/places" element={<Places />} />
          <Route path="/studentlife" element={<Studentlife />} />
          <Route path="/helpandadvice" element={<HelpAndAdvice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/fests" element={<Fests />} />
          <Route path="/techsenate" element={<TechSenate />} />
          <Route path="/cultsenate" element={<CultSenate />} />
          <Route path="/sportssenate" element={<SportsSenate />} />
          <Route path="/foodoutlets" element={<FoodOutlets />} />
          <Route path="/senates" element={<Senates />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/test" element={<Typing1 />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
