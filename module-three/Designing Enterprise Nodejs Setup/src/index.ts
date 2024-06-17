import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { router as StudentRouter } from "../src/routes/Student";
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
const port = 3000;

AppDataSource.initialize()
  .then(async () => {
    app.use(StudentRouter);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
