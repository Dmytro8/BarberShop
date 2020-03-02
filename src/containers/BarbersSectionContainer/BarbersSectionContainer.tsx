import React, { useState } from "react";
import { connect } from "react-redux";
import { BarbersSection } from "../../sections/BarbersSection";
import { AppStateType } from "../../redux/reduxStore";
import { BarberType } from "../../redux/barbersReducer";
import { Barber } from "../../components/Barber";

type MapStatePropsType = {
  barbers: Array<BarberType>;
};
type PropsType = MapStatePropsType;

const BarbersSectionContainer: React.FC<PropsType> = ({ barbers }) => {
  const [barber, setBarber] = useState(barbers[0].name);
  let selectedBarber = barber;
  const setBarbers = () => {
    let barbersComponents = barbers.map(barber => {
      // @ts-ignore
      return (
        <Barber
          name={barber.name}
          selectedBarber={selectedBarber}
          setBarber={setBarber}
        />
      );
    });
    return barbersComponents;
  };
  return (
    <BarbersSection setBarbers={setBarbers} selectedBarber={selectedBarber} />
  );
};

const mapStateToProps = (state: AppStateType) => ({
  barbers: state.barbersData.barbers
});

export default connect<MapStatePropsType, {}, {}, AppStateType>(
  mapStateToProps,
  {}
)(BarbersSectionContainer);
