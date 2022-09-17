import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <li className={classes["meal-item"]}>
      <div className={classes.meal}>
        <span className={classes.name}>{meal.name}</span>
        <span className={classes.description}>{meal.description}</span>
        <span className={classes.price}>${meal.price}</span>
      </div>
      <MealItemForm id={meal.id}></MealItemForm>
    </li>
  );
};

export default MealItem;
