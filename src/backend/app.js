import express from "express";
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
const app = express();
const router = express.Router();
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

import mealsRouter from "./api/meals.js";
const port = process.env.PORT || 3000;

// For week4 no need to look into this!
// Serve the built client html

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

//router.use("/meals", mealsRouter);

app.get("/users/sanaz" ,(req,res)=>{
    res.send('hello Mahmod')
})

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// for the frontend. Will first be covered in the react class
app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

export default app;
