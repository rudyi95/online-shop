import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./style";

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.blockTitle}>Покупка</div>
        <NavLink
          className={classes.link}
          to={"/"} // "/payment"
        >
          Умови оплати
        </NavLink>
        <NavLink
          className={classes.link}
          to={"/"} // "/delivery"
        >
          Доставка
        </NavLink>
      </div>
      <div>
        <div className={classes.blockTitle}>Про нас</div>
        <NavLink
          className={classes.link}
          to={"/"} // "/info"
        >
          Інформація про магазин
        </NavLink>
      </div>
      <div>
        <div className={classes.blockTitle}>Соціальні мережі</div>
        <a className={classes.link} href="https://www.instagram.com/13_bootlegger/" target="blank">
          <div className={classes.socialItem}>Instagram</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
