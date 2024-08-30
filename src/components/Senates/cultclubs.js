import React from "react";
import styles from "./assocs.module.css";
import logo from "../../assets/images/LogosSenates/techsenate/logo.jpg";
import DisplayBox from "./DisplayBox";

function CultClubs() {
  const clubsList = [
    {
      id: 1,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 2,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 3,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 4,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 5,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 6,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 7,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 8,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 9,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 10,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 11,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 12,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 13,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 14,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 15,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 16,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 17,
      url: logo,
      name: "Sample Name",
    },
    {
      id: 18,
      url: logo,
      name: "Sample Name",
    },
  ];
  return (
    <div className={styles.outer}>
      <div className={styles.assocs}>
        {clubsList.map((x) => {
          return (
            <DisplayBox data={x} />
            // <div className={styles.assoc}>
            //     <div className={styles.logo}><img src={x.url} width={150} className={styles.logoimg}></img></div>
            //     <h6 className={styles.assoc_title}>{x.club}</h6>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default CultClubs;
