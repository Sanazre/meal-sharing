import express from "express";
const router = express.Router();
import knex from "../database.js";
//-------------------------------------------
// GET/api/reservations  - Returns all reservations (http://localhost:5000/api/reservations/)
router.get("/", async (req, res) => {
  try {
    const allReservations = await knex.select("*").from("reservation");
    if (allReservations) {
      res.status(200).json(allReservations);
    } else {
      res.status(404).send("The reservations were not found");
    }
  } catch (error) {
    console.error("Server Error", err);
    res.status(500).json({ error: "Server Error: Not able to fetch data" });
  }
});
// POST /api/reservations - Adds a new reservation to the database
router.post("/", async (req, res) => {
  try {
    const newReservation = req.body;
    const newReservationAdded = await knex("reservation").insert(
      newReservation
    );
    if (newReservationAdded) {
      res
        .status(201)
        .json({ message: "The reservation was created successfully" });
    }
    res.status(404).send("Adding new reservation didn't secceeed.");
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send({ error: "Server Error: Not able to fetch data" });
  }
});
// GET /api/reservations/:id - Returns the reservation by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const reservationByIdById = await knex
      .select("*")
      .from("reservation")
      .where("id", id);
    if (mealById) {
      res.status(200).json(reservationByIdById);
    } else {
      res.status(404).send("The reservation was not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: Not able to fetch data" });
  }
});
// PUT /api/reservations/:id - Updates the reservation by id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateReservation = req.body;
    const updatedReservationById = await knex("Meal")
      .where("id", id)
      .update(updateReservation);
    if (updatedReservationById) {
      res.json({ message: "Reservation updated successfully" });
    } else {
      res.status(404).send("The reservation was not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: Not able to fetch data" });
  }
});
// DELETE /api/reservations/:id - Deletes the reservation by id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedReservationById = await knex("Meal").where("id", id).del();
    if (deletedReservationById) {
      res.json({ message: "The reservationl was deleted successfully" });
    } else {
      res.status(404).json({ error: "The reservation was not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error: Not able to fetch data" });
  }
});
export default router;
