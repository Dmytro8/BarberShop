import React, { FC } from "react";

import classes from "./BarbersSection.module.scss";
import bgBarbersImg from "../../static/images/bgBarbers.jpg";
import { SectionTitle } from "../../components/SectionTitle";
import { BarberSelected } from "../../components/Barber/BarberSelected";

type PropsType = {
  setBarbers: () => Array<JSX.Element>;
  selectedBarber: string;
};

export const BarbersSection: FC<PropsType> = ({
  setBarbers,
  selectedBarber
}) => {
  let bgBarbersStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgBarbersImg})`
  };
  return (
    <section
      id="barbers"
      className={classes.barbersSection}
      style={bgBarbersStyle}
    >
      <div className={classes.wrapper}>
        <SectionTitle title={"barbers"} isOrnamentWhite={false} />
        <div className={classes.barbers}>{setBarbers()}</div>
        <BarberSelected name={selectedBarber} />
      </div>
    </section>
  );
};
