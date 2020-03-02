import React, { FC } from "react";

import classes from "./BarberSelected.module.scss";

import borderImg from "../../../static/images/barber_box_border.png";
import barberImg from "../../../static/images/barber.png";

type PropsType = {
  name: string;
};

export const BarberSelected: FC<PropsType> = ({ name }) => {
  let borderStyle = {
    backgroundImage: `url(${borderImg})`,
    backgroundRepeat: "repeat-x",
    height: "4px"
  };
  return (
    <div id="selectedBarber" className={classes.selectedBarber}>
      <div style={borderStyle}></div>
      <div className={classes.barberWrapper}>
        <div className={classes.barberImg}>
          <img src={barberImg} alt="barber" />
        </div>
        <div className={classes.barberInfo}>
          <div className={classes.barberName}>
            <h2>{name}</h2>
          </div>
          <div className={classes.instagramLink}>
            <a href="http://instagram.com">@thepremiumleague</a>
          </div>
          <div className={classes.bookOnline}>
            <a href="/">book online</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
