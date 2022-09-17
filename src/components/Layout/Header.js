import { Fragment } from "react";

import classes from "./Header.module.css";
import headerImg from "../../assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["landing-image"]}>
        <img src={headerImg} alt="Table full of food." />
      </div>
    </Fragment>
  );
};

export default Header;
