import React from "react";
import styles from "./assocs.module.css";
import logo from "../../assets/images/LogosSenates/techsenate/logo.jpg";
import DisplayBox from "./DisplayBox";
import { useHistory } from "react-router-dom";
function Assocs() {

  const history = useHistory();
  const assocsList = [
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
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.heading}>Associations</div>
      <div className={styles.assocs}>
        {assocsList.map((x) => {
          return (
            <div 
            onClick={()=>{
              history.push('/club', {name:x.name, type:"Associations"});
            }} >
            <DisplayBox data={x} className={styles.dispbox}/>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

export default Assocs;
