import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const input = useRef();
  const [inputValid, setInputValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const inputValue = input.current.value;

    if (inputValue.trim().length === 0 || +inputValue < 1 || +inputValue > 5) {
      setInputValid(false);
      return;
    }

    setInputValid(true);

    props.onAddToCart(+inputValue);
  };

  return (
    <div className={classes["meal-form"]}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor={props.id}>Amount</label>
          <input
            ref={input}
            id={props.id}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>
        <div>
          {!inputValid && (
            <p className={classes.error}>Please enter a valid amount (1-5)</p>
          )}
          <button type="submit">+ Add</button>
        </div>
      </form>
    </div>
  );
};

export default MealItemForm;
