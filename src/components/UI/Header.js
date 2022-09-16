import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header__title"]}>Food Order</h1>
    </header>
  );
};

export default Header;
