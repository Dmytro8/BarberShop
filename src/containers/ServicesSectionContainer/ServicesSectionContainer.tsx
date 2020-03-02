import { connect } from "react-redux";

import { ServicesSection } from "../../sections/ServicesSection";
import { AppStateType } from "../../redux/reduxStore";
import { ServiceType } from "../../redux/servicesReducer";

type MapStatePropsType = {
  services: Array<ServiceType>;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    services: state.servicesData.services
  };
};

export const ServicesSectionContainer = connect<
  MapStatePropsType,
  {},
  {},
  AppStateType
>(
  mapStateToProps,
  {}
)(ServicesSection);
