import React from "react";

import classes from "./GeneralSection.module.scss";

import bgImage from "../../static/images/bg_general.jpg";
import { SideDrawer } from "../../components/SideDrawer";
import { About } from "../../components/About";

let bgImageStyle = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundImage: `url(${bgImage})`,
  minHeight: "1100px",
  filter: "blur(4px)"
};

export const GeneralSection = () => {
  return (
    <section id="about">
      <div className={classes.wrapper}>
        <div className={classes.backgroundImage}>
          <div style={bgImageStyle}></div>
        </div>
        <div className={classes.content}>
          <About />
          <SideDrawer />
        </div>
      </div>
    </section>
  );
};
