import reservationsRouter from "./api/reservations.js";
import path from "path";
import cors from "cors";
import express from "express";
import reviewsRouter from "./api/reviews.js";
import mealsRouter from "./api/meals.js";
const app = express();
const router = express.Router();
const buildPath = "../../dist";
const port = process.env.PORT || 3000;
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

//__________________________________________________
if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// for the frontend. Will first be covered in the react class
// app.use("*", (req, res) => {
//   res.json({ message: "Route not found" });
// });

export default app;
