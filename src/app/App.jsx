import React from "react";
import { GeneralSection } from "../sections/GeneralSection";
import "./App.scss";

import bgBorderLeft from "../static/images/border_left.png";
import { ServicesSectionContainer } from "../containers/ServicesSectionContainer";
import { BarbersSectionContainer } from "../containers/BarbersSectionContainer";
import { GallerySection } from "../sections/GallerySection";
import { ContactSection } from "../sections/ContactSection";
import { MapSection } from "../sections/MapSection";

export const App = () => {
  let bgBorderLeftStyle = {
    backgroundImage: `url(${bgBorderLeft})`,
    backgroundRepeat: "repeat-y",
    left: "0px",
    bottom: "0px",
    top: "0px",
    width: "4px"
  };

  return (
    <main className="App">
      <div className="borderRight" style={bgBorderLeftStyle}></div>
      <GeneralSection />
      <ServicesSectionContainer />
      <BarbersSectionContainer />
      <GallerySection />
      <ContactSection />
      <MapSection />
    </main>
  );
};
