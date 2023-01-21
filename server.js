//Imports
import db from "./db/connection.js"
import routes from "./routes/index.js"
//Import Dependencies
import cors from 'cors'
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

//variables
const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

//Uses
app.use(express.json());
app.use("/", routes);
app.use(cors)

//db connection
db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on port: ${PORT}`
    );
  });
});
