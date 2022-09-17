import { useContext, useEffect, useState } from "react";
import StoreContext from "../../store/store-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { items } = useContext(StoreContext);
  const totalMeals = items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  const [bounce, setBounce] = useState(false);

  const openCartHandler = () => {
    props.onOpenCart();
  };

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBounce(true);

    const timeout = setTimeout(() => {
      setBounce(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  return (
    <button
      className={`${classes["header__button"]} ${bounce ? classes.bounce : ""}`}
      onClick={openCartHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{totalMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
