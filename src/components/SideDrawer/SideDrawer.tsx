import React, { useState } from "react";
import { Link } from "react-scroll";

import classes from "./SideDrawer.module.scss";

import bgImage from "../../static/images/bg_side_drawer.jpg";
import ornamentImage from "../../static/images/separator_line.png";
import iconCloseSideDrawer from "../../static/icons/empire.svg";

export const SideDrawer = () => {
  const [isSideDrawerOpened, toggleStateSideDrawer] = useState(false);
  let bgSideDrawerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgImage})`,
    width: isSideDrawerOpened ? "200px" : "20px"
  };
  let sideDrawerNavStyle = {
    width: isSideDrawerOpened ? "180px" : "0",
    transition: isSideDrawerOpened ? "width 0.6s" : "width 0.6s"
  };
  let ornamentStyle = {
    width: isSideDrawerOpened ? "200px" : "0",
    transition: isSideDrawerOpened ? "width 0.6s" : "width 0.6s"
  };

  return (
    <nav className={classes.sideDrawer} style={bgSideDrawerStyle}>
      <div className={classes.navWrapper}>
        <div className={classes.navButton}>
          <button
            onClick={
              isSideDrawerOpened
                ? () => toggleStateSideDrawer(false)
                : () => toggleStateSideDrawer(true)
            }
          >
            {isSideDrawerOpened ? (
              "X"
            ) : (
              <img src={iconCloseSideDrawer} alt="close" />
            )}
          </button>
        </div>
        <div className={classes.menuWrapper} style={sideDrawerNavStyle}>
          <ul className={`${classes.menu} ${classes.navMenu}`}>
            <li className={classes.navItem}>
              <Link
                className={classes.navItem}
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navItem}
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navItem}
                to="barbers"
                spy={true}
                smooth={true}
                duration={500}
              >
                Barbers
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navItem}
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                className={classes.navItem}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className={`${classes.menu} ${classes.subMenu}`}>
            <li className={classes.navItem}>
              <a href="/">Book&nbsp;online</a>
            </li>
            <li className={classes.navItem}>
              <a href="/">Telephone</a>
            </li>
            <li className={classes.navItem}>
              <a href="/">Location</a>
            </li>
            <li className={classes.navItem}>
              <a href="/">Instagram</a>
            </li>
            <li className={classes.navItem}>
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className={classes.bottomOrnament} style={ornamentStyle}>
          <img src={ornamentImage} alt="ornament" />
        </div>
      </div>
    </nav>
  );
};
