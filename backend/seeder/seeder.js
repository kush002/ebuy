import mongoose from "mongoose";
import Product from "../models/product.js";
import product from "./data.js";

const seedProduct = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ebuy");

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(product);
    console.log("Products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProduct();
