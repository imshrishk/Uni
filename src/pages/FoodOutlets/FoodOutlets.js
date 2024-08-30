/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Outlet from "../../components/FoodOutlets/Outlet";
import Revoutlet from "../../components/FoodOutlets/revoutlet";
import Footer from "../../components/Footer/Footer";
import footer from "../../assets/images/footer.png";
import { fooddata } from "./fooddata.js";
import svg_1 from "./../../assets/images/FoodOutletssvgs/Food outlets svgs/clipart-red.svg";
import svg_2 from "./../../assets/images/FoodOutletssvgs/Food outlets svgs/Exclusion 5.svg";
import svg_3 from "./../../assets/images/FoodOutletssvgs/Food outlets svgs/Mask Group 11.svg";
import svg_4 from "./../../assets/images/FoodOutletssvgs/Food outlets svgs/Path 50.svg";
import "./FoodOutlets.css";

export default function FoodOutlets() {
  return (
    <div>
      <div className="hero_div">
        <div className="img_div">
          <img src={svg_1} alt="photo" className="svg_1" />
          <img src={svg_2} alt="photo" className="svg_2" />
          <img src={svg_3} alt="photo" className="svg_3" />
          <img src={svg_4} alt="photo" className="svg_4" />
        </div>
        <div className="write_up">
          Have a look at all the food outlets on campus. You'll probably be
          spending most of your money here after all.
        </div>
      </div>
      <div className="backsvg">
        <Outlet fooddata={fooddata.first} id={"one"} />
        <Revoutlet fooddata={fooddata.second} />
        <Outlet fooddata={fooddata.third} />
        <Revoutlet fooddata={fooddata.fourth} />
        <Outlet fooddata={fooddata.fivth} />
        <Revoutlet fooddata={fooddata.sixth} />
        <Outlet fooddata={fooddata.seventh} />
        <Revoutlet fooddata={fooddata.eighth} />
      </div>
      <Footer background={footer} />
    </div>
  );
}
