import { useContext, useState } from "react";
import StoreContext from "../../store/store-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const context = useContext(StoreContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const fixedTotalAmount = context.totalAmount.toFixed(2);

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const incrementHandler = (item) => {
    context.addItem({
      ...item,
      amount: 1,
    });
  };

  const decrementHandler = (id) => {
    context.removeItem(id);
  };

  const submitOrderHandler = (userData) => {
    fetch(
      "https://react-http-b3296-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: context.items }),
      }
    );
  };

  const cartItems = (
    <ul>
      {context.items.map((item) => {
        return (
          <CartItem
            item={item}
            key={item.id}
            onIncrement={incrementHandler}
            onDecrement={decrementHandler}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes.cancel} onClick={props.onClose}>
        Close
      </button>
      {context.items.length > 0 && (
        <button className={classes.order} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose} className={classes.cart}>
      {context.items.length > 0 && cartItems}
      <div className={classes["cart-summary"]}>
        <h2>Total Amount</h2>
        <span className={classes.amount}>${fixedTotalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
