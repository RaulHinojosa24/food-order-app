import { useContext } from "react";
import StoreContext from "../../store/store-context";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const context = useContext(StoreContext);

  const decrementHandler = () => {
    context.removeItem(item.id);
  };
  const incrementHandler = () => {
    context.addItem({
      ...item,
      amount: 1,
    });
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.summary}>
        <h3>{item.name}</h3>
        <div className={classes["price-amount"]}>
          <span className={classes.price}>${item.price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
