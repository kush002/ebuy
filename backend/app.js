import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";
const app = express();

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use("/api", productRoute);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on Port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
