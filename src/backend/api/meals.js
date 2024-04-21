import express from "express";
//to get connected to the database
import knex from "../database.js";
const router = express.Router();
//_____________________ WEEKK1 ___________________________
const todayDate = new Date();
router.get("/future-meals", async (req, res) => {
  try {
    const futureMeals = await knex
      .select("*")
      .from("Meal")
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
router.get("/past-meals", async (req, res) => {
  try {
    const pastMeals = await knex
      .select("*")
      .from("Meal")
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
router.get("/", async (req, res) => {
  try {
    const allMeals = await knex.select("*").from("Meal").orderBy("id"); // Sorting by ID
    if (allMeals.length > 0) {
      res.status(200).json(allMeals);
      return
    }
    res.status(404).send("The data you have requested for meals is not found");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Error: Not able to fetch data for meals");
  }
});
//first-meal  Respond with the first meal (meaning with the minimum id) -respond with a single meal, meaning an object
router.get("/first-meal", async (req, res) => {
  try {
    const firstMeal = await knex
      .select("*")
      .from("Meal")
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
router.get("/last-meal", async (req, res) => {
  try {
    const lastMeal = await knex
      .select("*")
      .from("Meal")
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

export default router;
