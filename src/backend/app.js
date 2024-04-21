import express from "express";
const app = express();
const router = express.Router();
import path from "path";
import mealsRouter from "./api/meals.js";
import reservationsRouter from "./api/reservations.js";
import reviewsRouter from "./api/reviews.js";
const buildPath = "../../dist";
const port = process.env.PORT || 3000;
import cors from "cors";
//to get connected to the database
import knex from "./database.js";
// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());
router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
//_____________________ WEEKK1 ___________________________
const todayDate = new Date();
app.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex
      .select("*")
      .from("meal")
      .where("meal_time", ">", todayDate);
    if (futureMeals.lenght > 0) {
      res.status(200).json(futureMeals);
    }
    res
      .status(404)
      .send("The data you have requested for Future Meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for future meals");
  }
});
//past-meals  Respond with all meals in the past (relative to the meal_time datetime)
app.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex
      .select("*")
      .from("meal")
      .where("meal_time", "<", todayDate);
    if (pastMeals.length > 0) {
      res.status(200).json(pastMeals);
    }
    res
      .status(404)
      .send("The data you have requested for Past Meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for past meals");
  }
});
//all-meals Respond with all meals sorted by ID - respond with a collection of meals, meaning an array of objects.
app.get("/all-meals", async (req, res) => {
  try {
    const allMeals = await knex.select("*").from("meal").orderBy("id"); // Sorting by ID
    if (allMeals.length > 0) {
      res.status(200).json(allMeals);
    }
    res.status(404).send("The data you have requested for meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});
//first-meal  Respond with the first meal (meaning with the minimum id) -respond with a single meal, meaning an object
app.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex
      .select("*")
      .from("meal")
      .orderBy("id")
      .limit(1); // Limiting the result to just one meal
    if (firstMeal.length > 0) {
      res.status(200).json(firstMeal);
    }
    res
      .status(404)
      .send(
        "The data you have requested for First Meal with the minimum ID is not found"
      );
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});
//last-meal Respond with the last meal (meaning with the maximum id)- respond with a single meal, meaning an object
app.get("/last-meal", async (req, res) => {
  try {
    const lastMeal = await knex
      .select("*")
      .from("meal")
      .orderBy("id", "desc")
      .limit(1);
    if (lastMeal.length > 0) {
      res.status(200).json(lastMeal);
    }
    res
      .status(404)
      .send(
        "The data you have requested for First Meal with the minimum ID is not found"
      );
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});
//__________________________________________________
if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}
// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.json({ message: "Route not found" });
});
export default app;
