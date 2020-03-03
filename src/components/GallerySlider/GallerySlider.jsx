import React, { FC } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./GallerySlider.module.scss";

const CustomArrow = ({ direction, ...props }) => {
  let styleNextArrow = {
    right: "40%",
    textAlign: "right"
  };
  let stylePrevArrow = {
    left: "40%",
    textAlign: "left"
  };
  const { onClick } = props;
  return (
    <>
      {direction === "next" ? (
        <a
          id="slickNext"
          className={classes.slickArrow}
          style={styleNextArrow}
          onClick={onClick}
        >
          {">>"}
        </a>
      ) : (
        ""
      )}
      {direction === "prev" ? (
        <a
          id="slickPrev"
          className={classes.slickArrow}
          style={stylePrevArrow}
          onClick={onClick}
        >
          {"<<"}
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export const GallerySlider = () => {
  const setSlider = () => {
    let countSliderImages = 7;
    let arrayOfImagesSrc = [];
    for (let i = 0; i < countSliderImages; i++) {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        arrayOfImagesSrc.push(
          `static/images/gallerySlider/desktop/gallery_img_${i + 1}.jpg`
        );
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        arrayOfImagesSrc.push(
          `static/images/gallerySlider/tablet/gallery_img_${i + 1}.jpg`
        );
      } else {
        arrayOfImagesSrc.push(
          `static/images/gallerySlider/mobile/gallery_img_${i + 1}.jpg`
        );
      }
    }
    const slider = arrayOfImagesSrc.map(imgSrc => {
      return (
        <div className={classes.imgWrapper}>
          <img src={require(`../../${imgSrc}`)} alt="" />
        </div>
      );
    });
    return slider;
  };
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  };
  return (
    <div className={classes.container}>
      <Slider {...settings}>{setSlider()}</Slider>
    </div>
  );
};
