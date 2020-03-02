import React from "react";

import classes from "./Service.module.scss";
import { ServiceType } from "../../redux/servicesReducer";

export const Service = ({ title, description, cost }: ServiceType) => {
  return (
    <div className={classes.service}>
      <div className={classes.titleCost}>
        <div>
          {cost !== "compliment" ? <h2>{title}</h2> : <h2>*{title}</h2>}
        </div>
        <div>{cost !== "compliment" ? <h2>//</h2> : ""}</div>
        <div>{cost !== "compliment" ? <h2>&#36;{cost}</h2> : ""}</div>
      </div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};
