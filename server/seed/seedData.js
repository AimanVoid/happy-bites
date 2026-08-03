import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";

import Category from "../models/Category.js";
import Product from "../models/Product.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("🌱 Starting database seeding...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();