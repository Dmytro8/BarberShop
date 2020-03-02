import React, { FC } from "react";

import classes from "./Barber.module.scss";
import { Link } from "react-scroll";
type PropsType = {
  name: string;
  selectedBarber: string;
  setBarber: (name: string) => void;
};

export const Barber: FC<PropsType> = ({ name, selectedBarber, setBarber }) => {
  return (
    <div className={classes.barber}>
      <div className={classes.imgWrapper}>
        <div
          className={
            `${classes.barberImg} ` +
            (selectedBarber === name
              ? classes.selectedBarber
              : classes.notSelectedBarber)
          }
        >
          <Link
            to="selectedBarber"
            spy={true}
            smooth={true}
            duration={1200}
            onClick={() => setBarber(name)}
          >
            <img src={require(`../../static/images/barber.png`)} alt={name} />
          </Link>
        </div>
      </div>

      <div className={classes.barberName}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
