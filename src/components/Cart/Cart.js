import { useContext, useState } from "react";
import StoreContext from "../../store/store-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const context = useContext(StoreContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [httpError, setHttpError] = useState(null);

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
    setIsSubmitting(true);
    fetch(
      "https://react-http-b3296-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: context.items }),
      }
    )
      .then(() => {
        setHttpError(null);
        setIsSubmitting(false);
        setDidSubmit(true);
        context.clearCart();
      })
      .catch((error) => {
        setHttpError(error.message);
        setIsSubmitting(false);
      });
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

  const cartModalContent = (
    <>
      {context.items.length > 0 && cartItems}
      <div className={classes["cart-summary"]}>
        <h2>Total Amount</h2>
        <span className={classes.amount}>${fixedTotalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.cancel} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  const httpErrorModalContent = (
    <>
      <p>{httpError}</p>
      <div className={classes.actions}>
        <button className={classes.cancel} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose} className={classes.cart}>
      {!httpError && !isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
      {httpError && httpErrorModalContent}
    </Modal>
  );
};

export default Cart;
