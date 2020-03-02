import React, { FC } from "react";

import classes from "./SectionTitle.module.scss";
import ornamentImage from "../../static/images/separator_line.png";

type PropsType = {
  title: string;
};

export const SectionTitle: FC<PropsType> = ({ title }) => {
  return (
    <div>
      <div className={classes.sectionTitle}>
        <h1>{title}</h1>
      </div>
      <div className={classes.separatorWrapper}>
        <div className={classes.separator}>
          <img src={ornamentImage} alt="ornament" />
        </div>
      </div>
    </div>
  );
};
