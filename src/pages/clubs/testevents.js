import React from "react";
import { useState } from "react";
import Media from "react-media";
import Events from "./Events";


// const Event = [
//     {
//       title: "Sample Event",
//       month: "April",
//       day: "1",
//       sub:"Lorem Ipsum"
//     },
//   ];
  
export default function Testevents ({Event}){
    const [index, setIndex] = useState(0);
    return(<div>
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
                <Events Event={Event} index={index} temp={[0, 1]} />
              ) : (
                <Events Event={Event} index={index} temp={[50, 4]} />
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
      </div>)
}