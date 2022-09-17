import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={classes["meal-form"]}>
      <form>
        <div>
          <label htmlFor={props.id}>Amount</label>
          <input
            id={props.id}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
