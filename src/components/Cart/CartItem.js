import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const incrementHandler = () => {
    props.onIncrement(props.item);
  };

  const decrementHandler = () => {
    props.onDecrement(props.item.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.summary}>
        <h3>{props.item.name}</h3>
        <div className={classes["price-amount"]}>
          <span className={classes.price}>${props.item.price}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
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
