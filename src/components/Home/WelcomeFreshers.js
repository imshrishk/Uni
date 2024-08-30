import React from 'react';
import "./WelcomeFreshers.css";
import welfreshersbg from "../../assets/home/WelcomeFreshers/welfreshers.svg";
import welfreshers from "../../assets/home/WelcomeFreshers/welcome freshers.svg";
import mobileuiwelcome from "../../assets/home/WelcomeFreshers/mobileui_welcome.svg";
import { useHistory } from 'react-router';

export default function WelcomeFreshers() {
  const history = useHistory();
  return (
    <>
      <div className="welcome-freshers">
        <div className="welcome-freshers-container" style={{ position: "relative" }}>
          <img className='welcomeimg' src={welfreshersbg} alt="freshers-bg" style={{ position: "absolute", top: "1vh", width: "99vw", margin: "5vh 1vw 0 0" }} />
          <img className='mobileuiwelcomeimg' src={mobileuiwelcome} alt="freshers-bg1" style={{ position: "absolute", top: "1vh", width: "99vw", margin: "5vh 1vw 0 0" }} />``
          <p className="welcome-freshers-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sodales odio, a scelerisque velit. Vivamus justo nunc, hendrerit quis metus a, euismod suscipit odio. Aliquam leo ante, consequat vel lectus nec, posuere venenatis nisl. Quisque risus nisi, interdum in est a, faucibus convallis odio.
          </p>
          <button className="explore-btn" onClick={() => {
            history.push('/feg');
          }}>Explore</button>
          <img className="group_photo" src={welfreshers} alt="welfreshers_img" />
        </div>
      </div>
    </>
  )
}
