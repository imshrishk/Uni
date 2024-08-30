/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
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
import { Section } from "./assets/home/scroll";
//import Footer from './components/Footer/Footer'
//import footer from './assets/images/footer.png'
import Typing1 from "./assets/home/scroll";
import TechSenate from "./components/Senates/TechSenate";
import CultSenate from "./components/Senates/CultSenate";
import SportsSenate from "./components/Senates/SportsSenate";
import FoodOutlets from "./pages/FoodOutlets/FoodOutlets";
import Fests from "./pages/Fests/Fests";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar />
        <div
          style={{ height: "10vh", width: "100%", background: "white" }}
        ></div> */}
        <main>
          <Switch>
            <Route exact path="/club">
            <Navbar />
              <div
                style={{ height: "10vh", width: "100%", background: "white" }}
              ></div>
              <Clubs />
            </Route>
            <Route exact path="/feg">
            <Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <FegComponent />
            </Route>

            <Route path="/about" exact  >
            <Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <About/>
            </Route>
            <Route path="/change" exact component={Change} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Change/>
            </Route>
            <Route path="/places" exact component={Places} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Places/>
            </Route>
            <Route path="/studentlife" exact component={Studentlife} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Studentlife/>
            </Route>
            <Route path="/helpandadvice" exact component={HelpAndAdvice} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <HelpAndAdvice/>
            </Route>
            <Route path="/contact" exact component={Contact} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Contact/>
            </Route>
            <Route path="/academic" exact component={Academic} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Academic/>
            </Route>
            <Route path="/fests" exact component={Fests} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Fests/>
            </Route>
            <Route path="/techsenate" exact component={TechSenate} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <TechSenate/>
            </Route>
            <Route path="/cultsenate" exact component={CultSenate} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <CultSenate/>
            </Route>
            <Route path="/sportssenate" exact component={SportsSenate} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <SportsSenate/>
            </Route>
            <Route path="/foodoutlets" exact component={FoodOutlets} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <FoodOutlets/>
            </Route>
            <Route path="/senates" exact component={Senates} ><Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
              <Senates/>
            </Route>
            

            {/* <Redirect to="/" /> */}
            <Route exact path="/" component={Home} >
              
              <Home/>
            </Route>
            <Route exact path="/test" component={Typing1} />

            <Route path="/login" exact component={Signin} ></Route>
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
