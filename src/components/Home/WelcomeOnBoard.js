import React from 'react';
import "./WelcomeOnBoard.css";
import bg1 from "../../assets/home/WelcomeOnBoard/bg1.svg";
import bg2 from "../../assets/home/WelcomeOnBoard/bg2.svg";


export default function WelcomeOnBoard() {
  return (
    <>
      <div className="welcome-first">
        <div className="welcome-container">
          <img src={bg2} alt="bg2" style={{ width: "100%" }} />
          <img src={bg1} alt="bg1" style={{ width: "100%", position: "absolute", top: "0.8vh" }} />
          <h1 className="welcome-title">Welcome On Board !</h1>
          <h2 className="welcome-subtitle"><b>Glad to see you...</b></h2>
          <img className="image1" alt="" />
          <img className="image2" alt="" />

          <p className="welcome-text">
            <span className='welcome-text-1'>
              <b>Sample University Name</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sodales odio, a scelerisque velit. Vivamus justo nunc, hendrerit quis metus a, euismod suscipit odio. Aliquam leo ante, consequat vel lectus nec, posuere venenatis nisl. Quisque risus nisi, interdum in est a, faucibus convallis odio.
            </span>
            <span className='welcome-text-2'>
            Integer dapibus placerat est, in ultrices turpis efficitur vel. Curabitur tempus molestie leo, sit amet pharetra lorem. Ut quis dui velit. Quisque accumsan ante faucibus felis imperdiet pharetra et vitae ipsum. Praesent hendrerit neque quis tincidunt semper. Pellentesque id mi non ante sodales volutpat. Pellentesque non dolor laoreet, bibendum tortor in, bibendum libero.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}