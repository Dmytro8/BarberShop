import React from "react";

import classes from "./ContactSection.module.scss";
import { SectionTitle } from "../../components/SectionTitle";

import bgContactImg from "../../static/images/bgContact1.jpg";

export const ContactSection = () => {
  let bgContactStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgContactImg})`,
    backgroundAttachment: "fixed"
  };
  return (
    <section id="contact" className={classes.wrapper} style={bgContactStyle}>
      <div className={classes.wrapper}>
        <SectionTitle title="contact" isOrnamentWhite={true} />
        <div className={classes.contactContainer}>
          <div className={classes.contactLocation}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={classes.openHours}>
            <h2>Hours of operation</h2>
            <h4>
              <i>Tues - Friday 9 to 6</i>
            </h4>
            <h4>
              <i>Saturday 10 to 5</i>
            </h4>
          </div>
          <div className={classes.contactCards}>
            <a
              href="https://www.google.com/maps/place/Krak%C3%B3w/@50.0604359,19.9394749,15z/data=!4m5!3m4!1s0x471644c0354e18d1:0xb46bb6b576478abf!8m2!3d50.0646501!4d19.9449799"
              target="_blank"
              className={classes.contactCard}
            >
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location:</h3>
              <h4>Lorem ipsum dolor sit amet</h4>
            </a>
            <a href="tel:1111111111" className={classes.contactCard}>
              <i className="fas fa-phone-alt"></i>
              <h3>Phone:</h3>
              <h4>(111) 111.1111</h4>
            </a>
            <a href="#bookings" className={classes.contactCard}>
              <i className="far fa-calendar-check"></i>
              <h3>Bookings:</h3>
              <h4>Book your next appointment</h4>
            </a>
          </div>
          <div className={classes.getInTouch}>
            <h2>Get in touch with us</h2>
            <h4>dm.patalakha@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
