import { useContext } from "react";
import StoreContext from "../../../store/store-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const context = useContext(StoreContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      ...meal,
      amount,
    });
  };

  return (
    <li className={classes["meal-item"]}>
      <div className={classes.meal}>
        <span className={classes.name}>{meal.name}</span>
        <span className={classes.description}>{meal.description}</span>
        <span className={classes.price}>${meal.price}</span>
      </div>
      <MealItemForm id={meal.id} onAddToCart={addToCartHandler}></MealItemForm>
    </li>
  );
};

export default MealItem;
