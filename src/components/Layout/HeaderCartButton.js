import { useContext, useEffect, useState } from "react";
import StoreContext from "../../store/store-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const { items } = useContext(StoreContext);
  const [totalMeals, setTotalMeals] = useState(0);

  useEffect(() => {
    setTotalMeals(
      items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0)
    );
  }, [items]);

  return (
    <button className={classes["header__button"]}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{totalMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
