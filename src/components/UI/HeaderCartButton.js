import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes["header__button"]}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
