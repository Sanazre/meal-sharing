import express from "express";
const mealsRouter = express.Router();
import knex from "../database.js";

mealsRouter.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("Meals");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

export default mealsRouter;
