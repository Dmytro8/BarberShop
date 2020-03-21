import React, { useEffect } from "react";

import classes from "./ServicesSection.module.scss";

import { Service } from "../../components/Service";
import { InitialServicesStateType } from "../../redux/servicesReducer";
import bgServicesDesktop from "../../static/images/bgServices/bgServices-desktop.jpg";
import { SectionTitle } from "../../components/SectionTitle";

export const ServicesSection = ({ services }: InitialServicesStateType) => {
  let bgServicesStyle = {
    backgroundAttachment: "fixed",
    backgroundImage: `url(${bgServicesDesktop})`
  };
  const handlePageOffset = () => {
    const services: any = document.getElementById("services");
    let offset = window.pageYOffset;
    services.style.backgroundPositionY = offset * 0.2 + "px";
  };
  const setServices = () => {
    let servicesComponents = services.map(service => (
      <Service
        key={service.title}
        title={service.title}
        description={service.description}
        cost={service.cost}
      />
    ));
    return servicesComponents;
  };
  useEffect(() => {
    window.addEventListener("scroll", handlePageOffset);
    return () => {
      window.removeEventListener("scroll", handlePageOffset);
    };
  });

  return (
    <section
      id="services"
      className={classes.bgServices}
      style={bgServicesStyle}
    >
      <div className={classes.services}>
        <div className={classes.container}>
          <SectionTitle title={"services"} isOrnamentWhite={false} />
          <div className={classes.servicesContainer}>{setServices()}</div>
        </div>
      </div>
    </section>
  );
};
