import React, { FC } from "react";

import classes from "./SectionTitle.module.scss";
import ornamentImage from "../../static/images/separator_line.png";
import ornamentImageWhite from "../../static/images/separator_line_white.png";

type PropsType = {
  title: string;
  isOrnamentWhite: boolean;
};

export const SectionTitle: FC<PropsType> = ({ title, isOrnamentWhite }) => {
  return (
    <div>
      <div className={classes.sectionTitle}>
        <h1>{title}</h1>
      </div>
      <div className={classes.separatorWrapper}>
        <div className={classes.separator}>
          {isOrnamentWhite ? (
            <img src={ornamentImageWhite} alt="ornament" />
          ) : (
            <img src={ornamentImage} alt="ornament" />
          )}
        </div>
      </div>
    </div>
  );
};
