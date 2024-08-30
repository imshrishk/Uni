import React from "react";
import "./KnowOurTeam.css";
import knowusbg1 from "../../assets/home/KnowOurTeam/knowourteam1.svg";
import knowusbg2 from "../../assets/home/KnowOurTeam/knowourteam2.svg";
import SVG from "./svg";
import { knowourteam } from "./data";
export default function KnowOurTeam() {
  return (
    <>
      <div className="knowus-first">
        <div className="knowus-container">
          <img
            src={knowusbg2}
            alt="knowusbg2"
            style={{ width: "100%" }}
          />
          <div className="knowourteam_images">
            <div className="row1">
              <SVG knowourteam={knowourteam.first} />
              <SVG knowourteam={knowourteam.second} />
            </div>
            <div className="row2">
              <SVG knowourteam={knowourteam.third} />
              <SVG knowourteam={knowourteam.fourth} />
              <SVG knowourteam={knowourteam.fifth} />
              <SVG knowourteam={knowourteam.sixth} />
              <SVG knowourteam={knowourteam.seventh} />
            </div>
          </div>

          <img
            src={knowusbg1}
            alt="knowusbg1"
            style={{
              width: "100%",
              position: "absolute",
              top: "-0.5vh",
              left: "0",
            }}
          />
        </div>
      </div>
    </>
  );
}
