import { useState, useEffect } from "react";
import ListItemWithBorder from "./listItemWithBorder";
import apiurl from "../apiurl";
function MealsList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(apiurl("/api/meals"))
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4 className="title">List of meals and prices</h4>
          <ul style={{ paddingLeft: "30px" }}>
            {meals.map((meal) => (
              <ListItemWithBorder key={meal.id}>
                <strong>{meal.title}</strong>: <i>{meal.description}</i>,{" "}
                <strong>
                  <i>price:</i>
                </strong>{" "}
                {meal.price} kr.
              </ListItemWithBorder>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default MealsList;
