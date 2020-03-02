import React from "react";

import classes from "./About.module.scss";
import logo from "../../static/images/logo.png";
import line from "../../static/images/separator_line.png";

export const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.logoString}>
        <a href="/" className={classes.logoLink}>
          <h3 className={`${classes.logoName} ${classes.topLogo}`}>Barber</h3>
          <h3 className={`${classes.logoName} ${classes.bottomLogo}`}>Shop</h3>
        </a>
      </div>
      <div className={classes.wrapperLogo}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={classes.league}>
        <h1>The premium league</h1>
      </div>
      <div className={classes.leagueUndreline}>
        <div>
          <img src={line} alt="line" />
        </div>
      </div>
      <div className={classes.gentelemen}>
        <div>
          <h3>Haircuts&nbsp;&#38;&nbsp;Shaves</h3>
        </div>
        <div>
          <h3>
            <span className={classes.sideLine}>-</span>Stay Sharp, Gentelemen
            <span className={classes.sideLine}>-</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
