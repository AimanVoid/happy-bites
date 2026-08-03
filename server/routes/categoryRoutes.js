import express from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// GET all categories
router.get("/", getCategories);

// POST create category
router.post("/", createCategory);

export default router;