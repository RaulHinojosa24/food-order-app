import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    fetch(
      "https://react-http-b3296-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(
          Object.keys(data).map((key) => {
            return { id: key, ...data[key] };
          })
        );

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (httpError) {
    return <section className={classes["meals-error"]}>{httpError}</section>;
  }

  if (isLoading) {
    return <section className={classes["meals-loading"]}>Loading...</section>;
  }

  return (
    <Card className={classes["available-meals"]}>
      <ul>
        {meals.map((meal) => (
          <MealItem meal={meal} key={meal.id}></MealItem>
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
