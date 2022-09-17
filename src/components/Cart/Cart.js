import { useContext } from "react";
import StoreContext from "../../store/store-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(StoreContext);

  const fixedTotalAmount = context.totalAmount.toFixed(2);

  const orderHandler = () => {
    console.log("Order sent!");
  };

  const cartItems = (
    <ul>
      {context.items.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </ul>
  );

  return (
    <Modal
      onClose={props.onClose}
      isCartOpen={props.isCartOpen}
      className={classes.cart}
    >
      {context.items.length > 0 && cartItems}
      <div className={classes["cart-summary"]}>
        <h2>Total Amount</h2>
        <span className={classes.amount}>${fixedTotalAmount}</span>
      </div>
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
    </Modal>
  );
};

export default Cart;
