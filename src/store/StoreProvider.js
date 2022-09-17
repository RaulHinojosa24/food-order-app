import React, { useReducer } from "react";

import StoreContext from "./store-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items];
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      updatedItems[existingCartItemIndex].amount += action.item.amount;
    } else {
      updatedItems = [...updatedItems, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = [...state.items];

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const itemToBeRemoved = updatedItems[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - itemToBeRemoved.price;

    if (itemToBeRemoved.amount === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      itemToBeRemoved.amount -= 1;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return state;
};

const StoreProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
