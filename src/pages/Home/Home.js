/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import path1 from "../../assets/home/hero/path1.svg";
import path2 from "../../assets/images/video/Coverup.svg";
import heroImg from "../../assets/home/hero/heroImg.svg";
import dp from "../../assets/home/hero/sample.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import bgvideo from '../../assets/images/video/sample.mp4'
import footer from "../../assets/images/footer.png";
import Footerdark from '../../assets/images/Footerdark.svg'

import Text from "./Text";

import overlay from '../../assets/images/video/Overlay.svg'

import CampusEvents from "../../components/Home/CampusEvents";
import WelcomeOnBoard from "../../components/Home/WelcomeOnBoard";
import OurInitiatives from "../../components/Home/OurInitiatives";
import "./Home.css";
import WelcomeFreshers from "../../components/Home/WelcomeFreshers";
import KnowOurTeam from "../../components/Home/KnowOurTeam";
import Typing1 from "../../assets/home/scroll";
import News from "../../assets/home/news";
import Media from "react-media";
import Navbar from "../../components/NavbarNew/Navbar";
import LOGO from '../../assets/home/hero/logo.jpg'
import { useHistory } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState("Innovate");
  const [counterText, setCounterText] = useState("Innovate");

  setTimeout(() => {
    if (counterText === "Innovate") {
      setCounterText("Achieve");
    } else if (counterText === "Achieve") {
      setCounterText("Lead");
    } else if (counterText === "Lead") {
      setCounterText("Innovate");
    }
  }, 4000);

  //animation
  const counterV = {
    state1: { y: 100, opacity: 0 },
    state2: { y: 0, opacity: 1 },
    transition: {
      delay: 100,
    },
  };

  const Event = [
    {
      title: "Event A",
      month: "January",
      day: "12",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem sapien. Duis tempor leo sodales sem aliquam, non iaculis neque lobortis. Mauris volutpat maximus ante, maximus tincidunt urna vulputate vel. Sed ac semper orci, ac varius ligula. Morbi sit amet venenatis massa. Sed interdum pharetra odio, et dictum eros euismod et. Morbi feugiat pretium nibh. Duis quam eros, auctor at fringilla ut, gravida id est. Cras a ligula sed tellus ultricies convallis. Vestibulum leo eros, egestas pretium velit at, lobortis pharetra nisl. Ut efficitur diam in rhoncus porttitor."
    },
    {
      title: "Event B",
      month: "January",
      day: "20",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem sapien. Duis tempor leo sodales sem aliquam, non iaculis neque lobortis. Mauris volutpat maximus ante, maximus tincidunt urna vulputate vel. Sed ac semper orci, ac varius ligula. Morbi sit amet venenatis massa. Sed interdum pharetra odio, et dictum eros euismod et. Morbi feugiat pretium nibh. Duis quam eros, auctor at fringilla ut, gravida id est. Cras a ligula sed tellus ultricies convallis. Vestibulum leo eros, egestas pretium velit at, lobortis pharetra nisl. Ut efficitur diam in rhoncus porttitor."
    },
    {
      title: "Event C",
      month: "January",
      day: "14",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem sapien. Duis tempor leo sodales sem aliquam, non iaculis neque lobortis. Mauris volutpat maximus ante, maximus tincidunt urna vulputate vel. Sed ac semper orci, ac varius ligula. Morbi sit amet venenatis massa. Sed interdum pharetra odio, et dictum eros euismod et. Morbi feugiat pretium nibh. Duis quam eros, auctor at fringilla ut, gravida id est. Cras a ligula sed tellus ultricies convallis. Vestibulum leo eros, egestas pretium velit at, lobortis pharetra nisl. Ut efficitur diam in rhoncus porttitor."
    },
    {
      title: "Event D",
      month: "January",
      day: "18",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem sapien. Duis tempor leo sodales sem aliquam, non iaculis neque lobortis. Mauris volutpat maximus ante, maximus tincidunt urna vulputate vel. Sed ac semper orci, ac varius ligula. Morbi sit amet venenatis massa. Sed interdum pharetra odio, et dictum eros euismod et. Morbi feugiat pretium nibh. Duis quam eros, auctor at fringilla ut, gravida id est. Cras a ligula sed tellus ultricies convallis. Vestibulum leo eros, egestas pretium velit at, lobortis pharetra nisl. Ut efficitur diam in rhoncus porttitor."
    },
    {
      title: "Event E",
      month: "January",
      day: "16",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem sapien. Duis tempor leo sodales sem aliquam, non iaculis neque lobortis. Mauris volutpat maximus ante, maximus tincidunt urna vulputate vel. Sed ac semper orci, ac varius ligula. Morbi sit amet venenatis massa. Sed interdum pharetra odio, et dictum eros euismod et. Morbi feugiat pretium nibh. Duis quam eros, auctor at fringilla ut, gravida id est. Cras a ligula sed tellus ultricies convallis. Vestibulum leo eros, egestas pretium velit at, lobortis pharetra nisl. Ut efficitur diam in rhoncus porttitor."
    },
  ];

  const Initiatives = [
    {
      title: "Initiative A",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      sub1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sodales odio, a scelerisque velit. Vivamus justo nunc, hendrerit quis metus a, euismod suscipit odio."

    },
    {
      title: "Initiative B",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      sub1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sodales odio, a scelerisque velit. Vivamus justo nunc, hendrerit quis metus a, euismod suscipit odio."
    },
    {
      title: "Initiative C",
      sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      sub1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sodales odio, a scelerisque velit. Vivamus justo nunc, hendrerit quis metus a, euismod suscipit odio."
    },
    {
      title: "The heading and heading part2",
    },
    {
      title: "The heading and heading part2",
    },
    {
      title: "The heading and heading part2",
    },
  ];
  const history = useHistory();
  const [loading, setLoading] = useState(history.length <= 2);
  const setSpinner = (x)=>{
    console.log(history.length);
    if(history.length >1){
      x = false;
    }
    setLoading(x);
  }

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <div>
      { !loading ? (
      <div>
      <Navbar />
                  <div
                    style={{ height: "10vh", width: "100%", background: "white" }}
                  ></div>
      <div style={{ position: "relative" }}>
        <video alt="path1" style={{ width: "100%", position:"absolute"}} autoPlay loop muted>
          <source src={bgvideo} type="video/mp4"/>
        </video>
        <img src={overlay} alt="path1" style={{ width: "100%", position:"absolute" }} />
        <object
          type="image/svg+xml"
          data={heroImg}
          style={{ position: "absolute", top: 100, right: 20, width: "50vw" }}
        >
          <param name="param1" value={dp} />
        </object>
        
        <div style={{ position: "relative", top: 100, paddingLeft: 30 }}>
          <Text />
          <div
            style={{
              height: "50px",
              marginTop:"20px",
              textAlign: "left",
              font: "normal normal 800 30px/49px Montserrat",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: "1",
            }}
          >
            Sample Text
          </div>
          <Typing1 />
        </div>
      </div>
      {/* <News/> */}
      {/* Campus News */}
      <div style={{width:"100%", height:"38vh"}}></div>
      <h5 style={{ margin: "50px", marginTop: "30px", position:"absolute", marginBottom:"20vh" }}>
        <b
          style={{
            position: "absolute",
            zIndex: "100",
            backgroundColor: "white",
            padding: "0 1px 0 8px",
          }}
        >
          Campus News:{" "}
        </b>
        <div className="hwrap">
          <div className="scroll-text">
            {/* trial 2 */}
            {/* for the animation to work the content inside the following 2 divs must be same so just copy the same news twice  */}
            <div className="hitem">
              News1<span> Lorem ipsum dolor sit amet {"   "}</span>
              <span> Morbi id sodales odio, a scelerisque velit. </span>
              <span> Aliquam leo ante, consequat vel lectus nec </span>
              <span> ABCD </span>
              <span> Quisque risus nisi, interdum in est a </span>
              <span> Curabitur tempus molestie leo, sit amet pharetra lorem. </span>
            </div>

            <div className="hitem">
            News1<span> Lorem ipsum dolor sit amet {"   "}</span>
              <span> Morbi id sodales odio, a scelerisque velit. </span>
              <span> Aliquam leo ante, consequat vel lectus nec </span>
              <span> ABCD </span>
              <span> Quisque risus nisi, interdum in est a </span>
              <span> Curabitur tempus molestie leo, sit amet pharetra lorem. </span>
            </div>
          </div>
        </div>
      </h5>

      {/* Welcome On Board */}

      <div style={{marginTop:"100px"}}>
        <WelcomeOnBoard />
      </div>

      {/* Campus Events */}
      <div >
        <p className="header">Our Events</p>
        <div className="container">
          <button
            disabled={index <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw" }}
            onClick={() => {
              setIndex(index - 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>
          <Media query="(max-width: 1000px)">
            {(matches) => {
              return matches ? (
                <CampusEvents Event={Event} index={index} temp={[0, 1]} />
              ) : (
                <CampusEvents Event={Event} index={index} temp={[50, 4]} />
              );
            }}
          </Media>

          <button
            disabled={
              index === 4 * (Math.ceil(Event.length / 4) - 1) ? true : false
            }
            className="more"
            style={{ right: "5vw" }}
            onClick={() => {
              setIndex(index + 4);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Welcome Freshers */}

      <div>
        <p className="header">Welcome Freshers</p>
        <WelcomeFreshers />
      </div>

      {/* SU Initiaves */}

      <div>
        <p
          className="header"
          style={{ marginTop: "-3vh", marginBottom: "4vh" }}
        >
          Our Initiatives
        </p>
        <div
          className="container"
          style={{ width: "100vw", flexDirection: "row !important" }}
        >
          <button
            disabled={count <= 0 ? true : false}
            className="more more-left"
            style={{ left: "5vw" }}
            onClick={() => {
              setCount(count - 3);
            }}
          >
            <i className="fa fa-lg fa-chevron-left" aria-hidden="true"></i>
          </button>

          <Media query="(max-width: 1000px)">
            {(matches) => {
              return matches ? (
                <OurInitiatives Event={Initiatives} index={count} temp={1} />
              ) : (
                <OurInitiatives Event={Initiatives} index={count} temp={3} />
              );
            }}
          </Media>

          <button
            disabled={
              count === 3 * (Math.ceil(Initiatives.length / 3) - 1)
                ? true
                : false
            }
            className="more"
            style={{ right: "5vw" }}
            onClick={() => {
              setCount(count + 3);
            }}
          >
            <i className="fa fa-lg fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Know Your SUC */}

      <div>
        <p className="header">Our Team</p>
        <KnowOurTeam />
      </div>

      {/* Built By */}

      <div>
        <p className="header">Our Sponsors</p>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div class="flex-container-contri">
            <div class="dot">
              <img src={LOGO} style={{width:"130%", height:"125%"}}/>
            </div>
            <div class="dot">
              <img src={LOGO} style={{width:"130%", height:"125%"}}/>
            </div>
            <div class="dot">
              <img src={LOGO} style={{width:"125%", height:"125%"}}/>
            </div>
            <div class="dot">
              <img src={LOGO} style={{width:"125%", height:"125%"}}/>
            </div>
          </div>

          <button className="contri-btn">Contributors</button>
        </div>
      </div>
      <Footer background={Footerdark} />
      </div>
      ) : 
      (<div style={{height:"100vh", width:"100%", background:"black", position:"absolute"}}>
        <div style={{marginTop:"50vh", marginLeft:"47vw"}}></div>

      </div>)
        }
    </div>
  );
}

export default Home;