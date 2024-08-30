import React from "react";
import senatescss from "./Senates.module.css";
import Logo from "../../components/Senates/logo";
import { data } from "./logos";

export default function senates() {
  return (
    <div>  
      <p
        className={senatescss.heading}
        style={{ marginTop: "8rem", marginLeft: "5rem" }}
      >
        Associations
      </p>
      <div className={senatescss.container}>
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      <Logo name={data.sample.Name} logo={data.sample.Logo} />
      </div>

      <p
        className={senatescss.heading}
        style={{ marginTop: "8rem", marginLeft: "5rem" }}
      >
        Clubs
      </p>
      <div className={senatescss.container}>
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
        <Logo name={data.sample.Name} logo={data.sample.Logo} />
      </div>
    </div>
  );
}
