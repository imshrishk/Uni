import React from "react";

function Text() {
  return (
    <div>
      <h1
        style={{
          margin: 0,
          padding: 0,
          fontSize: 50,
          height:"60px",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          background:
            "transparent linear-gradient(90deg, #C400FF 0%, #E24E56 100%) 0% 0% no-repeat padding-box",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        Sample University Name
      </h1>
    </div>
  );
}

export default Text;
