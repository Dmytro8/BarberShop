import React from "react";

import classes from "./GallerySection.module.scss";
import { GallerySlider } from "../../components/GallerySlider";

export const GallerySection = () => {
  return (
    <section id="gallery" style={{ backgroundColor: "black" }}>
      <GallerySlider />
    </section>
  );
};
