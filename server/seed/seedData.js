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

    const categories = await Category.find();

    const categoryMap = {};

categories.forEach((category) => {
  categoryMap[category.name] = category._id;
});

const products = [
  {
    name: "Chicken Burger",
    price: 650,
    description: "Delicious grilled chicken burger",
    category: categoryMap["Human Food"],
    stock: 50,
    images: [
      "https://dummyimage.com/600x400/ff914d/ffffff&text=Chicken+Burger",
    ],
    ingredients: ["Chicken", "Bun", "Cheese", "Lettuce"],
    isFeatured: true,
    isBestSeller: true,
  },

  {
    name: "Zinger Burger",
    price: 750,
    description: "Crispy zinger burger with cheese",
    category: categoryMap["Human Food"],
    stock: 40,
    images: [
      "https://dummyimage.com/600x400/f39c12/ffffff&text=Zinger+Burger",
    ],
    ingredients: ["Chicken", "Bun", "Cheese"],
    isFeatured: true,
    isBestSeller: false,
  },

  {
    name: "Beef Burger",
    price: 850,
    description: "Juicy beef burger",
    category: categoryMap["Human Food"],
    stock: 35,
    images: [
      "https://dummyimage.com/600x400/e67e22/ffffff&text=Beef+Burger",
    ],
    ingredients: ["Beef", "Bun", "Cheese"],
    isFeatured: false,
    isBestSeller: true,
  },
];

await Product.deleteMany({});

await Product.insertMany(products);

console.log("✅ Products seeded successfully");


  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();