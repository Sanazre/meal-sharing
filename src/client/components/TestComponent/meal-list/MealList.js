import React, { useEffect } from "react";
import { useState } from "react";
import "./mealList.css"; // Import your CSS file

const getData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/meals");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

function MealList() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const food = await getData();
      setMeals(food); // Set meals when the promise resolves
    };

    fetchMeals();
  }, []);
  return (
    <div className="meal-list-container">
      {" "}
      {/* Apply CSS class */}
      {meals.map((meal) => (
        <div className="meal-card" key={meal.id}>
          {" "}
          {/* Apply CSS class */}
          <p>{meal.title}</p>
          <p>Price: {meal.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MealList;
